'use client';

import { Navbar } from '@/components/navbar';
import { HeroSlider } from '@/components/hero-slider';
import { About } from '@/components/about';
import { Products } from '@/components/products';
import { Gallery } from '@/components/gallery';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id='main' className='min-h-dvh'>
        <HeroSlider />
        <About />
        <Products />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
