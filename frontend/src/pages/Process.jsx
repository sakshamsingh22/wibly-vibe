import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { ProcessSection } from '@/pages/Home';

export default function Process() {
  return (
    <div className="relative grain min-h-screen flex flex-col">
      <SEO 
        title="Our Process | WIBLY Web Design Studio" 
        description="A transparent four-step process designed to get you online fast. Discover, Design, Refine, and Launch your premium website in days." 
        canonical="/process" 
      />
      <Navbar />
      <main className="flex-1 pt-12">
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}
