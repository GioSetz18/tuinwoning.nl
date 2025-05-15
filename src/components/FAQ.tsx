
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Heb ik een vergunning nodig?",
    answer: "Voor mantelzorgwoningen gelden versoepelde regels. In veel gevallen is een vergunning niet nodig of kan deze eenvoudig worden verkregen. Wij adviseren u graag over de specifieke situatie in uw gemeente."
  },
  {
    question: "Hoeveel kost een Tuinwoning?",
    answer: "De kosten van een Tuinwoning zijn afhankelijk van het model, de afmetingen en de specifieke wensen. Prijzen beginnen vanaf €75.000. Neem contact met ons op voor een persoonlijke offerte."
  },
  {
    question: "Wat is de levertijd?",
    answer: "Vanaf het moment van definitieve opdracht tot oplevering duurt het proces ongeveer 3 maanden. De plaatsing zelf gebeurt in één dag."
  },
  {
    question: "Is het mogelijk op huurgrond?",
    answer: "Ja, in veel gevallen is het mogelijk om een Tuinwoning te plaatsen op huurgrond. Hiervoor is wel toestemming nodig van de verhuurder of woningcorporatie. Wij kunnen u adviseren over de mogelijkheden."
  }
];

const FAQ = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-lg text-brown max-w-2xl mx-auto">
            Antwoorden op de meest voorkomende vragen over onze tuinwoningen.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-charcoal hover:text-sage">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-brown">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
