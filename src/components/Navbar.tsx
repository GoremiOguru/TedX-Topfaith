import React, { useState, useEffect } from 'react';
import { Menu, X, Ticket, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface NavbarProps {
  onOpenRegister: (tierId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'The Auditorium', href: '#venue' },
    { label: 'About', href: '#about' },
    { label: 'Theme', href: '#theme' },
    { label: 'Speaker Reveal', href: '#speakers' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Passes', href: '#tickets' },
    { label: 'Partners', href: '#partners' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(6, 6, 9, 0.94)' : 'rgba(6, 6, 9, 0.65)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.65)' : 'none',
          padding: '0.65rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
          
          {/* Brand Area: Official TEDxTopfaith Logo */}
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <img
              src="/tedxtopfaithlogo(white).png"
              alt="TEDxTopfaithUniversity"
              style={{
                height: 'clamp(28px, 4vw, 36px)',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </a>

          {/* Desktop Nav Links (Hidden on Mobile) */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
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
                  fontWeight: 600,
                  color: '#D1D5DB',
                  transition: 'color 0.2s ease',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
            {/* Desktop-only Event Pill */}
            <div
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem',
                color: '#D1D5DB',
                background: 'rgba(235, 0, 40, 0.12)',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px',
                border: '1px solid rgba(235, 0, 40, 0.3)',
              }}
              className="event-pill"
            >
              <Calendar size={13} color="#EB0028" />
              <span>Nov 21, 2026</span>
            </div>

            {/* Header Get Pass Button */}
            <button
              onClick={() => onOpenRegister()}
              className="btn btn-primary"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.82rem',
                minHeight: '38px',
                width: 'auto',
              }}
            >
              <Ticket size={14} />
              <span>Get Pass</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Full Height Slide) */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(6, 6, 9, 0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '5.5rem 1.5rem 2rem 1.5rem',
            justifyContent: 'space-between',
            animation: 'fadeIn 0.2s ease-out',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <img src="/tedxtopfaithlogo(white).png" alt="TEDxTopfaithUniversity" style={{ height: '28px', width: 'auto' }} />
              <span style={{ fontSize: '0.75rem', color: '#EB0028', fontWeight: 700, letterSpacing: '0.05em' }}>SAT, NOV 21, 2026</span>
            </div>

            {/* Navigation Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#F4F4F5',
                    padding: '0.6rem 0.5rem',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <span>{link.label}</span>
                  <span style={{ color: '#EB0028', fontSize: '1rem' }}>&rarr;</span>
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
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
              style={{ width: '100%', padding: '0.9rem', fontSize: '1rem' }}
            >
              <Ticket size={18} />
              <span>Reserve Pass (₦10,000)</span>
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
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
