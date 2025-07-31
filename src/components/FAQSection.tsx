import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What types of events can I find on Raas & Roots?",
    answer: "Raas & Roots specializes in traditional cultural events, primarily focusing on Garba, Raas, Navratri celebrations, and other Indian cultural festivals. You'll find events ranging from large community gatherings to intimate cultural performances."
  },
  {
    question: "How do I book passes through the app?",
    answer: "Simply browse events in your area, select the one you want to attend, choose your pass type, and complete the secure payment process. Your digital pass will be instantly available in the app for easy access at the venue."
  },
  {
    question: "Can I get refunds if I can't attend an event?",
    answer: "Refund policies vary by event organizer. Most events offer refunds up to 24-48 hours before the event date. You can check the specific refund policy for each event in the app before booking."
  },
  {
    question: "Is Raas & Roots available in my city?",
    answer: "We're rapidly expanding across major cities with vibrant cultural communities. Check the app to see events in your area, and if we haven't reached your city yet, stay tuned - we're constantly adding new locations!"
  }
];

const FAQSection = () => {
  return (
    <section id="faqs" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Raas & Roots
          </p>
        </div>
        
        <div className="animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:shadow-warm transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Contact CTA */}
        <div className="text-center mt-12 animate-fade-in-delay-1">
          <p className="text-muted-foreground mb-4">
            Have more questions? We're here to help!
          </p>
          <a
            href="mailto:info@raasnroots.com"
            className="text-primary hover:text-primary-glow transition-colors duration-200 font-medium"
          >
            Contact us at info@raasnroots.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;