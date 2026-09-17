import React from 'react';
import { Ticket, Check, ArrowRight, AlertTriangle, Users } from 'lucide-react';
import { TICKET_TIERS, EVENT_DETAILS } from '../data/eventData';

interface TicketSectionProps {
  onSelectTier: (tierId: string) => void;
}

export const TicketSection: React.FC<TicketSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="tickets" className="section-padding" style={{ position: 'relative', background: 'rgba(6, 6, 9, 0.5)' }}>
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
            Seats at {EVENT_DETAILS.venue.name} are strictly limited to 200 attendees (170 Delegates &bull; 10 VIP Executives) under TED quota regulations.
          </p>
        </div>

        {/* 2-Column Tiers Grid */}
        <div className="grid-2" style={{ maxWidth: '960px', margin: '0 auto', alignItems: 'stretch', gap: '2.5rem' }}>
          {TICKET_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="glass-card"
              style={{
                padding: '2.75rem 2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: tier.popular ? '2px solid #EB0028' : '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: tier.popular ? '0 20px 50px rgba(235, 0, 40, 0.25), 0 0 30px rgba(235, 0, 40, 0.15)' : 'none',
                position: 'relative',
                background: 'rgba(14, 14, 20, 0.9)',
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
                  STANDARD PASS
                </div>
              )}

              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 700, color: tier.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  <Users size={13} />
                  <span>{tier.badge}</span>
                </div>

                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  {tier.name}
                </h3>

                <p style={{ color: '#A1A1AA', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', minHeight: '44px' }}>
                  {tier.description}
                </p>

                {/* Price Display */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <span style={{ fontSize: '2.75rem', fontWeight: 900, color: '#FFFFFF', fontFamily: 'Space Grotesk' }}>
                    {tier.currency}{tier.price.toLocaleString()}
                  </span>
                  {tier.originalPrice && (
                    <span style={{ textDecoration: 'line-through', color: '#71717A', fontSize: '1.15rem' }}>
                      {tier.currency}{tier.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>/ delegate</span>
                </div>

                {/* Features List */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                  {tier.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: '#E4E4E7', lineHeight: 1.5 }}>
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#FF4A61', fontWeight: 700, marginBottom: '0.85rem' }}>
                  <AlertTriangle size={14} />
                  <span>Strict limit: Total {tier.totalSeats} seats allotted</span>
                </div>

                <button
                  onClick={() => onSelectTier(tier.id)}
                  className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', padding: '0.95rem', fontSize: '0.98rem' }}
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
