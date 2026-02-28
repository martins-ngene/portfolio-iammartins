"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

const footerChips = ["Next.js", "Sanity.io", "TypeScript", "Vercel"]

export function Footer() {
  const { ref, isVisible } = useFadeIn({ threshold: 0.3 })

  return (
    <footer ref={ref as React.RefObject<HTMLElement>} className={`bg-ink text-paper px-[clamp(1.5rem,5vw,4.5rem)] py-7 flex items-center justify-between flex-wrap gap-4 section-reveal ${isVisible ? "is-visible" : ""}`}>
      <span className="font-mono text-[0.68rem] text-[#555] tracking-wider">
        {"© 2026 Martins — Full Stack Engineer"}
      </span>
      <div className="flex gap-1.5">
        {footerChips.map((chip) => (
          <span
            key={chip}
            className="font-mono text-[0.6rem] px-2 py-1 border border-ink2 text-[#555] tracking-wider"
          >
            {chip}
          </span>
        ))}
      </div>
    </footer>
  )
}
