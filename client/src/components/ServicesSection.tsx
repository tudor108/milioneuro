import { Card } from "@/components/ui/card";
import { Bot, Users, ShoppingCart, Share2, Database, Workflow } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Assistants",
    description: "Intelligent conversational agents that handle customer queries and internal support 24/7."
  },
  {
    icon: Users,
    title: "Lead Capture & CRM Routing",
    description: "Automatically capture, enrich, and route leads to the right team members instantly."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Operations",
    description: "Streamline inventory, orders, and fulfillment with seamless automation workflows."
  },
  {
    icon: Share2,
    title: "Content & Social Automation",
    description: "Schedule, repurpose, and distribute content across all your channels automatically."
  },
  {
    icon: Database,
    title: "Data Integration & ETL",
    description: "Connect disparate systems and transform data pipelines without coding."
  },
  {
    icon: Workflow,
    title: "Internal Process Automation",
    description: "Eliminate repetitive tasks and connect your business tools end-to-end."
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We design, build, and maintain AI-powered automations that remove repetitive work and connect your tools end-to-end.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate transition-all duration-300 border-card-border"
              data-testid={`card-service-${index}`}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[hsl(var(--gradient-brand-start))] to-[hsl(var(--gradient-brand-end))] flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
