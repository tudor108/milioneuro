import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Clock, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    tooling: "",
    requirements: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-card" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Ready to Automate?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tell us your process and we'll map it to a working solution in days, not months.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8 border-card-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  data-testid="input-name"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-testid="input-email"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="company">Company</Label>
                <Input 
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  data-testid="input-company"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="tooling">What tools do you use?</Label>
                <Input 
                  id="tooling"
                  name="tooling"
                  placeholder="e.g., Salesforce, Slack, Shopify..."
                  value={formData.tooling}
                  onChange={handleChange}
                  data-testid="input-tooling"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="requirements">What should the automation do? *</Label>
                <Textarea 
                  id="requirements"
                  name="requirements"
                  rows={5}
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  data-testid="textarea-requirements"
                  className="mt-2"
                  placeholder="Describe your automation needs in detail..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                size="lg"
                data-testid="button-submit-contact"
              >
                Send Request
              </Button>
            </form>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We typically respond within 24 hours. Book a free 15-minute consultation to discuss your automation needs.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-muted-foreground">contact@autoai.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Response Time</div>
                  <div className="text-muted-foreground">Within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Languages</div>
                  <div className="text-muted-foreground">Romanian & English</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
