import React, { useState } from 'react';
import { ArrowUp, Send, CheckCircle2 } from 'lucide-react';
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* Col 1: Brand & Mandatory TEDx Statement */}
          <div>
            <div className="ted-logo-wrap" style={{ marginBottom: '1.25rem' }}>
              <div className="ted-logo-main" style={{ fontSize: '1.85rem' }}>
                <span className="ted-red">TED</span>
                <span className="ted-x">x</span>
                <span className="ted-event-name">TopfaithUniversity</span>
              </div>
              <span className="ted-tagline">x = independently organized TED event</span>
            </div>

            <p style={{ color: '#9CA3AF', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              {EVENT_DETAILS.theme} &mdash; {EVENT_DETAILS.tagline}. Igniting groundbreaking ideas at Topfaith University, Mkpatak, Akwa Ibom State, Nigeria.
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
              Explore Event
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#A1A1AA' }}>
              <li><a href="#about" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}>About TEDx & Topfaith</a></li>
              <li><a href="#theme" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}>The 2026 Theme: Transcend</a></li>
              <li><a href="#speakers" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}>Distinguished Speakers</a></li>
              <li><a href="#schedule" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}>Event Program & Schedule</a></li>
              <li><a href="#venue" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}>Law Auditorium Complex Tour</a></li>
              <li><a href="#tickets" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')} onMouseLeave={(e) => (e.currentTarget.style.color = '#A1A1AA')}>Reserve Delegate Pass</a></li>
            </ul>
          </div>

          {/* Col 3: University Info & Venue */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Host Venue
            </h4>
            <div style={{ color: '#A1A1AA', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              <div style={{ color: '#FFFFFF', fontWeight: 600 }}>The Law Auditorium Complex</div>
              <div>Topfaith University Campus</div>
              <div>Mkpatak, Essien Udim LGA</div>
              <div>Akwa Ibom State, Nigeria</div>
            </div>

            <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>
              <div>Email: <a href="mailto:info@tedxtopfaithuni.com" style={{ color: '#EB0028' }}>info@tedxtopfaithuni.com</a></div>
              <div>Web: <a href="https://topfaith.edu.ng" target="_blank" rel="noreferrer" style={{ color: '#D1D5DB' }}>topfaith.edu.ng</a></div>
            </div>
          </div>

          {/* Col 4: Newsletter & Stay Updated */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Stay Inspired
            </h4>
            <p style={{ color: '#9CA3AF', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Subscribe to get exclusive talk releases, speaker announcements, and backstage insights.
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
            &copy; {new Date().getFullYear()} TEDxTopfaithUniversity. All rights reserved. Organized under official license from TED.
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
