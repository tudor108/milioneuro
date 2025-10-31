import { Search, PenTool, Code, CheckCircle, Rocket, HeartHandshake } from "lucide-react";

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "30–45 min call to map workflow and success metrics",
    metric: "Deep dive session"
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description: "Visual blueprint of triggers, actions, data flow",
    metric: "Clear roadmap"
  },
  {
    number: "03",
    icon: Code,
    title: "Build",
    description: "Implementation with n8n + APIs + Python",
    metric: "Custom solution"
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Validate",
    description: "Test and measure time saved",
    metric: "Proven results"
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description: "Handover & training",
    metric: "Ready to use"
  },
  {
    number: "06",
    icon: HeartHandshake,
    title: "Care",
    description: "Monitoring and SLA options",
    metric: "Ongoing support"
  }
];

export default function TimelineSection() {
  return (
    <section className="py-24 bg-card" id="process">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven process from discovery to deployment and beyond
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className="relative"
              data-testid={`timeline-phase-${index}`}
            >
              <div className="flex flex-col items-center text-center p-6">
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {phase.number}
                </div>
                
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-brand-start))] to-[hsl(var(--gradient-brand-end))] flex items-center justify-center mb-4 shadow-lg">
                  <phase.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-heading text-2xl font-semibold mb-3">
                  {phase.title}
                </h3>
                
                <p className="text-muted-foreground mb-2 leading-relaxed">
                  {phase.description}
                </p>
                
                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mt-2">
                  {phase.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
