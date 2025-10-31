import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@assets/generated_images/AI_automation_hero_background_1741f326.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="font-heading text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Automations for{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--gradient-brand-start))] to-[hsl(var(--gradient-brand-end))] bg-clip-text text-transparent">
              Real Businesses
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed">
            Unlock productivity, cut costs, and scale smarter with no-code/low-code + custom AI workflows.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover-elevate active-elevate-2 text-lg px-8"
              data-testid="button-book-consult"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg px-8"
              data-testid="button-see-examples"
              onClick={() => {
                document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="mr-2 h-5 w-5" />
              See Example Automations
            </Button>
          </div>
          
          <div className="flex items-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Trusted by businesses across Europe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
