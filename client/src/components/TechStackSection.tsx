import { SiPython, SiOpenai, SiZapier, SiNotion, SiSlack, SiGooglesheets, SiSnowflake } from "react-icons/si";
import { Workflow } from "lucide-react";

const technologies = [
  { icon: Workflow, name: "n8n", color: "#EA4B71" },
  { icon: SiOpenai, name: "OpenAI", color: "#00A67E" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: Workflow, name: "Airflow", color: "#017CEE" },
  { icon: SiZapier, name: "Zapier", color: "#FF4A00" },
  { icon: SiSnowflake, name: "Snowflake", color: "#29B5E8" },
  { icon: SiGooglesheets, name: "Google Sheets", color: "#34A853" },
  { icon: SiSlack, name: "Slack", color: "#4A154B" },
  { icon: SiNotion, name: "Notion", color: "#000000" }
];

export default function TechStackSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Tech We Use
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful integrations with the tools you already use
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg hover-elevate transition-all duration-300 group"
              data-testid={`tech-${index}`}
            >
              <tech.icon className="h-12 w-12 mb-3 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
