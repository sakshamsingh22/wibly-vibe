import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { FAQSection, FAQ as FAQData } from '@/pages/Home';

export default function FAQ() {
  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": FAQData.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="relative grain min-h-screen flex flex-col">
      <SEO 
        title="Frequently Asked Questions | WIBLY" 
        description="Got questions about our web design process? Find answers about our timelines, pricing, and maintenance services." 
        canonical="/faq" 
        schema={faqSchema}
      />
      <Navbar />
      <main className="flex-1 pt-12">
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
