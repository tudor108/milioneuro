import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, MessageCircle, Package, FileText, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: TrendingUp,
    title: "LeadGen AI",
    description: "Capture → enrich → qualify → CRM",
    features: [
      "Automatic lead enrichment",
      "Smart qualification scoring",
      "Instant CRM routing",
      "ROI tracking dashboard"
    ]
  },
  {
    icon: MessageCircle,
    title: "Support Copilot",
    description: "Ticket classification + draft replies",
    features: [
      "AI-powered ticket sorting",
      "Auto-generated responses",
      "Sentiment analysis",
      "Multi-language support"
    ]
  },
  {
    icon: Package,
    title: "ShopFlow Pro",
    description: "Order sync, stock updates, tracking",
    features: [
      "Real-time inventory sync",
      "Order status automation",
      "Customer notifications",
      "Analytics integration"
    ]
  },
  {
    icon: FileText,
    title: "Content Studio",
    description: "Repurpose + post automatically",
    features: [
      "Multi-platform posting",
      "Content repurposing",
      "Scheduling automation",
      "Performance tracking"
    ]
  }
];

export default function SolutionsSection() {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate transition-all duration-300 border-card-border"
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
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
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
                variant="ghost" 
                className="w-full justify-between group"
                data-testid={`button-learn-more-${index}`}
                onClick={() => console.log(`Learn more about ${solution.title}`)}
              >
                Learn More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
