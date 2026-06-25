import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { ServicesSection } from '@/pages/Home';

export default function Services() {
  const serviceSchema = {
    "@type": "Service",
    "name": "Web Design & Development",
    "provider": {
      "@id": "https://www.wibly.in/#organization"
    },
    "description": "Premium web design and engineering for small businesses. We build Landing Pages, Business Sites, and E-Commerce platforms."
  };

  return (
    <div className="relative grain min-h-screen flex flex-col">
      <SEO 
        title="Our Services | WIBLY Web Design Studio" 
        description="Premium web design and engineering for small businesses. Custom Landing Pages, Business Sites, and E-Commerce platforms built to convert." 
        canonical="/services" 
        schema={serviceSchema} 
      />
      <Navbar />
      <main className="flex-1 pt-12">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
