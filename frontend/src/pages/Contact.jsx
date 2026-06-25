import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { ContactSection } from '@/pages/Home';

export default function Contact() {
  return (
    <div className="relative grain min-h-screen flex flex-col">
      <SEO 
        title="Contact Us | WIBLY Web Design Studio" 
        description="Let's build something great together. Get in touch with WIBLY studio to discuss your next web project. We reply within 24 hours." 
        canonical="/contact" 
      />
      <Navbar />
      <main className="flex-1 pt-12">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
