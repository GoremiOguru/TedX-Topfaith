import React, { useState } from 'react';
import { ArrowUp, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#040406',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Col 1: Brand & Mandatory TEDx Statement */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <img
                src="/tedxtopfaithlogo(white).png"
                alt="TEDxTopfaithUniversity Logo"
                style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <p style={{ color: '#9CA3AF', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              {EVENT_DETAILS.theme} &mdash; {EVENT_DETAILS.tagline}. Igniting transformative ideas at Topfaith University, Mkpatak, Akwa Ibom State, Nigeria.
            </p>

            <div
              style={{
                fontSize: '0.78rem',
                color: '#71717A',
                padding: '0.85rem 1rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: '#EB0028' }}>Official TED License:</strong> This independent TEDx event is operated under license from TED.
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Event Directory
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#A1A1AA' }}>
              <li><a href="#about" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}>About TEDx & Topfaith</a></li>
              <li><a href="#theme" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}>Theme: Transcend</a></li>
              <li><a href="#speakers" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}>Speaker Unveils</a></li>
              <li><a href="#schedule" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}>Agenda (9 AM &ndash; 12 PM)</a></li>
              <li><a href="#venue" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}>The Law Auditorium</a></li>
              <li><a href="#partners" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}>Partners & The Centrestage Co.</a></li>
              <li><a href="#tickets" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}>Reserve Delegate Pass</a></li>
            </ul>
          </div>

          {/* Col 3: University Info & Global Producer */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Host & Producer
            </h4>
            <div style={{ color: '#A1A1AA', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              <div style={{ color: '#FFFFFF', fontWeight: 600 }}>The Law Auditorium</div>
              <div>Topfaith University Campus</div>
              <div>Mkpatak, Essien Udim LGA</div>
              <div>Akwa Ibom State, Nigeria</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <img src="/the_centrestage_company_logo.jpg" alt="The Centrestage Company" style={{ height: '30px', borderRadius: '4px' }} />
              <div style={{ fontSize: '0.75rem', color: '#D1D5DB' }}>
                <div style={{ fontWeight: 700, color: '#FFFFFF' }}>The Centrestage Company</div>
                <div>Global Consultant & Producer</div>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter & Stay Updated */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Speaker Drop Alerts
            </h4>
            <p style={{ color: '#9CA3AF', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Subscribe to receive instant announcements when speakers and talk titles are revealed.
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 2.8rem 0.75rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: '#EB0028',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.4rem 0.6rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Send size={14} />
                </button>
              </div>

              {subscribed && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#00C853', fontSize: '0.8rem' }}>
                  <CheckCircle2 size={13} />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#71717A',
          }}
        >
          <div>
            &copy; 2026 TEDxTopfaithUniversity. All rights reserved. Operated under official license from TED.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#A1A1AA',
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '0.4rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
