"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

const tags = [
  { label: "TypeScript", highlight: true },
  { label: "GraphQL", highlight: true },
  { label: "Hasura", highlight: true },
  { label: "React", highlight: false },
  { label: "Next.js", highlight: false },
  { label: "Node.js", highlight: false },
  { label: "n8n", highlight: false },
  { label: "PostgreSQL", highlight: false },
  { label: "Docker", highlight: false },
  { label: "NestJS", highlight: false },
  { label: "Agentic AI", highlight: false },
  { label: "CI/CD", highlight: false },
]

const stats = [
  { num: "4+", label: "Years building" },
  { num: "25h", label: "Saved weekly via automation" },
  { num: "8", label: "Core skill domains" },
]

export function Hero() {
  const { ref, isVisible } = useFadeIn({ threshold: 0.1 })

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="hero"
      className={`min-h-svh grid grid-cols-1 lg:grid-cols-2 border-b border-rule pt-14 section-reveal ${isVisible ? "is-visible" : ""}`}
    >
      {/* Left */}
      <div className="stagger-child border-b lg:border-b-0 lg:border-r border-rule px-[clamp(1.5rem,5vw,4.5rem)] py-[clamp(3rem,8vw,7rem)] flex flex-col justify-between gap-10">
        <div>
          <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-fire mb-8">
            Full Stack Engineer &middot; TypeScript &middot; GraphQL &middot; Automation
          </p>
          <h1 className="font-serif text-[clamp(3rem,6.5vw,6rem)] leading-none font-black tracking-tight text-foreground mb-6">
            I build things
            <br />
            {"that "}
            <em className="italic font-normal text-fire">
              actually
              <br />
              work.
            </em>
          </h1>
          <p className="text-base text-ink3 leading-relaxed max-w-[440px] mb-10">
            {"I'm a full-stack engineer working at the intersection of "}
            <strong className="text-foreground font-semibold">product engineering</strong>
            {", "}
            <strong className="text-foreground font-semibold">API design</strong>
            {", and "}
            <strong className="text-foreground font-semibold">automation architecture</strong>
            {". I don't just build features — I build systems that remove themselves from the critical path."}
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://github.com/martins-ngene"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-sans text-[0.78rem] font-bold tracking-wider uppercase bg-ink text-paper border-[1.5px] border-ink transition-colors hover:bg-fire hover:border-fire"
            >
              {"View GitHub →"}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-sans text-[0.78rem] font-bold tracking-wider uppercase bg-transparent text-foreground border-[1.5px] border-rule transition-colors hover:border-foreground"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-6 items-center flex-wrap">
          {stats.map((stat, i) => (
            <div key={stat.label} className="contents">
              {i > 0 && <div className="w-px h-10 bg-rule hidden sm:block" />}
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-black leading-none text-foreground">
                  {stat.num}
                </span>
                <span className="font-mono text-[0.62rem] tracking-wider uppercase text-ink4">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="stagger-child hidden lg:flex flex-col justify-end px-[clamp(1.5rem,5vw,4.5rem)] py-[clamp(3rem,8vw,7rem)] bg-paper2 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-8 -right-8 w-[420px] h-[420px] border border-rule rounded-full opacity-50" />
        <div className="absolute top-8 right-8 w-[320px] h-[320px] border border-rule rounded-full opacity-40" />

        <div className="relative z-10">
          <div className="font-serif text-[6rem] leading-[0.7] text-fire opacity-25 mb-2">
            {'"'}
          </div>
          <p className="font-serif text-[clamp(1.1rem,2vw,1.45rem)] italic leading-relaxed text-ink2 mb-6">
            A process that runs on human attention is a system waiting to be built. My job is to
            build it well enough that it stops needing me.
          </p>
          <div className="flex flex-wrap gap-[0.4rem] mt-8">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className={
                  tag.highlight
                    ? "font-mono text-[0.65rem] px-3 py-1 bg-fire-bg border border-fire text-fire tracking-wider"
                    : "font-mono text-[0.65rem] px-3 py-1 bg-paper border border-rule text-ink3 tracking-wider"
                }
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
