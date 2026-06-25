import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { WorkSection } from '@/pages/Home';

export default function Portfolio() {
  return (
    <div className="relative grain min-h-screen flex flex-col">
      <SEO 
        title="Portfolio & Selected Work | WIBLY" 
        description="A curated look at design directions we've explored for small businesses across industries. Conversion-focused, premium web experiences." 
        canonical="/portfolio" 
      />
      <Navbar />
      <main className="flex-1 pt-12">
        <WorkSection />
      </main>
      <Footer />
    </div>
  );
}
