import React, { useState } from 'react';
import { Award, Mail, ArrowUpRight, CheckCircle } from 'lucide-react';
import { SPONSORS } from '../data/eventData';

export const SponsorsSection: React.FC = () => {
  const [inquirySent, setInquirySent] = useState(false);
  const [partnerEmail, setPartnerEmail] = useState('');

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (partnerEmail.trim()) {
      setInquirySent(true);
      setPartnerEmail('');
      setTimeout(() => setInquirySent(false), 5000);
    }
  };

  return (
    <section className="section-padding" style={{ position: 'relative', background: 'rgba(10, 10, 14, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Award size={14} />
            <span>Patrons & Partners</span>
          </div>
          <h2 className="section-title">
            Empowered by <span className="highlight">Visionary Partners</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We express deep gratitude to our institutional hosts, technological allies, and forward-looking patrons who make TEDxTopfaithUniversity possible.
          </p>
        </div>

        {/* Sponsor Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {SPONSORS.map((sp, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem 1.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                background: 'rgba(18, 18, 24, 0.55)',
              }}
            >
              <div style={{ fontSize: '2.2rem' }}>{sp.logo}</div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>{sp.name}</h4>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#EB0028',
                  background: 'rgba(235, 0, 40, 0.1)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                }}
              >
                {sp.tier}
              </span>
            </div>
          ))}
        </div>

        {/* Become a Partner Callout */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.08) 0%, rgba(14, 14, 18, 0.95) 100%)',
            border: '1px solid rgba(235, 0, 40, 0.25)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <div style={{ maxWidth: '550px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.4rem' }}>
              Partner with TEDxTopfaithUniversity
            </h3>
            <p style={{ color: '#9CA3AF', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Align your brand with intellectual excellence, youth innovation, and a global audience of over 40 million TEDx followers. Request our official 2026 Partnership Deck.
            </p>
          </div>

          <form onSubmit={handlePartnerSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', width: '100%', maxWidth: '420px' }}>
            <input
              type="email"
              placeholder="Enter your corporate email"
              value={partnerEmail}
              onChange={(e) => setPartnerEmail(e.target.value)}
              required
              style={{
                flex: 1,
                minWidth: '220px',
                padding: '0.75rem 1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '9999px',
                color: '#FFFFFF',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.88rem' }}
            >
              <span>Get Sponsor Kit</span>
            </button>
          </form>

          {inquirySent && (
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00C853', fontSize: '0.88rem', fontWeight: 600 }}>
              <CheckCircle size={16} />
              <span>Thank you! The TEDxTopfaith Sponsorship Deck has been sent to your inbox.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
