import { Card } from "@/components/ui/card";

const LAST_UPDATED = "November 2, 2025";

export default function LegalSection() {
  return (
    <section className="py-24 bg-muted/20" aria-labelledby="legal-heading">
      <div className="max-w-6xl mx-auto px-8 space-y-16">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Compliance Ready</p>
          <h2 id="legal-heading" className="font-heading text-4xl md:text-5xl font-bold">
            Privacy, security, and transparency you can rely on
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed">
            These policies cover our automation engagements, data handling practices, and
            service commitments. Every client receives a signed copy during onboarding.
          </p>
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Last updated {LAST_UPDATED}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <Card id="privacy" className="p-8 space-y-6 border-primary/30 bg-background">
            <div className="space-y-2">
              <h3 className="font-heading text-2xl font-semibold">Privacy Policy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We collect only the information necessary to deliver, maintain, and secure your
                automations. Data from your tooling stays in your infrastructure; our n8n builds
                reference it through encrypted credentials stored in your workspace or a dedicated
                vault provided by you.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">Data ingestion:</strong> project briefs, user lists, and API keys are stored in ISO27001-certified systems with role-based access and are deleted 30 days after project close unless you request retention.
              </li>
              <li>
                <strong className="text-foreground">Usage analytics:</strong> runtime metrics collected for troubleshooting remain inside your n8n instance. We only read aggregated statistics when you explicitly grant temporary access.
              </li>
              <li>
                <strong className="text-foreground">Subprocessors:</strong> when AI providers (e.g., OpenAI, Anthropic) or email gateways are required, they are listed in the statement of work together with their regions and safeguards.
              </li>
              <li>
                <strong className="text-foreground">Data subject rights:</strong> contact <a href="mailto:autoai831@gmail.com" className="text-primary underline underline-offset-2">autoai831@gmail.com</a> to request export or erasure. We respond within 72 hours.
              </li>
            </ul>
          </Card>

          <Card id="terms" className="p-8 space-y-6 border-primary/30 bg-background">
            <div className="space-y-2">
              <h3 className="font-heading text-2xl font-semibold">Terms of Use</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These terms govern how we scope, build, and support n8n automations for your team.
                Signing the statement of work indicates acceptance of the clauses below.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li>
                <strong className="text-foreground">Engagement scope:</strong> deliverables, success metrics, and acceptance criteria are documented in your playbook. Change requests are estimated within two business days.
              </li>
              <li>
                <strong className="text-foreground">Intellectual property:</strong> all workflows, scripts, and documentation transfer to you upon final payment. We retain the right to reuse generic components that contain no customer data.
              </li>
              <li>
                <strong className="text-foreground">Service levels:</strong> incident response within standard hours (09:00–18:00 CET) is included. Optional 24/7 coverage and monitoring SLAs are available as add-ons.
              </li>
              <li>
                <strong className="text-foreground">Confidentiality:</strong> mutual NDA applies. Team members access environments via named accounts with least-privilege policies and MFA.
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
