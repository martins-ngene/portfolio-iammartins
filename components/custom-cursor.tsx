"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const curRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Disable on touch devices / small screens
    const mq = window.matchMedia("(max-width: 768px)")
    const checkMobile = () => setIsMobile(mq.matches || "ontouchstart" in window)
    checkMobile()
    mq.addEventListener("change", checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (curRef.current) {
        curRef.current.style.left = `${e.clientX}px`
        curRef.current.style.top = `${e.clientY}px`
      }
      if (!visible) setVisible(true)
    }

    const handleMouseEnter = () => setHovering(true)
    const handleMouseLeave = () => setHovering(false)

    document.addEventListener("mousemove", handleMouseMove)

    // Observe interactive elements for hover state
    const attachHoverListeners = () => {
      const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select, [onclick]")
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })
      return interactives
    }

    let interactives = attachHoverListeners()

    // Re-attach on DOM changes (e.g. route changes, dynamic content)
    const observer = new MutationObserver(() => {
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
      interactives = attachHoverListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    // Ring lag animation via requestAnimationFrame
    let rafId: number
    const loop = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.1
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`
        ringRef.current.style.top = `${ringPos.current.y}px`
      }
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
      observer.disconnect()
      cancelAnimationFrame(rafId)
      mq.removeEventListener("change", checkMobile)
    }
  }, [visible])

  if (isMobile) return null

  return (
    <>
      {/* Dot */}
      <div
        ref={curRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fire mix-blend-multiply transition-[width,height,background] duration-200"
        style={{
          width: hovering ? 18 : 10,
          height: hovering ? 18 : 10,
          opacity: visible ? 1 : 0,
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-fire transition-[width,height,opacity] duration-200"
        style={{
          width: hovering ? 52 : 36,
          height: hovering ? 52 : 36,
          opacity: visible ? 0.5 : 0,
        }}
      />
    </>
  )
}
