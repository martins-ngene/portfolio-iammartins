"use client"

import { useFadeIn } from "@/hooks/use-fade-in"

const experiences = [
  {
    period: "Mar 2025 — Present",
    current: true,
    role: "Full Stack Engineer",
    company: "Ventura TRAVEL",
    location: "Remote",
    bullets: [
      <>
        Engineered an invoice validation pipeline that{" "}
        <strong>eliminated 25 hours of manual work weekly</strong> — modelled the business logic
        precisely enough to automate it completely end-to-end
      </>,
      <>
        Led the full migration of automation workflows from Make.com to n8n, converting black-box
        scenario blueprints into <strong>typed, version-controlled TypeScript</strong> — making
        implicit logic explicit for the first time
      </>,
      <>
        Collaborated on building an internal CRM to replace HubSpot,{" "}
        <strong>reducing tooling costs</strong> while producing a better fit for actual team
        workflows
      </>,
      <>
        Built event-driven reservation and flight processing systems using{" "}
        <strong>Hasura GraphQL, webhooks, and async TypeScript handlers</strong>
      </>,
    ],
    stack: ["TypeScript", "Nest.js", "GraphQL", "Hasura", "n8n", "PostgreSQL", "Node.js", "Agentic AI"],
  },
  {
    period: "Sep 2023 — Feb 2025",
    current: false,
    role: "Founder & Senior Full Stack Engineer",
    company: "FlowKeit",
    location: "Remote",
    bullets: [
      <>
        Built and optimised full-stack applications with deliberate decisions about{" "}
        <strong>SSR, SSG, and CSR rendering strategies</strong> based on real performance
        requirements
      </>,
      <>
        Refactored legacy codebases — replaced arrow code with early returns, implicit logic with{" "}
        <strong>explicit TypeScript types</strong>, and {"\"it works, don't touch it\""} with code
        the team could extend
      </>,
      <>
        Contributed to codebase quality through systematic refactoring, test coverage, and
        documentation for distributed teams across time zones
      </>,
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Ruby", "Ruby on Rails", "Python", "Flask"],
  },
  {
    period: "Oct 2022 — Mar 2023",
    current: false,
    role: "Senior Software Engineer (Frontend)",
    company: "oLab",
    location: "Remote",
    bullets: [
      <>
        Built UI components and features close to the user in a fast-moving environment where{" "}
        <strong>adaptability was a daily requirement</strong>
      </>,
      <>
        Developed React components with clean state management and{" "}
        <strong>API integration patterns</strong> that the team could extend without fear
      </>,
    ],
    stack: ["React", "JavaScript", "REST APIs"],
  },
  {
    period: "Oct 2021 — Mar 2022",
    current: false,
    role: "Software Engineer (Frontend)",
    company: "Kleekit",
    location: "Hybrid",
    bullets: [
      <>
        Delivered client-facing web projects across multiple industries under tight delivery
        timelines — built the habit of{" "}
        <strong>shipping clean code even when the environment was ambiguous</strong>
      </>,
      <>
        Worked with design handoffs, browser compatibility requirements, and multi-stakeholder
        feedback cycles
      </>,
    ],
    stack: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS"],
  },
]

export function Experience() {
  const { ref, isVisible } = useFadeIn()

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="experience" className={`py-[clamp(4rem,9vw,8rem)] border-b border-rule section-reveal ${isVisible ? "is-visible" : ""}`}>
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,4.5rem)]">
        {/* Section header */}
        <div className="grid grid-cols-[auto_1fr] gap-8 items-end pb-12 border-b border-rule mb-[clamp(2.5rem,5vw,4rem)]">
          <div>
            <span className="font-mono text-[0.65rem] text-fire tracking-[0.15em]">02 / 03</span>
          </div>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-black leading-tight tracking-tight">
            Work <em className="font-normal italic text-fire">Experience</em>
          </h2>
        </div>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <div
              key={exp.role + exp.period}
              className={`stagger-child grid grid-cols-1 md:grid-cols-[220px_1fr] gap-3 md:gap-12 py-10 border-b border-rule transition-colors group hover:bg-paper2 hover:-mx-[clamp(1.5rem,5vw,4.5rem)] hover:px-[clamp(1.5rem,5vw,4.5rem)] ${
                i === 0 ? "border-t" : ""
              }`}
            >
              {/* Meta */}
              <div>
                <div className="font-mono text-[0.68rem] text-ink4 tracking-wider mb-1">
                  {exp.period}
                </div>
                {exp.current && (
                  <span className="inline-block font-mono text-[0.6rem] font-medium tracking-wider uppercase bg-fire text-accent-foreground px-2 py-0.5 mt-1">
                    Current
                  </span>
                )}
              </div>

              {/* Body */}
              <div>
                <h3 className="font-serif text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold leading-snug mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-ink3 font-medium mb-5">
                  {exp.company} &middot; {exp.location}
                </p>
                <ul className="flex flex-col gap-2 mb-5 list-none">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-[0.9rem] text-ink3 pl-5 relative leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-fire before:font-bold [&_strong]:text-foreground [&_strong]:font-semibold"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[0.65rem] px-3 py-1 bg-paper border border-rule text-ink3 tracking-wider"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
