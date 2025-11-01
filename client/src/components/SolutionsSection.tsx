import { useRef, useState } from "react";
import { TrendingUp, MessageCircle, Package, FileText, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const solutions = [
  {
    id: "invoiceflow",
    icon: FileText,
    title: "InvoiceFlow AI",
    description: "AP/AR capture → validate → post → collect",
    features: [
      "OCR & line-item parsing from email/PDF",
      "Policy checks & multi-step approvals",
      "Auto-posting to ERP/accounting",
      "Smart dunning with pay-links & reconciliation"
    ],
    detail: {
      promise: "Close the books faster and collect cash on time—automatically.",
      narrative:
        "InvoiceFlow AI reads inbound invoices & POs, flags exceptions, posts clean entries to Xero/QuickBooks/SAP, and handles reminders with branded payment links. Built on n8n with email/drive webhooks, OCR, ERP/Stripe APIs, and Slack approvals.",
      differentiators: [
        "High-accuracy parsing with duplicate & fraud checks before posting.",
        "Role-based approval flows in Slack/Teams with full audit trail.",
        "Bi-directional sync for vendors, GL codes, taxes, and attachments.",
        "Automated dunning: retries, smart cadences, and one-click pay links."
      ],
      metrics: [
        { label: "Manual entry", value: "-80%" },
        { label: "DSO (days sales outstanding)", value: "-22%" },
        { label: "Posting accuracy", value: "99.5%" }
      ],
      playbook: [
        {
          title: "Capture & extract",
          description:
            "Ingest emails and PDFs, OCR line items, validate vendor/tax rules, and check for duplicates in seconds."
        },
        {
          title: "Approve & post",
          description:
            "Route by amount/cost center, collect approvals in Slack/Teams, then auto-post to ERP with attachments."
        },
        {
          title: "Collect & reconcile",
          description:
            "Send branded pay links, chase late payments with smart cadences, and reconcile ledger entries automatically."
        }
      ],
      testimonial: {
        quote:
          "Month-end went from chaos to calm. Data entry vanished and cash hits the account sooner.",
        author: "Lena Park",
        role: "Finance Lead, OrbitCloud"
      }
    }
  },
  {
    id: "attribguard",
    icon: TrendingUp,
    title: "Attribution Guard",
    description: "UTM cleanup • identity stitch • ad cost • GA4/CRM",
    features: [
      "UTM standardization & de-dupe",
      "Session → person identity stitching",
      "Ad cost import (Google/Meta/LinkedIn)",
      "Sync to GA4/BigQuery & HubSpot/Salesforce"
    ],
    detail: {
      promise: "Finally trust your funnel numbers and budget with confidence.",
      narrative:
        "Attribution Guard normalizes every click, stitches sessions to people and accounts, imports ad spend, and pushes a single source of truth into analytics and your CRM. Built on n8n with webhooks, GA4/BigQuery, ad APIs, and CRM nodes.",
      differentiators: [
        "Real-time UTM normalizer fixes casing, bad mediums, and rogue tags automatically.",
        "Deterministic + probabilistic identity stitching connects web events to CRM records.",
        "Hands-free cost ingestion from Google/Meta/LinkedIn with currency harmonization.",
        "Anomaly alerts in Slack when channels spike, stall, or mis-tag."
      ],
      metrics: [
        { label: "CAC accuracy", value: "+18%" },
        { label: "Dirty data reduced", value: "-92%" },
        { label: "Reporting time saved", value: "10 hrs / week" }
      ],
      playbook: [
        {
          title: "Ingest & normalize",
          description:
            "Capture webhooks and ad data, clean UTMs, standardize sources/mediums, and drop duplicates."
        },
        {
          title: "Stitch & enrich",
          description:
            "Link sessions to people/accounts via email/domain and enrich with firmographics."
        },
        {
          title: "Sync & visualize",
          description:
            "Push to GA4/BigQuery/Snowflake and mirror fields to HubSpot/Salesforce for revenue-grade dashboards."
        }
      ],
      testimonial: {
        quote:
          "The first dashboard we’ve believed. Budget shifts are data-backed, not gut-feel.",
        author: "Marco Nguyen",
        role: "VP Growth, Taloslytics"
      }
    }
  },
  {
    id: "onboardpro",
    icon: MessageCircle,
    title: "OnboardPro",
    description: "Welcome → provision → train → activate",
    features: [
      "Auto-provisioning across SaaS & roles",
      "Task orchestration in Jira/Asana",
      "Training drip via email/in-app",
      "Health scoring from product usage"
    ],
    detail: {
      promise: "Cut time-to-value from weeks to days and make go-lives predictable.",
      narrative:
        "OnboardPro triggers on signup or payment, provisions accounts, assigns internal tasks, schedules training, and monitors early product usage. When risk signals appear, it alerts CSMs with next-best actions—built entirely in n8n.",
      differentiators: [
        "Role-based playbooks for SMB/Enterprise with automatic stakeholder mapping.",
        "360° onboarding timeline syncing tickets, emails, docs, and calendar events.",
        "Health score blending usage, support sentiment, and billing status.",
        "Two-way sync with HubSpot/Salesforce for clean lifecycle stages."
      ],
      metrics: [
        { label: "Time-to-value", value: "-45%" },
        { label: "Activation rate", value: "+34%" },
        { label: "Onboarding CSAT", value: "4.9 / 5" }
      ],
      playbook: [
        {
          title: "Kickoff on autopilot",
          description:
            "Create the Slack channel, schedule kickoff, share checklists, and provision environments instantly."
        },
        {
          title: "Guide to first value",
          description:
            "Drip lessons & tasks, verify milestones, and nudge stakeholders when work stalls."
        },
        {
          title: "Verify & handoff",
          description:
            "Confirm success criteria, generate a success summary, and hand off to CSM with cadence set."
        }
      ],
      testimonial: {
        quote:
          "Customers hit first value in days. Churn risk during onboarding dropped noticeably.",
        author: "Amrita Shah",
        role: "Head of Customer Success, FluxGrid"
      }
    }
  },
  {
    id: "churnshield",
    icon: Package,
    title: "ChurnShield",
    description: "Detect risk • recover payments • winback",
    features: [
      "Failed payment retries & dunning",
      "Usage drop & sentiment alerts",
      "Renewal forecasting",
      "Automated winback offers"
    ],
    detail: {
      promise: "Reduce involuntary and voluntary churn without adding headcount.",
      narrative:
        "ChurnShield watches product usage, ticket sentiment, NPS, and billing events. It retries failed payments, runs compliant dunning, alerts owners, and personalizes winback sequences via email/SMS/WhatsApp—glued together in n8n.",
      differentiators: [
        "Smart retrier for Stripe/Chargebee/Recurly with card-update portals.",
        "Risk scoring that blends usage decay, support tone, and contract status.",
        "Playbooks that open tasks, launch sequences, and spin up save-a-customer rooms.",
        "Executive roll-ups for expansion vs. risk by segment and cohort."
      ],
      metrics: [
        { label: "Involuntary churn", value: "-37%" },
        { label: "Payment recovery rate", value: "41%" },
        { label: "Net revenue retention", value: "+6 pts" }
      ],
      playbook: [
        {
          title: "Monitor & score",
          description:
            "Stream events from product, billing, and support; flag risky accounts with real-time scores."
        },
        {
          title: "Automate outreach",
          description:
            "Run compliant dunning, send empathetic nudges, and launch tailored save offers automatically."
        },
        {
          title: "Review & improve",
          description:
            "Weekly packs surface root causes and playbooks that saved revenue so your team doubles down."
        }
      ],
      testimonial: {
        quote:
          "We quietly recovered failing payments and caught risk early—NRR finally moved the right way.",
        author: "Jonah Ruiz",
        role: "CRO, HelixAI"
      }
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
            Pre-built automation blueprints ready to customize for your business
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
                        Why teams choose it
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
                        Deployment playbook
                      </h4>
                      <div className="mt-5 grid gap-4">
                        {solution.detail.playbook.map((step, idx) => (
                          <div
                            key={step.title}
                            className="rounded-xl border border-border/40 bg-background/60 p-5"
                          >
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                              Step {idx + 1}
                            </p>
                            <p className="mt-2 font-semibold text-base">{step.title}</p>
                            <p className="mt-1 text-sm text-muted-foreground leading-6">
                              {step.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
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

                    <div className="rounded-2xl border border-primary/30 bg-primary/10 p-6">
                      <p className="text-sm italic text-primary">
                        “{solution.detail.testimonial.quote}”
                      </p>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                        {solution.detail.testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {solution.detail.testimonial.role}
                      </p>
                    </div>

                    <Button className="w-full h-12 text-base font-semibold">
                      Book a discovery call
                    </Button>
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
