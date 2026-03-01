"use client"

import { Mail } from "lucide-react"
import { useFadeIn } from "@/hooks/use-fade-in"

const links = [
  {
    label: "LinkedIn",
    platform: "linkedin.com/in/martins-ngene",
    href: "https://www.linkedin.com/in/martins-ngene/",
  },
  {
    label: "GitHub",
    platform: "github.com/martins-ngene",
    href: "https://github.com/martins-ngene",
  },
  {
    label: "X / Twitter",
    platform: "x.com/martins_ngene",
    href: "https://x.com/martins_ngene",
  },
  {
    label: "Email",
    platform: "martinsngene.dev@gmail.com",
    href: "mailto:martinsngene.dev@gmail.com",
  },
]

export function Contact() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="contact" className={`py-[clamp(5rem,10vw,10rem)] section-reveal ${isVisible ? "is-visible" : ""}`}>
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,4.5rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left */}
          <div className="stagger-child">
            <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-black leading-none tracking-tight mb-6">
              {"Let's build"}
              <br />
              <em className="italic font-normal text-fire">
                something
                <br />
                real.
              </em>
            </h2>
            <p className="text-base text-ink3 leading-relaxed max-w-[400px] mb-8">
              {"I'm open to senior engineering roles, interesting consulting work, and conversations worth having."}
            </p>
            <a
              href="mailto:hello@martins.dev"
              className="inline-flex items-center gap-3 font-mono text-[0.9rem] text-foreground border-b-2 border-fire pb-1 transition-colors hover:text-fire"
            >
              <Mail size={16} />
              hello@martins.dev
            </a>
          </div>

          {/* Right */}
          <div className="stagger-child pt-2">
            <ul className="list-none border-t border-rule">
              {links.map((link) => (
                <li key={link.label} className="border-b border-rule">
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between py-5 text-[0.88rem] font-semibold text-ink3 transition-all hover:text-fire hover:pl-2 group"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-[0.62rem] tracking-wider uppercase text-ink4 mr-auto ml-4">
                      {link.platform}
                    </span>
                    <span className="text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5">
                      {"↗"}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
