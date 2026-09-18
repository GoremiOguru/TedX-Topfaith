import React from 'react';
import { Award, Sparkles, Building2, Globe2, Briefcase, ExternalLink, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { PARTNERS_DATA } from '../data/eventData';

export const SponsorsSection: React.FC = () => {
  return (
    <section id="partners" className="section-padding" style={{ position: 'relative', background: 'rgba(10, 10, 14, 0.55)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Award size={14} />
            <span>Leadership & Production</span>
          </div>
          <h2 className="section-title">
            Patrons & <span className="highlight">Partners</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            TEDxTopfaithUniversity 2026 is convened through the visionary backing of Topfaith University and world-class executive consulting with The Centrestage Company.
          </p>
        </div>

        {/* Horizontal Patrons & Partners Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3.5rem' }}>
          {/* Partner 1: Topfaith University (Horizontal Banner) */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem 2rem',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(12, 12, 18, 0.95) 100%)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: '1 1 500px', minWidth: '280px' }}>
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '0.6rem 1rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  flexShrink: 0,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                }}
              >
                <img
                  src={PARTNERS_DATA.host.logo}
                  alt={PARTNERS_DATA.host.name}
                  style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
                />
              </div>

              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', fontWeight: 800, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>
                  <Building2 size={12} />
                  <span>{PARTNERS_DATA.host.title}</span>
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                  {PARTNERS_DATA.host.name}
                </h3>
                <p style={{ color: '#D1D5DB', fontSize: '0.88rem', lineHeight: 1.55, maxWidth: '620px' }}>
                  {PARTNERS_DATA.host.description}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
              <span style={{ fontSize: '0.75rem', color: '#93C5FD', fontWeight: 700, padding: '0.45rem 0.85rem', background: 'rgba(59, 130, 246, 0.12)', borderRadius: '9999px', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                Host Campus &bull; Mkpatak
              </span>
              <a
                href={PARTNERS_DATA.host.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.55rem 1.15rem', fontSize: '0.82rem', minHeight: '38px', width: 'auto' }}
              >
                <span>Visit Portal</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Partner 2: The Centrestage Company (Horizontal Banner) */}
          <div
            className="glass-card"
            style={{
              padding: '1.75rem 2rem',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              border: '1px solid rgba(235, 0, 40, 0.3)',
              background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.1) 0%, rgba(12, 12, 18, 0.95) 100%)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'rgba(235, 0, 40, 0.55)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(235, 0, 40, 0.3)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: '1 1 500px', minWidth: '280px' }}>
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '0.5rem 0.85rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  flexShrink: 0,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                }}
              >
                <img
                  src={PARTNERS_DATA.producer.logo}
                  alt={PARTNERS_DATA.producer.name}
                  style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
                />
              </div>

              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', fontWeight: 800, color: '#FFD700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>
                  <Globe2 size={12} />
                  <span>{PARTNERS_DATA.producer.title}</span>
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                  {PARTNERS_DATA.producer.name}
                </h3>
                <p style={{ color: '#D1D5DB', fontSize: '0.88rem', lineHeight: 1.55, maxWidth: '620px' }}>
                  {PARTNERS_DATA.producer.description}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
              <span style={{ fontSize: '0.75rem', color: '#FFD700', fontWeight: 700, padding: '0.45rem 0.85rem', background: 'rgba(255, 215, 0, 0.1)', borderRadius: '9999px', border: '1px solid rgba(255, 215, 0, 0.3)' }}>
                Global Consultant &bull; Executive Producer
              </span>
              <a
                href={PARTNERS_DATA.producer.url || "https://thecentrestagecompany.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.55rem 1.15rem', fontSize: '0.82rem', minHeight: '38px', width: 'auto' }}
              >
                <span>Visit Agency</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Responsive Advertisement & Official Partnership Desk */}
        <div
          className="glass-card sponsor-ad-card"
          style={{
            background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.14) 0%, rgba(18, 18, 26, 0.96) 100%)',
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
        </div>
      </div>

      <style>{`
        /* MOBILE VIEW (Default: < 900px) */
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

        /* DESKTOP VIEW (>= 900px): Restore Side-by-Side Pitch on Left & Form on Right */
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
