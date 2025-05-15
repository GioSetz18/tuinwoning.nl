
import React from 'react';
import { Home, Clock, Check, FileCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: <Home className="w-10 h-10 text-sage" />,
    title: "Altijd dichtbij familie",
    description: "Woon op slechts enkele meters van uw dierbaren, terwijl u beiden uw privacy behoudt."
  },
  {
    icon: <Clock className="w-10 h-10 text-sage" />,
    title: "Binnen 3 maanden gerealiseerd",
    description: "Van ontwerp tot sleutelklare oplevering in korte tijd."
  },
  {
    icon: <Check className="w-10 h-10 text-sage" />,
    title: "Geen verbouwing nodig",
    description: "Compleet en kant-en-klaar, zonder sloopwerk of ingrijpende aanpassingen."
  },
  {
    icon: <FileCheck className="w-10 h-10 text-sage" />,
    title: "Wettelijk toegestaan",
    description: "Past binnen de wettelijke regels voor mantelzorgwoningen in Nederland."
  }
];

const Benefits = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Waarom kiezen voor een Tuinwoning?
          </h2>
          <p className="text-lg text-brown max-w-3xl mx-auto">
            Onze tuinwoningen bieden een ideale oplossing voor mantelzorg en zelfstandig wonen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none rounded-xl overflow-hidden card-shadow bg-white">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-brown">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
