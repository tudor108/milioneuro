import { useRef, useState } from "react";
import { TrendingUp, MessageCircle, Package, FileText, ArrowRight } from "lucide-react";

import n8nChatbotFlow from "@assets/generated_images/chatbotai12.png";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const solutions = [
  {
    id: "invoiceflow",
    icon: FileText,
    title: "InvoiceFlow (n8n-only)",
    description: "AP/AR intake → approvals → ledger exports → dunning",
    features: [
      "Email/Drive invoice intake & parsing",
      "Approval links generated per cost center",
      "Ledger-ready CSV & JSON exports",
      "Smart dunning cadences with pay-links"
    ],
    detail: {
      promise: "AP/AR automation built 100% on n8n.",
      narrative:
        "Designed for finance teams handling 300–20,000 invoices per month who want rules, approvals, and audit trails without adding another SaaS bill. Every step runs on native n8n nodes so your finance data stays in your stack.",
      differentiators: [
        "End-to-end on IMAP, Webhook, Code, Data Store, and Spreadsheet File nodes—no external SaaS required.",
        "Built-in duplicate, vendor, and tax checks keep auditors happy without extra headcount.",
        "Signed hashes + masked fields create an immutable trail right inside n8n.",
        "Powered by our catalog of 1,050+ reusable AI and automation components."
      ],
      metrics: [
        { label: "Manual entry", value: "-80%" },
        { label: "DSO (days sales outstanding)", value: "-22%" },
        { label: "Posting accuracy", value: "99.5%" }
      ],
      actions: [
        "Email & Drive intake captures PDFs, XML, CSV, and text invoices instantly.",
        "Rule checks validate vendor IDs, taxes, and duplicates before anyone approves.",
        "Approvers receive secure email links; n8n Webhooks log every decision.",
        "Ledger exports arrive as normalized CSV/JSON ready for any ERP import queue.",
        "Dunning engine runs retries, SMS/email cadences, and branded pay links automatically.",
        "Data Stores retain hashed audit logs for rollback and replay."
      ],
      deliverables: [
        "2 production workflows: Process Invoice + Dunning Engine",
        "4 Data Stores: Invoices, Vendors, Rules, Audit",
        "Ledger export spec with import instructions for your ERP",
        "Runbook with rollback / replay workflow"
      ],
      addOns: [
        "OCR for scanned PDFs (Tesseract or cloud)",
        "Direct ERP APIs (Xero, QuickBooks, SAP)",
        "Slack or Teams approval buttons"
      ]
    }
  },
  {
    id: "attribguard",
    icon: TrendingUp,
    title: "UTM Guard (n8n-only)",
    description: "UTM cleanup → session stitching → cost merge → publish",
    features: [
      "Real-time UTM normalization",
      "Session → person stitching rules",
      "Cost CSV ingestion ",
      "Source-of-truth exports for analytics"
    ],
    detail: {
      promise: "Clean attribution and cost alignment entirely in n8n.",
      narrative:
        "Marketing teams ditch spreadsheet gymnastics and get consistent channel data without touching ad APIs. Every rule, stitch, and export lives in n8n so your analysts can trust the numbers again.",
      differentiators: [
        "Native n8n stack: Webhooks, Code, Data Stores, Spreadsheet File—no BI SaaS required.",
        "Editable UTM dictionary lets growth teams enforce naming without developer tickets.",
        "Anomaly alerts fire from Cron + Code nodes the moment a channel spikes or stalls.",
        "Backed by 1,050+ ready-made automations so you can extend into CRM or BI fast."
      ],
      metrics: [
        { label: "‘(not set)’ UTMs", value: "0" },
        { label: "Dirty campaign names", value: "-90%" },
        { label: "Manual reporting time", value: "-10 hrs/week" }
      ],
      actions: [
        "Normalizes casing, mediums, and rogue tags the instant traffic hits your Webhook.",
        "Session → person stitching merges events with deterministic rules you control.",
        "Cost CSVs dropped via email/drive land in Data Stores and merge nightly.",
        "Exports a channel & campaign master CSV to any analytics or BI tool.",
        "Weekly anomaly alerts flag spikes, drops, or mis-tags before reports go out."
      ],
      deliverables: [
        "Real-time UTM cleaner workflow",
        "Nightly cost merger workflow",
        "Publisher workflow for analytics handoff",
        "Editable UTM dictionary + stitching rules + alert pack"
      ],
      addOns: [
        "Direct ad API imports (Google, Meta, LinkedIn)",
        "Push cleaned data to GA4 or your CRM",
        "Optional BigQuery/Snowflake loaders"
      ]
    }
  },
  {
    id: "onboardpro",
    icon: MessageCircle,
    title: "OnboardPro (n8n-only)",
    description: "Kickoff → tasks → training → health scoring",
    features: [
      "Payment/signup detection to kickoff",
      "Account playbooks stored in Data Stores",
      "Email drip + milestone tracking",
      "Usage-based health scoring"
    ],
    detail: {
      promise: "Predictable onboarding timelines powered purely by n8n.",
      narrative:
        "B2B teams eliminate spreadsheet checklists and tool sprawl. Kickoffs, tasks, nudges, and health scoring run inside n8n so every new customer hits first value faster.",
      differentiators: [
        "Account, task, and milestone Data Stores keep every onboarding in sync.",
        "Email Send + Webhook nodes track training engagement without LMS fees.",
        "Health score logic lives in Code nodes—transparent and tweakable by CSMs.",
        "Extend quickly with our 1,050+ library of automations when you need CRM syncs."
      ],
      metrics: [
        { label: "Time-to-first-value", value: "-45%" },
        { label: "Activation uplift", value: "+20–30%" },
        { label: "Onboarding CSAT", value: "4.9 / 5" }
      ],
      actions: [
        "IMAP/Webhook triggers spot new deals or payments and spin up onboarding instantly.",
        "Data Stores generate account-specific checklists with owners, due dates, and dependencies.",
        "Email Send nodes drip training, while link click Webhooks mark milestones as complete.",
        "Code node scores health using usage events, reply tone, and timeline adherence.",
        "HTML → PDF summaries fire to CSMs so handoffs happen with zero copy/paste."
      ],
      deliverables: [
        "3 live workflows: Kickoff, Drip & Milestones, Summary & Handoff",
        "4 Data Stores: Accounts, Tasks, Milestones, Health Scores",
        "Email + ICS templates for training and cadence",
        "Health score formula with tuning guide"
      ],
      addOns: [
        "Sync tasks to Jira/Asana/CS tools",
        "Slack or Teams notifications",
        "Product analytics enrichment"
      ]
    }
  },
  {
    id: "churnshield",
    icon: Package,
    title: "ChurnShield (n8n-only)",
    description: "Usage & billing events → scoring → dunning → win-back",
    features: [
      "Multi-signal churn scoring",
      "Compliant payment retries",
      "Automated save/win-back plays",
      "Weekly revenue risk packs"
    ],
    detail: {
      promise: "Retention, dunning, and win-back—shipped entirely with n8n.",
      narrative:
        "Subscription teams keep revenue without buying another billing or CRM add-on. ChurnShield ingests events, scores risk, and runs compliant outreach using only native n8n blocks.",
      differentiators: [
        "Risk engine uses Data Stores + Code nodes for a transparent scoring model.",
        "Dunning orchestrator handles retries, pauses, and compliant cadences without extra tooling.",
        "Weekly revenue pack ships from Spreadsheet File + Email Send nodes in minutes.",
        "Extend to Stripe, Chargebee, CRM, or WhatsApp fast with our 1,050+ automation modules."
      ],
      metrics: [
        { label: "Involuntary churn", value: "-30–40%" },
        { label: "Payment recovery", value: "+35–45%" },
        { label: "NRR impact", value: "+6 pts" }
      ],
      actions: [
        "Webhooks + CSV drops capture product, billing, and support signals in near real time.",
        "Code node scores risk across usage decay, sentiment, and payment status.",
        "Automated dunning sequences send compliant emails/SMS with smart timing.",
        "Win-back flows trigger tailored offers and tasks for owners when risk spikes.",
        "Weekly revenue risk pack lands in your inbox as CSV + HTML recap."
      ],
      deliverables: [
        "3 workflows: Scoring Engine, Dunning Orchestrator, Weekly Report",
        "4 Data Stores: Accounts, Events, Scores, Outreach",
        "Copy pack for email/SMS + schedule templates",
        "Replay tooling for experiments and QA"
      ],
      addOns: [
        "Stripe/Chargebee/Recurly webhooks",
        "CRM enrichment and task sync",
        "WhatsApp/Twilio adapters"
      ]
    }
  }
];

export default function SolutionsSection() {
  const [activeSolution, setActiveSolution] = useState<string>(solutions[0].id);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (value: string) => {
    setActiveSolution(value);

    // Pull the detailed view into focus so prospects land on the pitch immediately.
    requestAnimationFrame(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section className="py-24 bg-card" id="solutions">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Featured Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by 1,050+ ready-to-deploy AI and n8n automations so you launch in days, not quarters.
          </p>
        </div>

        <Tabs value={activeSolution} onValueChange={handleSelect} className="space-y-12">
          <TabsList className="sr-only">
            {solutions.map((solution) => (
              <TabsTrigger key={solution.id} value={solution.id}>
                {solution.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={solution.id}
                className={cn(
                  "p-8 transition-all duration-300 border border-card-border/60 bg-card/80",
                  activeSolution === solution.id
                    ? "border-primary/60 bg-primary/10 shadow-lg shadow-primary/10"
                    : "hover:shadow-lg hover:border-primary/30"
                )}
                data-testid={`card-solution-${index}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[hsl(var(--gradient-brand-start))] to-[hsl(var(--gradient-brand-end))] flex items-center justify-center flex-shrink-0">
                    <solution.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-semibold mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  type="button"
                  variant="ghost"
                  className="w-full justify-between group"
                  data-testid={`button-learn-more-${index}`}
                  onClick={() => handleSelect(solution.id)}
                  aria-pressed={activeSolution === solution.id}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Card>
            ))}
          </div>

          {solutions.map((solution) => (
            <TabsContent
              key={solution.id}
              value={solution.id}
              ref={solution.id === activeSolution ? detailsRef : undefined}
              className="focus-visible:outline-none"
            >
              <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-background/80 via-background/70 to-background/60 p-10 shadow-2xl shadow-black/20">
                <div className="grid gap-12 lg:grid-cols-[1.6fr,1fr]">
                  <div className="space-y-10">
                    <div className="space-y-4">
                      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                        {solution.detail.promise}
                      </span>
                      <h3 className="font-heading text-3xl md:text-4xl font-bold">
                        {solution.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {solution.detail.narrative}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Why teams choose our n8n builds
                      </h4>
                      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                        {solution.detail.differentiators.map((point, idx) => (
                          <li
                            key={idx}
                            className="rounded-xl border border-border/40 bg-card/70 p-4 text-sm leading-6"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        What it does
                      </h4>
                      <ul className="mt-5 space-y-3 text-sm leading-6">
                        {solution.detail.actions.map((item, idx) => (
                          <li key={idx} className="rounded-xl border border-border/40 bg-background/60 p-4">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Deliverables
                      </h4>
                      <ul className="mt-5 grid gap-3 text-sm leading-6">
                        {solution.detail.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="rounded-xl border border-border/40 bg-card/70 p-4"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {solution.detail.addOns?.length ? (
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Optional add-ons
                        </h4>
                        <ul className="mt-5 grid gap-3 text-sm leading-6">
                          {solution.detail.addOns.map((item, idx) => (
                            <li
                              key={idx}
                              className="rounded-xl border border-border/40 bg-background/60 p-4"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <aside className="space-y-6">
                    <div className="grid gap-4">
                      {solution.detail.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl border border-border/40 bg-card/80 p-5 text-center"
                        >
                          <p className="text-3xl font-heading font-semibold text-primary">
                            {metric.value}
                          </p>
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>


                    <Button 
                      className="w-full h-12 text-base font-semibold"
                      onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Book a discovery call
                    </Button>

                    <div className="rounded-2xl border border-border/40 bg-card/80 p-4">
                      <img
                        src={n8nChatbotFlow}
                        alt="n8n chatbot automation flow"
                        className="w-full rounded-xl border border-primary/20 bg-background/80 shadow-lg shadow-primary/10"
                      />
                      <p className="mt-3 text-xs text-muted-foreground leading-relaxed text-center">
                        Example n8n chatbot flow: intent detection → knowledge lookup → human handoff. Delivered as part of every build documentation pack.
                      </p>
                    </div>
                  </aside>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
