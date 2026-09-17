import React from 'react';
import { Ticket, Check, Sparkles, ArrowRight } from 'lucide-react';
import { TICKET_TIERS } from '../data/eventData';

interface TicketSectionProps {
  onSelectTier: (tierId: string) => void;
}

export const TicketSection: React.FC<TicketSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="tickets" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Ticket size={14} />
            <span>Passes & Registration</span>
          </div>
          <h2 className="section-title">
            Claim Your <span className="highlight">Delegate Seat</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Seats at The Law Auditorium are strictly limited under TED licensing quotas to ensure optimal experience and networking quality.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid-3" style={{ alignItems: 'stretch', gap: '2rem' }}>
          {TICKET_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="glass-card"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: tier.popular ? '2px solid #EB0028' : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: tier.popular ? '0 20px 50px rgba(235, 0, 40, 0.25)' : 'none',
                position: 'relative',
              }}
            >
              {tier.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    background: '#EB0028',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    boxShadow: '0 0 15px rgba(235, 0, 40, 0.6)',
                  }}
                >
                  RECOMMENDED
                </div>
              )}

              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: tier.popular ? '#EB0028' : '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  {tier.badge}
                </div>

                <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  {tier.name}
                </h3>

                <p style={{ color: '#A1A1AA', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', minHeight: '44px' }}>
                  {tier.description}
                </p>

                {/* Price Display */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', fontFamily: 'Space Grotesk' }}>
                    {tier.price === 0 ? 'FREE' : `${tier.currency}${tier.price.toLocaleString()}`}
                  </span>
                  {tier.originalPrice && (
                    <span style={{ textDecoration: 'line-through', color: '#71717A', fontSize: '1.1rem' }}>
                      {tier.currency}{tier.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {tier.price > 0 && <span style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>/ delegate</span>}
                </div>

                {/* Features List */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                  {tier.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: '#E4E4E7', lineHeight: 1.5 }}>
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: 'rgba(235, 0, 40, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#EB0028',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <Check size={12} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div style={{ fontSize: '0.78rem', color: '#FF4A61', fontWeight: 600, marginBottom: '0.75rem', textAlign: 'center' }}>
                  ⚡ Only {tier.spotsLeft} passes remaining
                </div>

                <button
                  onClick={() => onSelectTier(tier.id)}
                  className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}
                >
                  <span>Select {tier.name}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
