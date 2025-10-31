import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter Automation",
    description: "1 workflow, 3 integrations",
    price: "€199-€399",
    features: [
      "Single automation workflow",
      "Up to 3 tool integrations",
      "Documentation & training",
      "Testing & validation",
      "30-day support"
    ],
    popular: false
  },
  {
    name: "Business Integration",
    description: "3–5 workflows, CRM/ERP sync",
    price: "€699-€1,199",
    features: [
      "3-5 automation workflows",
      "CRM/ERP synchronization",
      "Advanced data routing",
      "Custom API integrations",
      "90-day support",
      "Monthly optimization review"
    ],
    popular: true
  },
  {
    name: "Custom AI System",
    description: "Bespoke agent/pipeline",
    price: "from €1,500",
    features: [
      "Fully custom AI solution",
      "Unlimited integrations",
      "Advanced AI agents",
      "Real-time dashboards",
      "Dedicated support",
      "SLA & monitoring",
      "Ongoing improvements"
    ],
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Packages & Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All packages include consultation, documentation & testing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`p-8 flex flex-col ${
                tier.popular 
                  ? 'border-2 border-primary shadow-lg relative' 
                  : 'border-card-border'
              }`}
              data-testid={`card-pricing-${index}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[hsl(var(--gradient-brand-start))] to-[hsl(var(--gradient-brand-end))] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold mb-2">
                  {tier.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {tier.description}
                </p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold">
                  {tier.price}
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={tier.popular ? "w-full" : "w-full"}
                variant={tier.popular ? "default" : "outline"}
                data-testid={`button-get-started-${index}`}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
