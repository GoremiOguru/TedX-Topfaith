import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, Building2, Globe2, Briefcase, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { PARTNERS_DATA } from '../data/eventData';

export const SponsorsSection: React.FC = () => {
  const [activeMobileCard, setActiveMobileCard] = useState<number>(0);

  const partners = [
    {
      id: 'host',
      name: PARTNERS_DATA.host.name,
      title: PARTNERS_DATA.host.title,
      logo: PARTNERS_DATA.host.logo,
      url: PARTNERS_DATA.host.url,
      description: PARTNERS_DATA.host.description,
      badge: 'Host Campus • Mkpatak',
      badgeIcon: <Building2 size={13} />,
      accentColor: '#EB0028',
      buttonText: 'Visit University Site',
    },
    {
      id: 'producer',
      name: PARTNERS_DATA.producer.name,
      title: PARTNERS_DATA.producer.title,
      logo: PARTNERS_DATA.producer.logo,
      url: PARTNERS_DATA.producer.url || 'https://thecentrestagecompany.com',
      description: PARTNERS_DATA.producer.description,
      badge: 'Global Consultant • Executive Producer',
      badgeIcon: <Globe2 size={13} />,
      accentColor: '#EB0028',
      buttonText: 'Visit Centrestage',
    },
  ];

  return (
    <section id="partners" className="section-padding" style={{ position: 'relative', background: 'rgba(8, 8, 12, 0.75)', overflow: 'hidden' }}>
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-10%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(235, 0, 40, 0.1) 0%, transparent 70%)',
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
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div className="section-badge animate-float">
            <Award size={14} />
            <span>Leadership & Production</span>
          </div>
          <h2 className="section-title">
            Patrons & <span className="highlight">Partners</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            TEDxTopfaithUniversity 2026 is convened through the visionary backing of Topfaith University and world-class executive consulting with The Centrestage Company.
          </p>
        </motion.div>

        {/* Patrons & Partners: Desktop 2-Column Grid / Mobile Horizontal Swipe Carousel */}
        <div className="partners-showcase-wrapper" style={{ marginBottom: '3.5rem' }}>
          <div
            className="partners-cards-container"
            onScroll={(e) => {
              const target = e.currentTarget;
              const scrollPercent = target.scrollLeft / (target.scrollWidth - target.clientWidth || 1);
              setActiveMobileCard(scrollPercent > 0.5 ? 1 : 0);
            }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="glass-card partner-showcase-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(235, 0, 40, 0.3)',
                  background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.08) 0%, rgba(14, 14, 20, 0.95) 100%)',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  {/* Top Row: Logo & Strategic Tag */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                    <div
                      style={{
                        background: '#FFFFFF',
                        padding: '0.5rem 0.85rem',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                      />
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#EB0028',
                        background: 'rgba(235, 0, 40, 0.12)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(235, 0, 40, 0.35)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {partner.id === 'host' ? 'Host Institution' : 'Strategic Partner'}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.45rem',
                    }}
                  >
                    {partner.badgeIcon}
                    <span>{partner.title}</span>
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {partner.name}
                  </h3>

                  <p style={{ color: '#D1D5DB', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {partner.description}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: '#E4E4E7',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      wordBreak: 'break-word',
                    }}
                  >
                    <Sparkles size={12} color="#EB0028" style={{ flexShrink: 0 }} />
                    <span>{partner.badge}</span>
                  </div>

                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      boxSizing: 'border-box',
                      minHeight: '42px',
                    }}
                  >
                    <span>{partner.buttonText}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Swipe Dots */}
          <div className="mobile-carousel-dots" style={{ display: 'none', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            {partners.map((_, i) => (
              <div
                key={i}
                style={{
                  width: activeMobileCard === i ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  background: activeMobileCard === i ? '#EB0028' : 'rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>

        {/* Responsive Advertisement & Official Partnership Desk */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card sponsor-ad-card"
          style={{
            background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.14) 0%, rgba(14, 14, 20, 0.96) 100%)',
            border: '1px solid rgba(235, 0, 40, 0.4)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(235, 0, 40, 0.2)',
          }}
        >
          <div className="sponsor-ad-grid">
            {/* Left Column (Desktop) / Top (Mobile) */}
            <div className="sponsor-pitch-wrap">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#EB0028',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.75rem',
                  background: 'rgba(235, 0, 40, 0.1)',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(235, 0, 40, 0.3)',
                }}
              >
                <Briefcase size={14} />
                <span>SPONSORSHIP & BRAND VISIBILITY</span>
              </div>

              <h3 className="sponsor-pitch-title">
                Partner with TEDxTopfaithUniversity 2026
              </h3>

              <p className="sponsor-pitch-desc">
                Position your organization at the epicenter of innovation and thought leadership. Align your brand with the globally respected TED brand, reach forward-thinking students, industry executives, and tap into global digital broadcast distribution.
              </p>

              {/* Perks List */}
              <div className="sponsor-perks-grid">
                {[
                  '4K Global TEDx Broadcast Exposure',
                  'Exclusive VIP Executive Pavilion',
                  'Direct Campus Talent Access',
                  'Brand Visibility on All Collaterals'
                ].map((perk, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#E4E4E7',
                      fontSize: '0.86rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <Sparkles size={14} color="#EB0028" style={{ flexShrink: 0 }} />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (Desktop) / Bottom (Mobile): Sponsor Deck Request Action */}
            <div className="sponsor-form-wrap">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#EB0028',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.75rem',
                  background: 'rgba(235, 0, 40, 0.12)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(235, 0, 40, 0.35)',
                }}
              >
                <Sparkles size={13} color="#EB0028" />
                <span>OFFICIAL PARTNERSHIP DESK</span>
              </div>

              <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                Request Official Partnership Deck
              </h4>
              <p style={{ color: '#D1D5DB', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Complete our brief sponsorship inquiry to receive the official TEDxTopfaithUniversity 2026 Partnership Deck and connect directly with our convener team.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a
                  href="https://forms.gle/MzzRgTwccJo9qUUX7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    fontSize: '0.96rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.55rem',
                    boxShadow: '0 8px 25px rgba(235, 0, 40, 0.45)',
                  }}
                >
                  <span>Open Partnership Application</span>
                  <ExternalLink size={16} />
                </a>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: '#9CA3AF', fontSize: '0.78rem' }}>
                  <ShieldCheck size={13} color="#00E676" />
                  <span>Official Google Form &bull; Quick 2-Minute Review</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* MOBILE VIEW (< 768px): Horizontal Swipe Carousel */
        @media (max-width: 767px) {
          .partners-cards-container {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 1rem !important;
            padding: 0.5rem 0.25rem 1rem 0.25rem !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          .partners-cards-container::-webkit-scrollbar {
            display: none !important;
          }
          .partner-showcase-card {
            flex: 0 0 calc(100vw - 2.5rem) !important;
            max-width: 350px !important;
            scroll-snap-align: center !important;
            box-sizing: border-box !important;
          }
          .mobile-carousel-dots {
            display: flex !important;
          }
        }

        /* DESKTOP VIEW (>= 768px): 2-Column Vertical Grid */
        @media (min-width: 768px) {
          .partners-cards-container {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
          .partner-showcase-card {
            flex: unset !important;
            max-width: 100% !important;
          }
        }

        /* AD CARD LAYOUT */
        .sponsor-ad-card {
          max-width: 980px;
          margin: 0 auto;
          padding: 2.5rem 1.5rem;
          text-align: center;
        }
        .sponsor-ad-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
        }
        .sponsor-pitch-wrap {
          max-width: 780px;
          margin: 0 auto;
          text-align: center;
        }
        .sponsor-pitch-title {
          font-size: clamp(1.75rem, 5vw, 2.35rem);
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.25;
          margin-bottom: 1rem;
        }
        .sponsor-pitch-desc {
          color: #D1D5DB;
          font-size: 0.96rem;
          line-height: 1.7;
          margin: 0 auto 1.75rem auto;
        }
        .sponsor-perks-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          margin: 0 auto;
          text-align: left;
        }
        @media (min-width: 540px) {
          .sponsor-perks-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .sponsor-form-wrap {
          width: 100%;
          max-width: 580px;
          margin: 0 auto;
          background: rgba(8, 8, 12, 0.92);
          padding: 1.75rem 1.25rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          text-align: center;
        }

        @media (min-width: 900px) {
          .sponsor-ad-card {
            padding: 3.5rem 3rem;
            text-align: left;
          }
          .sponsor-ad-grid {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 3rem;
            align-items: center;
          }
          .sponsor-pitch-wrap {
            max-width: 100%;
            margin: 0;
            text-align: left;
          }
          .sponsor-pitch-title {
            font-size: 2.35rem;
          }
          .sponsor-pitch-desc {
            margin: 0 0 1.5rem 0;
          }
          .sponsor-perks-grid {
            grid-template-columns: 1fr 1fr;
            margin: 0;
          }
          .sponsor-form-wrap {
            max-width: 100%;
            margin: 0;
            padding: 2.25rem 2rem;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
};
