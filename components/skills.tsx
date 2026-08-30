"use client"

import { useState } from "react"
import { useFadeIn } from "@/hooks/use-fade-in"
import { ChevronDown } from "lucide-react"

const skillCategories = [
  {
    label: "Languages",
    title: "Languages",
    body: (
      <>
        TypeScript is my primary language across the full stack, backed by strong fundamentals in
        JavaScript, Python, and Golang.{" "}
        <strong className="text-foreground font-semibold">
          I choose the right language for the problem
        </strong>{" "}
        — from scripting automation in Bash to querying data directly in SQL.
      </>
    ),
    tags: [
      { label: "TypeScript", on: true },
      { label: "JavaScript (ES6+)", on: true },
      { label: "Python", on: false },
      { label: "Golang", on: false },
      { label: "Bash", on: false },
      { label: "SQL", on: false },
    ],
  },
  {
    label: "Backend & APIs",
    title: "Backend & APIs",
    body: (
      <>
        Node.js is my backend foundation — Express for simplicity, Nest.js when a codebase needs
        modularity and guardrails. I design REST, GraphQL, and gRPC APIs with{" "}
        <strong className="text-foreground font-semibold">
          failure as a first-class concern
        </strong>
        , and reach for FastAPI or Flask when Python fits the job.
      </>
    ),
    tags: [
      { label: "Node.js", on: true },
      { label: "Nest.js", on: true },
      { label: "Express.js", on: false },
      { label: "FastAPI", on: false },
      { label: "Flask", on: false },
      { label: "GraphQL APIs", on: false },
      { label: "REST APIs", on: false },
      { label: "gRPC", on: false },
    ],
  },
  {
    label: "Frontend & UI",
    title: "Frontend & UI",
    body: (
      <>
        I build production-grade interfaces with React, Next.js, and Vue.js, making deliberate
        decisions about rendering strategies{" "}
        <strong className="text-foreground font-semibold">
          based on performance requirements, not convention
        </strong>
        . I manage state with Redux and Zustand, and build consistent, accessible UIs with Tailwind
        CSS and Radix UI.
      </>
    ),
    tags: [
      { label: "React.js", on: true },
      { label: "Next.js", on: true },
      { label: "Vue.js", on: false },
      { label: "Tailwind CSS", on: false },
      { label: "Radix UI", on: false },
      { label: "Redux", on: false },
      { label: "Zustand", on: false },
      { label: "HTML", on: false },
      { label: "CSS", on: false },
    ],
  },
  {
    label: "Databases",
    title: "Databases",
    body: (
      <>
        I think about data models before I think about code — because{" "}
        <strong className="text-foreground font-semibold">
          the shape of the data determines the complexity of everything built above it
        </strong>
        . PostgreSQL is my daily driver, MongoDB when the domain fits, and I use Prisma and Mongoose
        to keep data access type-safe.
      </>
    ),
    tags: [
      { label: "PostgreSQL", on: true },
      { label: "MongoDB", on: true },
      { label: "Prisma", on: false },
      { label: "Mongoose", on: false },
    ],
  },
  {
    label: "Cloud & Infra",
    title: "Cloud & Infra",
    body: (
      <>
        I run workloads across AWS and GCP, containerise with Docker, and orchestrate with
        Kubernetes.{" "}
        <strong className="text-foreground font-semibold">
          A clear deployment pipeline saves days
        </strong>
        , so I automate CI/CD in GitLab and offload heavy work to background queues with BullMQ.
      </>
    ),
    tags: [
      { label: "AWS (S3, EC2, IAM, SQS, SNS, ECS, RDS)", on: true },
      { label: "GCP (BigQuery, GCS)", on: false },
      { label: "Docker", on: false },
      { label: "Kubernetes", on: false },
      { label: "GitLab CI/CD", on: false },
      { label: "BullMQ", on: false },
    ],
  },
  {
    label: "Observability",
    title: "Observability",
    body: (
      <>
        You {"can't"} fix what you {"can't"} see. I instrument systems with metrics, traces, and error
        tracking so that{" "}
        <strong className="text-foreground font-semibold">
          problems surface before users notice them
        </strong>
        , using OpenTelemetry to keep telemetry vendor-neutral.
      </>
    ),
    tags: [
      { label: "Sentry", on: true },
      { label: "Prometheus", on: false },
      { label: "Grafana", on: false },
      { label: "OpenTelemetry", on: false },
    ],
  },
  {
    label: "AI & Automation",
    title: "AI & Automation",
    body: (
      <>
        The most underrated engineering skill is recognising when a complex manual process is really
        just an unwritten program. {"I've"} wired LLMs into event-driven workflows and built
        prompt-driven pipelines that{" "}
        <strong className="text-foreground font-semibold">
          eliminated 25 hours of weekly manual work
        </strong>
        .
      </>
    ),
    tags: [
      { label: "Claude", on: true },
      { label: "OpenAI", on: true },
      { label: "Codex", on: false },
      { label: "Copilot", on: false },
      { label: "n8n", on: false },
      { label: "Make.com", on: false },
      { label: "LLMs", on: false },
      { label: "Generative AI", on: false },
      { label: "Prompt Engineering", on: false },
    ],
  },
  {
    label: "Architecture",
    title: "Architecture",
    body: (
      <>
        I match the architecture to the problem — a monolith when it keeps the team fast, and
        microservices or event-driven systems when scale and decoupling demand it.{" "}
        <strong className="text-foreground font-semibold">
          Architecture is a series of trade-offs, not a trend to follow.
        </strong>
      </>
    ),
    tags: [
      { label: "Microservices", on: true },
      { label: "Monorepo", on: false },
      { label: "Event-driven", on: false },
      { label: "Monolith", on: false },
      { label: "Serverless", on: false },
    ],
  },
  {
    label: "Testing",
    title: "Testing",
    body: (
      <>
        Tests are how I ship with confidence. I write unit, integration, and end-to-end tests with
        Jest, React Testing Library, and Cypress —{" "}
        <strong className="text-foreground font-semibold">
          covering behaviour, not just lines
        </strong>
        .
      </>
    ),
    tags: [
      { label: "Jest", on: true },
      { label: "RTL", on: true },
      { label: "Cypress", on: false },
      { label: "Unit Tests", on: false },
      { label: "Integration Tests", on: false },
      { label: "End-to-End Tests", on: false },
    ],
  },
  {
    label: "Operating Systems",
    title: "Operating Systems",
    body: (
      <>
        I develop and deploy comfortably across platforms — Linux for servers and CI, macOS and
        Windows on the desktop —{" "}
        <strong className="text-foreground font-semibold">
          at home in the terminal on any of them
        </strong>
        .
      </>
    ),
    tags: [
      { label: "Linux (Ubuntu)", on: true },
      { label: "MacOS", on: false },
      { label: "Windows", on: false },
    ],
  },
]

export function Skills() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(null)
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
                onClick={() => setMobileOpenIdx(mobileOpenIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 py-4 px-5 cursor-pointer transition-colors text-left hover:bg-paper2"
                aria-expanded={mobileOpenIdx === i}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                      mobileOpenIdx === i ? "bg-fire" : "bg-rule"
                    }`}
                  />
                  <span
                    className={`text-sm font-semibold transition-colors ${
                      mobileOpenIdx === i ? "text-foreground" : "text-ink3"
                    }`}
                  >
                    {cat.label}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-ink3 transition-transform duration-300 ${
                    mobileOpenIdx === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  mobileOpenIdx === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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
