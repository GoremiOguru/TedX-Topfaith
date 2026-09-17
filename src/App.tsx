import React, { useState } from 'react';
import { Ticket, Calendar } from 'lucide-react';
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

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="mobile-bottom-bar">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '0.72rem', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '3px' }}>
            <Calendar size={11} color="#EB0028" />
            <span>Nov 21 &bull; 200 Seats</span>
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF' }}>
            From ₦10,000
          </div>
        </div>

        <button
          onClick={() => handleOpenRegister()}
          className="btn btn-primary"
          style={{
            padding: '0.65rem 1.35rem',
            fontSize: '0.88rem',
            minHeight: '42px',
            width: 'auto',
            borderRadius: '9999px',
          }}
        >
          <Ticket size={15} />
          <span>Get Pass</span>
        </button>
      </div>

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
