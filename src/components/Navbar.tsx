import React, { useState, useEffect } from 'react';
import { Menu, X, Ticket, Sparkles, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface NavbarProps {
  onOpenRegister: (tierId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Theme', href: '#theme' },
    { label: 'Speaker Reveal', href: '#speakers' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'The Auditorium', href: '#venue' },
    { label: 'Passes', href: '#tickets' },
    { label: 'Partners', href: '#partners' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.35s ease',
          backgroundColor: scrolled ? 'rgba(6, 6, 9, 0.92)' : 'rgba(6, 6, 9, 0.4)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.09)' : '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none',
          padding: scrolled ? '0.65rem 0' : '1rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>

          {/* Left Brand Area: Topfaith Logo + TEDx Lockup */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {/* Topfaith University Logo (Clickable -> opens university website) */}
            <a
              href="https://topfaith.edu.ng"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Topfaith University Official Website"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                textDecoration: 'none',
                padding: '0.25rem 0.5rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(235, 0, 40, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <img
                src="/logo.png"
                alt="Topfaith University Logo"
                style={{
                  height: '38px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
              <div style={{ display: 'none', flexDirection: 'column' }} className="topfaith-header-label">
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Topfaith Uni
                </span>
                <span style={{ fontSize: '0.55rem', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <span>topfaith.edu.ng</span>
                  <ExternalLink size={8} />
                </span>
              </div>
            </a>

            {/* Divider */}
            <div style={{ width: '1px', height: '28px', background: 'rgba(255, 255, 255, 0.15)' }} />

            {/* TEDx TopfaithUniversity Lockup */}
            <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <div className="ted-logo-wrap">
                <div className="ted-logo-main" style={{ fontSize: '1.45rem' }}>
                  <span className="ted-red">TED</span>
                  <span className="ted-x">x</span>
                  <span className="ted-event-name" style={{ fontSize: '1.2rem' }}>TopfaithUniversity</span>
                </div>
                <span className="ted-tagline">x = independently organized TED event</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '1.6rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  color: '#D1D5DB',
                  transition: 'color 0.2s ease',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#D1D5DB')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem',
                color: '#D1D5DB',
                background: 'rgba(235, 0, 40, 0.1)',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                border: '1px solid rgba(235, 0, 40, 0.3)',
              }}
              className="event-pill"
            >
              <Calendar size={13} color="#EB0028" />
              <span>Nov 21, 2026 &bull;</span>
            </div>

            <button
              onClick={() => onOpenRegister()}
              className="btn btn-primary"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
            >
              <Ticket size={15} />
              <span>Get Pass</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              className="mobile-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(6, 6, 9, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '6rem 2rem 2rem 2rem',
            justifyContent: 'space-between',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <a
                href="https://topfaith.edu.ng"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
              >
                <img src="/logo.png" alt="Topfaith Logo" style={{ height: '32px' }} />
                <span style={{ fontSize: '0.8rem', color: '#D1D5DB' }}>Visit topfaith.edu.ng &rarr;</span>
              </a>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#F4F4F5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{link.label}</span>
                <span style={{ color: '#EB0028', fontSize: '0.9rem' }}>&rarr;</span>
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9CA3AF', fontSize: '0.85rem' }}>
              <MapPin size={15} color="#EB0028" />
              <span>{EVENT_DETAILS.venue.name}, {EVENT_DETAILS.venue.city}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.9rem' }}
            >
              <Ticket size={18} />
              <span>Reserve Seat Now</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1040px) {
          .desktop-nav {
            display: flex !important;
          }
          .event-pill {
            display: inline-flex !important;
          }
          .topfaith-header-label {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
