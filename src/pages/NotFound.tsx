
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container-custom text-center">
          <h1 className="text-6xl font-bold text-sage mb-4">404</h1>
          <h2 className="text-3xl font-bold text-charcoal mb-6">Pagina niet gevonden</h2>
          <p className="text-lg text-brown mb-8 max-w-lg mx-auto">
            De pagina die u zoekt bestaat niet of is verplaatst.
          </p>
          <Button asChild className="bg-sage hover:bg-sage/90">
            <Link to="/">Terug naar de homepagina</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
