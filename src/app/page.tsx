'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/relia/Navigation';
import { HeroSection } from '@/components/relia/HeroSection';
import { TeamSection } from '@/components/relia/TeamSection';
import { SupportSection } from '@/components/relia/SupportSection';
import { EventsSection } from '@/components/relia/EventsSection';
import { PhotoGallerySection } from '@/components/relia/PhotoGallerySection';
import { ContactSection } from '@/components/relia/ContactSection';
import { Footer } from '@/components/relia/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-1">
          <HeroSection />
          <TeamSection />
          <SupportSection />
          <EventsSection />
          <PhotoGallerySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
