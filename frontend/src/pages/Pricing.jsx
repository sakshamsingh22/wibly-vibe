import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { PricingSection } from '@/pages/Home';

export default function Pricing() {
  return (
    <div className="relative grain min-h-screen flex flex-col">
      <SEO 
        title="Pricing & Investment | WIBLY" 
        description="Simple, transparent pricing. No hidden fees. Honest prices for serious craft. Custom websites starting at $69." 
        canonical="/pricing" 
      />
      <Navbar />
      <main className="flex-1 pt-12">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
