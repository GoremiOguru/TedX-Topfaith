import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, Check, ArrowRight, AlertTriangle, Users, Sparkles } from 'lucide-react';
import { TICKET_TIERS, EVENT_DETAILS } from '../data/eventData';

interface TicketSectionProps {
  onSelectTier: (tierId: string) => void;
}

export const TicketSection: React.FC<TicketSectionProps> = ({ onSelectTier }) => {
  const [activeMobileTier, setActiveMobileTier] = useState<number>(0);

  return (
    <section id="tickets" className="section-padding" style={{ position: 'relative', background: 'rgba(6, 6, 9, 0.85)', overflow: 'hidden' }}>
      {/* Ambient background light bloom */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(235, 0, 40, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div className="section-badge animate-float">
            <Ticket size={14} />
            <span>Passes & Registration</span>
          </div>
          <h2 className="section-title">
            Claim Your <span className="highlight">Delegate Pass</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Passes for {EVENT_DETAILS.venue.name} are strictly limited under TED university license regulations to preserve an intimate, world-class experience.
          </p>
        </motion.div>

        {/* Tiers Showcase: Desktop 2-Column Grid / Mobile Horizontal Swipe Carousel */}
        <div className="tickets-showcase-wrapper" style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div
            className="tickets-cards-container"
            onScroll={(e) => {
              const target = e.currentTarget;
              const scrollPercent = target.scrollLeft / (target.scrollWidth - target.clientWidth || 1);
              setActiveMobileTier(scrollPercent > 0.5 ? 1 : 0);
            }}
          >
            {TICKET_TIERS.map((tier, idx) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="glass-card ticket-showcase-card"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: tier.popular ? '2px solid #EB0028' : '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: tier.popular
                    ? '0 20px 50px rgba(235, 0, 40, 0.3), 0 0 30px rgba(235, 0, 40, 0.2)'
                    : '0 15px 35px rgba(0, 0, 0, 0.6)',
                  position: 'relative',
                  background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.06) 0%, rgba(14, 14, 20, 0.96) 100%)',
                  boxSizing: 'border-box',
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
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Sparkles size={11} />
                    <span>STANDARD PASS</span>
                  </div>
                )}

                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 700, color: '#EB0028', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                    <Users size={13} />
                    <span>{tier.badge}</span>
                  </div>

                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                    {tier.name}
                  </h3>

                  <p style={{ color: '#D1D5DB', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', minHeight: '44px' }}>
                    {tier.description}
                  </p>

                  {/* Price Display */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
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
                    {tier.features.map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: '#F4F4F5', lineHeight: 1.5 }}>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            background: 'rgba(235, 0, 40, 0.18)',
                            border: '1px solid rgba(235, 0, 40, 0.4)',
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
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#EB0028', fontWeight: 700, marginBottom: '0.85rem' }}>
                    <AlertTriangle size={14} />
                    <span>Strict limit: Early reservation advised</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectTier(tier.id)}
                    className={`btn ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ width: '100%', padding: '0.95rem', fontSize: '0.98rem' }}
                  >
                    <span>Select {tier.name}</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Swipe Pagination Dots */}
          <div className="mobile-ticket-dots" style={{ display: 'none', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            {TICKET_TIERS.map((_, i) => (
              <div
                key={i}
                style={{
                  width: activeMobileTier === i ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  background: activeMobileTier === i ? '#EB0028' : 'rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* MOBILE VIEW (< 768px): Horizontal Swipe Carousel */
        @media (max-width: 767px) {
          .tickets-cards-container {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 1rem !important;
            padding: 0.5rem 0.25rem 1rem 0.25rem !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          .tickets-cards-container::-webkit-scrollbar {
            display: none !important;
          }
          .ticket-showcase-card {
            flex: 0 0 calc(100vw - 2.5rem) !important;
            max-width: 350px !important;
            scroll-snap-align: center !important;
            box-sizing: border-box !important;
          }
          .mobile-ticket-dots {
            display: flex !important;
          }
        }

        /* DESKTOP VIEW (>= 768px): 2-Column Vertical Grid */
        @media (min-width: 768px) {
          .tickets-cards-container {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.5rem !important;
          }
          .ticket-showcase-card {
            flex: unset !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
