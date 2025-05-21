
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Privacy = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <SEO 
        title="Privacy Policy - Tuinwoning.nl" 
        description="Lees over hoe wij omgaan met uw gegevens bij Tuinwoning.nl. Onze privacy policy verklaart welke informatie we verzamelen en hoe we deze gebruiken."
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-36 md:pb-20 bg-beige">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-brown">
              Hoe wij omgaan met uw gegevens
            </p>
          </div>
        </div>
      </section>
      
      {/* Privacy Policy Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg prose-headings:text-charcoal prose-headings:font-bold prose-p:text-brown max-w-none">
            <h2>Privacybeleid Tuinwoning.nl</h2>
            <p>Laatst bijgewerkt: 21 mei 2023</p>
            
            <h3>1. Inleiding</h3>
            <p>
              Tuinwoning.nl respecteert de privacy van alle gebruikers van haar website en draagt er zorg voor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld. Dit privacybeleid is van toepassing op alle diensten van Tuinwoning.nl.
            </p>
            
            <h3>2. Welke gegevens verzamelen wij?</h3>
            <p>Wanneer u een brochure aanvraagt of contact met ons opneemt, verzamelen wij de volgende gegevens:</p>
            <ul>
              <li>Voor- en achternaam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer</li>
              <li>Postcode en huisnummer</li>
              <li>Overige gegevens die u actief verstrekt, bijvoorbeeld in correspondentie of telefonisch</li>
            </ul>
            
            <h3>3. Voor welke doeleinden gebruiken wij uw gegevens?</h3>
            <p>Wij gebruiken uw gegevens voor de volgende doeleinden:</p>
            <ul>
              <li>Het toesturen van de aangevraagde brochure</li>
              <li>Contact met u opnemen naar aanleiding van uw aanvraag of vraag</li>
              <li>U informeren over onze diensten en producten</li>
              <li>Het verbeteren van onze website en dienstverlening</li>
            </ul>
            
            <h3>4. Bewaartermijn</h3>
            <p>
              Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Wij hanteren de volgende bewaartermijnen:
            </p>
            <ul>
              <li>Contactgegevens: 2 jaar na het laatste contactmoment</li>
              <li>Gegevens voor marketingdoeleinden: tot het moment van afmelding voor onze nieuwsbrief</li>
            </ul>
            
            <h3>5. Delen met derden</h3>
            <p>
              Tuinwoning.nl verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting.
            </p>
            
            <h3>6. Cookies</h3>
            <p>
              Onze website maakt gebruik van cookies om de gebruikerservaring te verbeteren. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen in de browser van uw computer, tablet of smartphone.
            </p>
            
            <h3>7. Inzage, correctie en verwijdering</h3>
            <p>
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door Tuinwoning.nl.
            </p>
            
            <h3>8. Beveiliging</h3>
            <p>
              Tuinwoning.nl neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan.
            </p>
            
            <h3>9. Wijzigingen in dit privacybeleid</h3>
            <p>
              Wij behouden ons het recht voor om wijzigingen aan te brengen in dit privacybeleid. Wijzigingen zullen op deze website worden gepubliceerd.
            </p>
            
            <h3>10. Contact</h3>
            <p>
              Voor vragen over ons privacybeleid of over uw persoonsgegevens kunt u contact opnemen via:
            </p>
            <p>
              E-mail: privacy@tuinwoning.nl<br />
              Telefoon: +31 (0) 123 456 789<br />
              Adres: Voorbeeldstraat 123, 1234 AB Amsterdam
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Privacy;
