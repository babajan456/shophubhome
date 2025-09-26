import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";
import faqHelpImage from "@/assets/images/faq-help.jpg";

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          <img
            src={faqHelpImage}
            alt="Help and support center"
            className="rounded-2xl shadow-lg mx-auto max-w-lg w-full h-auto mb-6"
          />
          <p className="text-muted-foreground">Find answers to common questions or get in touch with our support team</p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:text-primary">
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pl-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact Support Section */}
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our customer support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </Link>
              <Button variant="outline">
                <Phone className="mr-2 h-4 w-4" />
                Call: +1 (555) 123-4567
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;