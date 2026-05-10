"use client"

import { useState } from "react"
import { useFadeIn } from "@/hooks/use-fade-in"
import { ChevronDown } from "lucide-react"

const skillCategories = [
  {
    label: "Languages & Types",
    title: "Languages & Types",
    body: (
      <>
        TypeScript is my primary language across the full stack. I write strongly-typed, readable
        code with proper interfaces, generics, and null handling built in from the start — code
        {"that's "}
        <strong className="text-foreground font-semibold">
          built to be understood by the next engineer in the future
        </strong>
        , not just to compile today. I work in JavaScript daily, applying modern patterns
        like async/await, destructuring, and functional array methods.
      </>
    ),
    tags: [
      { label: "TypeScript", on: true },
      { label: "JavaScript", on: true },
      { label: "Python", on: false },
      { label: "Ruby", on: false },
      { label: "SQL", on: false },

     
    ],
  },
  {
    label: "Frontend Engineering",
    title: "Frontend Engineering",
    body: (
      <>
        I build production-grade interfaces with Vue.js, React and Next.js, making deliberate decisions about
        rendering strategies — server-side, static, or client-side —{" "}
        <strong className="text-foreground font-semibold">
          based on performance requirements, not convention
        </strong>
        . I manage complex application state with Redux Toolkit, and build consistent, accessible UIs
        with Tailwind CSS and Shadcn.
      </>
    ),
    tags: [
      { label: "React.js", on: true },
      { label: "Next.js", on: true },
      { label: "HTML", on: false },
      { label: "CSS", on: false },
      { label: "Vue.js", on: false },
      { label: "Redux Toolkit", on: false },
      { label: "Tailwind CSS", on: false },
      { label: "Shadcn UI", on: false },
      
    ],
  },
  {
    label: "Backend Engineering",
    title: "Backend Engineering",
    body: (
      <>
        Node.js is my backend foundation — Express for simplicity, NestJS when a codebase needs
        modularity and the team needs guardrails. I design REST APIs with{" "}
        <strong className="text-foreground font-semibold">
          failure as a first-class concern
        </strong>
        : graceful degradation, intelligent retry logic, rate limiting, and logging clear enough to
        debug under pressure.
      </>
    ),
    tags: [
      { label: "Node.js", on: true },
      { label: "NestJS", on: true },
      { label: "Express.js", on: false },
      { label: "Ruby On Rails", on: false },
      { label: "Flask", on: false },
      { label: "API Design & Architecture", on: false },
      { label: "REST & GraphQL APIs", on: false },
      { label: "Authentication & Authorization", on: false },
      { label: "Web Application Security", on: false },
      { label: "Containerization", on: false },
    ],
  },
  {
    label: "GraphQL & Real-Time Data",
    title: "GraphQL & Real-Time Data",
    body: (
      <>
        I treat GraphQL as a contract, not just a query format. I write queries and mutations from
        scratch, design action handlers, configure webhook triggers, and manage Hasura permissions
        across environments.{" "}
        <strong className="text-foreground font-semibold">
          I know the difference between a slow query and a missing index.
        </strong>
      </>
    ),
    tags: [
      { label: "GraphQL", on: true },
      { label: "Apollo Client", on: true },
      { label: "Hasura", on: true },
      { label: "Webhooks", on: false },
      { label: "Real-time sync", on: false },
    ],
  },
  {
    label: "Systems Automation & Integration",
    title: "Systems Automation & Integration",
    body: (
      <>
        The most underrated engineering skill is recognising when a complex manual process is really
        just an unwritten program. {"I've"} engineered end-to-end pipelines that{" "}
        <strong className="text-foreground font-semibold">
          eliminated 25 hours of weekly manual work
        </strong>{" "}
        by modelling business logic precisely enough to automate it completely.
      </>
    ),
    tags: [
      { label: "n8n", on: true },
      { label: "Make.com", on: true },
      { label: "Agentic AI", on: false },
      { label: "Generative AI", on: false },
      { label: "Pipeline Design", on: false },
      { label: "ClickUp API", on: false },
      { label: "Emails API (MailGun)", on: false },
    ],
  },
  {
    label: "Database Design And Modeling",
    title: "Database Design And Modeling",
    body: (
      <>
        I think about data models before I think about code — because{" "}
        <strong className="text-foreground font-semibold">
          the shape of the data determines the complexity of everything built above it
        </strong>
        . PostgreSQL is my daily driver: writing queries, designing schemas, managing remote
        connections over SSH tunnels, debugging lock contention and slow joins.
      </>
    ),
    tags: [
      { label: "PostgreSQL", on: true },
      { label: "MongoDB", on: false },
      { label: "SQL", on: false },
      { label: "SSH Tunnels", on: false },
      { label: "Schema Design", on: false },
    ],
  },
  {
    label: "Infrastructure & DevOps",
    title: "Infrastructure & DevOps",
    body: (
      <>
        Git, Docker, and CI/CD are tools I use as craft, not checkboxes. {"I've"} configured SSH key
        authentication, containerised local development environments, debugged ECONNREFUSED errors at
        the network layer, and written scripts that eliminate repetitive deployment tasks.{" "}
        <strong className="text-foreground font-semibold">
          A clear deployment pipeline saves days.
        </strong>
      </>
    ),
    tags: [
      { label: "Docker", on: true },
      { label: "CI/CD", on: true },
      { label: "Git", on: false },
      { label: "GitHub", on: false },
      { label: "GitLab", on: false },
      { label: "Vercel", on: false },
      { label: "Bash scripting", on: false },
    ],
  },
  {
    label: "AI Tooling & LLMs",
    title: "AI Tooling & LLMs",
    body: (
      <>
        Claude, Cursor, and v0 are tools I use to eliminate toil, not to follow trends. {"I've"} built
        prompt-driven pipelines, wired LLMs into event-driven workflows that replace hours of manual
        work, and used AI-assisted development to ship faster without cutting corners.{" "}
        <strong className="text-foreground font-semibold">
          The best automation is the one nobody notices.
        </strong>
      </>
    ),
    tags: [
      { label: "Claude AI", on: true },
      { label: "Cursor", on: true },
      { label: "v0", on: true },
      { label: "ChatGPT", on: false },
      { label: "Prompt Engineering", on: false },
      { label: "LLM APIs", on: false },
    ],
  },
  {
    label: "Technical Communication",
    title: "Technical Communication",
    body: (
      <>
        I document complex systems for both technical and non-technical stakeholders — migration
        guides, API documentation, workflow READMEs. I hold an{" "}
        <strong className="text-foreground font-semibold">EF C2 English Certificate</strong> and an{" "}
        <strong className="text-foreground font-semibold">IELTS Academic score of 7.5</strong>. I
        write with the assumption that the next reader {"won't"} be able to ask me a follow-up question.
      </>
    ),
    tags: [
      { label: "Technical Docs", on: false },
      { label: "System Design", on: false },
      { label: "EF SET C2 English", on: false },
      { label: "IELTS Academic 7.5", on: false },
      { label: "Async-first communication", on: false },
    ],
  },
]

export function Skills() {
  const [activeIdx, setActiveIdx] = useState(0)
  const active = skillCategories[activeIdx]
  const { ref, isVisible } = useFadeIn()

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="skills" className={`py-[clamp(4rem,9vw,8rem)] border-b border-rule section-reveal ${isVisible ? "is-visible" : ""}`}>
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,4.5rem)]">
        {/* Section header */}
        <div className="grid grid-cols-[auto_1fr] gap-8 items-end pb-12 border-b border-rule mb-[clamp(2.5rem,5vw,4rem)]">
          <div>
            <span className="font-mono text-[0.65rem] text-fire tracking-[0.15em]">01 / 03</span>
          </div>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-black leading-tight tracking-tight">
            Technical <em className="font-normal italic text-fire">Skills</em>
          </h2>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden flex flex-col gap-0 border border-rule">
          {skillCategories.map((cat, i) => (
            <div key={cat.label} className={i > 0 ? "border-t border-rule" : ""}>
              <button
                onClick={() => setActiveIdx(activeIdx === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-3 py-4 px-5 cursor-pointer transition-colors text-left hover:bg-paper2"
                aria-expanded={activeIdx === i}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                      activeIdx === i ? "bg-fire" : "bg-rule"
                    }`}
                  />
                  <span
                    className={`text-sm font-semibold transition-colors ${
                      activeIdx === i ? "text-foreground" : "text-ink3"
                    }`}
                  >
                    {cat.label}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-ink3 transition-transform duration-300 ${
                    activeIdx === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  activeIdx === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 pt-1">
                    <p className="text-sm text-ink3 leading-relaxed mb-5">{cat.body}</p>
                    <div className="flex flex-wrap gap-[0.4rem]">
                      {cat.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className={
                            tag.on
                              ? "font-mono text-[0.6rem] px-2 py-1 bg-ink text-paper border border-ink tracking-wider"
                              : "font-mono text-[0.6rem] px-2 py-1 bg-paper border border-rule text-ink3 tracking-wider"
                          }
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-[280px_1fr] gap-16">
          {/* Nav */}
          <nav
            className="sticky top-[calc(56px+2rem)] self-start flex flex-col gap-0"
            aria-label="Skill categories"
          >
            {skillCategories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveIdx(i)}
                className={`flex items-center gap-3 py-3 border-b border-rule cursor-pointer transition-colors text-left ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                    activeIdx === i ? "bg-fire" : "bg-rule"
                  }`}
                />
                <span
                  className={`text-sm font-semibold transition-colors ${
                    activeIdx === i ? "text-foreground" : "text-ink3"
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Panel */}
          <div key={activeIdx} className="animate-fade-slide-in">
            <h3 className="font-serif text-2xl font-bold mb-4">{active.title}</h3>
            <p className="text-base text-ink3 leading-relaxed mb-7 max-w-[600px]">{active.body}</p>
            <div className="flex flex-wrap gap-[0.4rem]">
              {active.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={
                    tag.on
                      ? "font-mono text-[0.65rem] px-3 py-1 bg-ink text-paper border border-ink tracking-wider"
                      : "font-mono text-[0.65rem] px-3 py-1 bg-paper border border-rule text-ink3 tracking-wider"
                  }
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
