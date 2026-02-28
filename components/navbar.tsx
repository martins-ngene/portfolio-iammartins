"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper border-b border-rule h-14 flex items-center justify-between px-[clamp(1.5rem,5vw,4.5rem)]">
      <a href="#hero" className="font-serif text-lg font-bold tracking-tight text-foreground">
        Martins
        <sup className="font-mono text-[0.55rem] font-normal text-fire align-super tracking-wider">
          FSE
        </sup>
      </a>

      {/* Desktop nav */}
      <ul className="hidden md:flex list-none">
        {navLinks.map((link, i) => (
          <li key={link.href}>
            {i < navLinks.length - 1 ? (
              <a
                href={link.href}
                className="block px-5 h-14 leading-[56px] font-sans text-[0.72rem] font-semibold tracking-widest uppercase text-ink3 border-l border-rule transition-colors hover:text-fire hover:bg-fire-bg"
              >
                {link.label}
              </a>
            ) : (
              <a
                href={link.href}
                className="block px-5 h-14 leading-[56px] font-sans text-[0.72rem] font-semibold tracking-widest uppercase bg-ink text-paper border-l border-rule border-r border-rule transition-colors hover:bg-fire hover:text-accent-foreground"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden p-2 text-foreground"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-14 left-0 right-0 bg-paper border-b border-rule md:hidden animate-fade-slide-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-4 font-sans text-sm font-semibold tracking-widest uppercase text-ink3 border-b border-rule transition-colors hover:text-fire hover:bg-fire-bg"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
