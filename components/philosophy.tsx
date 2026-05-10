"use client"

import { useState } from "react"
import { useFadeIn } from "@/hooks/use-fade-in"
import { ChevronDown } from "lucide-react"

const philosophies = [
  {
    num: "// 01",
    cardTitle: "I Started With the Frontend — and Quickly Realized It Wasn't Enough",
    title: "I Started With the Frontend — and Quickly Realized It Wasn't Enough",
    body: [
      "My first serious work was in the browser. React, Next.js, TypeScript — building interfaces that had to feel right, load fast, and not break when users did unexpected things.",
      "I learned how to choose between server-side rendering and static generation not from tutorials, but from shipping features that performed poorly until I made the right call.",
      "But the more I built on the frontend, the more I wanted to understand what was happening behind it. What was the API actually doing? Why was this query slow? That curiosity pulled me deeper.",
    ],
    code: `// Choose based on data freshness, not convention
const getStrategy = (page: PageConfig) => {
  if (page.dataChanges === 'realtime') return 'SSR'
  if (page.dataChanges === 'daily')    return 'ISR'
  return 'SSG' // default: build-time, fastest
}`,
  },
  {
    num: "// 02",
    cardTitle: "The Backend Taught Me That Reliability Is a Feature",
    title: "The Backend Taught Me That Reliability Is a Feature",
    body: [
      "I moved into Node.js and never looked back. Express when the problem was simple. NestJS when the codebase needed structure.",
      "Early in my backend work, I inherited automation systems built on assumptions that no longer held. I refactored them — not just to make them work, but to make them understandable.",
      "That's when I understood that reliability isn't about avoiding failure — it's about making failure visible and recoverable.",
    ],
    code: `// Early returns: fail loudly, fail fast
export const validateInvoice = (inv: Invoice): Result => {
  if (!inv.id)             return err('Invoice missing ID')
  if (inv.currency !== inv.booking.currency)
                           return err('Currency mismatch')
  if (inv.total <= 0)      return err('Invalid total')
  return ok(inv as ValidInvoice)
}`,
  },
  {
    num: "// 03",
    cardTitle: "GraphQL and Hasura Became My Native Language for Data",
    title: "GraphQL and Hasura Became My Native Language for Data",
    body: [
      "Most engineers treat GraphQL as a query format. I treat it as a contract. In production, I worked directly with Hasura — writing action handlers, configuring webhook triggers, managing permissions.",
      "I know the difference between a slow query and a missing index. I know how to design a mutation that fails clearly rather than silently corrupting state.",
      "Real-time data synchronization, event-driven pipelines, complex data processing — these were the systems the business ran on, and they had to work.",
    ],
    code: `export const notifyPaxChange = async (
  data: PaxChangePayload
) => {
  return hasuraFetch({
    mutation: \`mutation HandlePaxFlight($data: jsonb!) {
      handlePaxFlightSpecialRequest(data: $data) {
        error
        message
      }
    }\`,
    variables: { data }
  })
}`,
  },
  {
    num: "// 04",
    cardTitle: "I Build Systems That Remove Themselves From the Critical Path",
    title: "I Build Systems That Remove Themselves From the Critical Path",
    body: [
      "The most underrated engineering skill isn't writing complex code — it's recognising when a complex manual process is really just an unwritten program.",
      "I've engineered end-to-end data processing pipelines that reduced 25 hours of weekly manual operations to zero — by modelling the business logic precisely enough to automate it completely.",
      "The goal was never to replace people — it was to give them their attention back.",
    ],
    code: `// A process running on human attention
// is a system waiting to be built
const pipeline = new Pipeline()
  .step('fetch',    fetchInvoices)
  .step('validate', validateWithAI)
  .step('match',    matchToBookings)
  .step('route',    routeExceptions)
  .onError(notifyOpsTeam)
  .run() // replaces 25hrs/week`,
  },
  {
    num: "// 05",
    cardTitle: "PostgreSQL Taught Me to Respect the Data Layer",
    title: "PostgreSQL Taught Me to Respect the Data Layer",
    body: [
      "Databases are where optimism goes to die — and where good engineering earns its keep. I work with PostgreSQL daily: writing queries, designing schemas, managing remote connections.",
      "I've connected to databases over SSH tunnels, configured SSL, and managed credentials across environments without ever hardcoding a secret.",
      "I think about data models before I think about code. The shape of the data determines the complexity of everything above it.",
    ],
    code: `-- Design once, maintain forever
CREATE TABLE reservations (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  departure_id UUID      NOT NULL REFERENCES departures(id),
  currency    TEXT        NOT NULL CHECK(currency ~ '^[A-Z]{3}$'),
  total       NUMERIC(12,2) NOT NULL CHECK(total > 0),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);`,
  },
  {
    num: "// 06",
    cardTitle: "What I'm Actually Building Toward",
    title: "What I'm Actually Building Toward",
    body: [
      "I'm not chasing a stack. I'm building the instinct to look at a broken system — whether it's a slow query, a fragile workflow, or a manual process costing hours every week — and see the path through it clearly.",
      "Every project I've shipped has made something faster, cheaper, or more reliable for the people depending on it. That's the standard I hold myself to.",
      "That's what I'm here to keep doing.",
    ],
    code: `const principles = {
  code:    'Write it to be understood, not just to run',
  data:    'Model first, implement second',
  systems: 'If a human does it repeatedly, automate it',
  failure: 'Make it visible, make it recoverable',
  quality: 'Fast, cheap, reliable — pick all three',
} as const`,
  },
]

export function Philosophy() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(null)
  const detail = philosophies[activeIdx]
  const { ref, isVisible } = useFadeIn()

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="philosophy" className={`py-[clamp(4rem,9vw,8rem)] bg-ink text-paper section-reveal ${isVisible ? "is-visible" : ""}`}>
      <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,4.5rem)]">
        {/* Section header */}
        <div className="grid grid-cols-[auto_1fr] gap-8 items-end pb-12 border-b border-ink2 mb-[clamp(2.5rem,5vw,4rem)]">
          <div>
            <span className="font-mono text-[0.65rem] text-fire2 tracking-[0.15em]">03 / 03</span>
          </div>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-black leading-tight tracking-tight text-paper">
            Engineering <em className="font-normal italic text-fire2">Philosophy</em>
          </h2>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden flex flex-col border-t border-ink2">
          {philosophies.map((phil, i) => (
            <div key={phil.num} className="border-b border-ink2">
              <button
                onClick={() => setMobileOpenIdx(mobileOpenIdx === i ? null : i)}
                className={`w-full flex items-center justify-between gap-4 py-5 px-4 cursor-pointer transition-colors text-left ${
                  mobileOpenIdx === i ? "bg-[#111]" : "hover:bg-[#161616]"
                }`}
                aria-expanded={mobileOpenIdx === i}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span className="font-mono text-[0.55rem] text-fire2 tracking-[0.15em] opacity-60 shrink-0 pt-1">
                    {phil.num}
                  </span>
                  <span
                    className={`font-serif text-sm italic leading-snug transition-colors ${
                      mobileOpenIdx === i ? "text-paper" : "text-[#aaa]"
                    }`}
                  >
                    {phil.cardTitle}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-ink4 shrink-0 transition-transform duration-300 ${
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
                  <div className="px-4 pb-6 pt-1 bg-[#0D0D0D]">
                    <div className="text-sm text-[#888] leading-relaxed mb-5">
                      {phil.body.map((p, j) => (
                        <p key={j} className="mb-3 last:mb-0">
                          {p}
                        </p>
                      ))}
                    </div>
                    <div className="bg-[#0A0A0A] border border-[#222] border-l-2 border-l-fire p-4 overflow-x-auto">
                      <pre className="font-mono text-[0.65rem] leading-relaxed text-[#7a8a9a] whitespace-pre-wrap">
                        {phil.code}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Cards grid */}
        <div className="hidden md:grid grid-cols-2 gap-px bg-ink2">
          {philosophies.map((phil, i) => (
            <button
              key={phil.num}
              onClick={() => setActiveIdx(i)}
              className={`bg-ink p-10 transition-colors cursor-pointer text-left ${
                activeIdx === i
                  ? "bg-[#111] border-l-2 border-l-fire"
                  : "hover:bg-[#161616] border-l-2 border-l-transparent"
              }`}
            >
              <div className="font-mono text-[0.6rem] text-fire2 tracking-[0.15em] mb-4 opacity-60">
                {phil.num}
              </div>
              <div
                className={`font-serif text-lg italic leading-snug transition-colors ${
                  activeIdx === i ? "text-paper" : "text-[#ccc]"
                }`}
              >
                {phil.cardTitle}
              </div>
            </button>
          ))}
        </div>

        {/* Desktop Detail panel */}
        <div
          key={activeIdx}
          className="hidden md:block bg-[#0D0D0D] p-8 md:p-12 mt-px animate-fade-slide-in"
        >
          <h3 className="font-serif text-[clamp(1.4rem,3vw,2rem)] font-bold text-paper italic mb-6">
            {detail.title}
          </h3>
          <div className="text-base text-[#888] leading-relaxed max-w-[720px] md:columns-2 md:gap-12">
            {detail.body.map((p, i) => (
              <p key={i} className="mb-4 break-inside-avoid">
                {p}
              </p>
            ))}
          </div>
          <div className="bg-[#0A0A0A] border border-[#222] border-l-2 border-l-fire p-6 mt-8 overflow-x-auto">
            <pre className="font-mono text-[0.75rem] leading-relaxed text-[#7a8a9a] whitespace-pre-wrap">
              {detail.code}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
