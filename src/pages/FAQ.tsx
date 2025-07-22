import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Please see our Returns page for full details."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-7 business days. Express shipping options are available for faster delivery."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to many international destinations. Shipping costs and delivery times vary by location."
    },
    {
      question: "How can I contact customer service?",
      answer: "You can reach our customer service team via email at support@shophub.com, phone at +1 (555) 123-4567, or through our contact form."
    },
    {
      question: "Are my payment details secure?",
      answer: "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your credit card details on our servers."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;