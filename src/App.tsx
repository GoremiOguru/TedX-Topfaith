import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ThemeSection } from './components/ThemeSection';
import { SpeakersSection } from './components/SpeakersSection';
import { VenueSection } from './components/VenueSection';
import { SponsorsSection } from './components/SponsorsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { REGISTRATION_FORM_URL } from './data/eventData';

export const App: React.FC = () => {
  const handleOpenRegister = () => {
    if (REGISTRATION_FORM_URL) {
      window.open(REGISTRATION_FORM_URL, '_blank', 'noopener,noreferrer');
    }
  };

  const handleExploreSpeakers = () => {
    const el = document.getElementById('speakers');
    if (el) {
      const offset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Hero Section */}
      <Hero
        onOpenRegister={handleOpenRegister}
        onExploreSpeakers={handleExploreSpeakers}
      />

      {/* About Section */}
      <AboutSection />

      {/* Theme Section with Thematic Carousel */}
      <ThemeSection />

      {/* Speakers Unveiling Section */}
      <SpeakersSection />

      {/* Venue Showcase */}
      <VenueSection />

      {/* Patrons & Sponsors */}
      <SponsorsSection />

      {/* FAQ Accordion */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
