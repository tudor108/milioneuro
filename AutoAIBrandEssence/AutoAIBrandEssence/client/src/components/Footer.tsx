import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--gradient-brand-start))] to-[hsl(var(--gradient-brand-end))] bg-clip-text text-transparent">
              AutoAI
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Real automations, real results. Unlock productivity with AI-powered workflows.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  AI Chatbots
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Lead Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  E-commerce Ops
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  Data Integration
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#process" className="hover:text-foreground transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="mailto:contact@autoai.com" 
                className="w-10 h-10 rounded-lg bg-muted hover-elevate flex items-center justify-center"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-muted hover-elevate flex items-center justify-center"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-muted hover-elevate flex items-center justify-center"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © {currentYear} AutoAI. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
