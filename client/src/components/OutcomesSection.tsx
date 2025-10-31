import { Clock, Target, BarChart3, TrendingUp } from "lucide-react";

const outcomes = [
  {
    icon: Clock,
    stat: "60-80%",
    label: "Time Saved",
    description: "Reclaim hours every week"
  },
  {
    icon: Target,
    stat: "Fewer",
    label: "Manual Errors",
    description: "Automated precision"
  },
  {
    icon: BarChart3,
    stat: "Clear",
    label: "Dashboards",
    description: "Real-time insights"
  },
  {
    icon: TrendingUp,
    stat: "<30 Days",
    label: "Real ROI",
    description: "Fast value delivery"
  }
];

export default function OutcomesSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Outcomes & Proof
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results our clients experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome, index) => (
            <div 
              key={index}
              className="text-center p-6"
              data-testid={`outcome-${index}`}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--gradient-brand-start))] to-[hsl(var(--gradient-brand-end))] flex items-center justify-center mx-auto mb-4">
                <outcome.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold bg-gradient-to-r from-[hsl(var(--gradient-brand-start))] to-[hsl(var(--gradient-brand-end))] bg-clip-text text-transparent mb-2">
                {outcome.stat}
              </div>
              
              <div className="font-semibold text-lg mb-1">
                {outcome.label}
              </div>
              
              <p className="text-sm text-muted-foreground">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
