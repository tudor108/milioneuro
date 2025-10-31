import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you work with our tools?",
    answer: "Yes — we integrate via APIs and webhooks with virtually any platform. Our expertise spans popular tools like Salesforce, HubSpot, Shopify, Notion, Slack, and hundreds more. If your tool has an API, we can connect it."
  },
  {
    question: "What languages do you support?",
    answer: "We provide full service in Romanian and English, ensuring clear communication throughout the entire project lifecycle from consultation to training."
  },
  {
    question: "How do you handle security?",
    answer: "We follow least-privilege access principles and use encrypted secrets management. All API keys and credentials are stored securely, and we never request more access than necessary for the automation to function."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer optional monthly SLA packages with proactive monitoring, regular performance reviews, and continuous improvements. All packages include initial training and handover documentation."
  },
  {
    question: "How long does implementation take?",
    answer: "Most starter automations are live within 1-2 weeks. Complex integrations typically take 3-4 weeks. We always provide a detailed timeline during the discovery phase."
  },
  {
    question: "Can you customize existing automations?",
    answer: "Absolutely! We can audit your current automations, identify improvement opportunities, and enhance them with AI capabilities or additional integrations."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-background" id="faq">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our services
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-card-border rounded-lg px-6 hover-elevate"
              data-testid={`accordion-faq-${index}`}
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
