import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ThemeSection } from './components/ThemeSection';
import { SpeakersSection } from './components/SpeakersSection';
import { ScheduleSection } from './components/ScheduleSection';
import { VenueSection } from './components/VenueSection';
import { TicketSection } from './components/TicketSection';
import { SponsorsSection } from './components/SponsorsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';

export const App: React.FC = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string>('student-pass');

  const handleOpenRegister = (tierId?: string) => {
    if (tierId) {
      setSelectedTierId(tierId);
    }
    setIsRegisterOpen(true);
  };

  const handleExploreSpeakers = () => {
    const el = document.getElementById('speakers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* Hero Section */}
      <Hero
        onOpenRegister={() => handleOpenRegister()}
        onExploreSpeakers={handleExploreSpeakers}
      />

      {/* About Section */}
      <AboutSection />

      {/* Theme Section */}
      <ThemeSection />

      {/* Speakers Unveiling Section */}
      <SpeakersSection />

      {/* Agenda & Schedule */}
      <ScheduleSection />

      {/* Venue Showcase */}
      <VenueSection />

      {/* Passes & Tickets */}
      <TicketSection onSelectTier={(tierId) => handleOpenRegister(tierId)} />

      {/* Patrons & Sponsors */}
      <SponsorsSection />

      {/* FAQ Accordion */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Registration & Digital Pass Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        initialTierId={selectedTierId}
        onClose={() => setIsRegisterOpen(false)}
      />
    </div>
  );
};

export default App;
