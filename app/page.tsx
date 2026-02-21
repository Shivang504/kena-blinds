export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { Navbar } from '@/components/navbar';
import { HeroSlider } from '@/components/hero-slider';
import { About } from '@/components/about';
import { Products } from '@/components/products';
import { Gallery } from '@/components/gallery';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';
import { getSiteContent } from '@/lib/cms';

export default async function HomePage() {
  const content = await getSiteContent();
  return (
    <>
      <Navbar />
      <main id='main' className='min-h-dvh'>
        <HeroSlider slides={content.hero} />
        <About content={content.about} />
        <Products content={content.products} />
        <Gallery images={content.gallery} />
        <ContactSection content={content.contact} />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
