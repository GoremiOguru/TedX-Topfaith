import React from 'react';
import { Sparkles, Cpu, Globe, Zap, ArrowRight, Layers } from 'lucide-react';
import { THEME_PILLARS, EVENT_DETAILS } from '../data/eventData';

export const ThemeSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu size={26} color="#EB0028" />;
      case 'Globe':
        return <Globe size={26} color="#00E676" />;
      case 'Zap':
        return <Zap size={26} color="#FFAB00" />;
      default:
        return <Sparkles size={26} color="#FF3366" />;
    }
  };

  return (
    <section id="theme" className="section-padding" style={{ position: 'relative', background: 'rgba(8, 8, 12, 0.7)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Theme 2026</span>
          </div>
          <h2 className="section-title">
            TRANSCEND: <span className="highlight">Moving Local to Global</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We stand at the intersection of local authenticity and universal impact. How do we take grassroots ingenuity, African intellectual brilliance, and indigenous breakthroughs and scale them onto the highest global stages?
          </p>
        </div>

        {/* Central Theme Statement */}
        <div
          className="glass-card"
          style={{
            padding: '3rem 2.5rem',
            marginBottom: '4rem',
            background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.12) 0%, rgba(18, 18, 24, 0.95) 100%)',
            border: '1px solid rgba(235, 0, 40, 0.35)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(235, 0, 40, 0.15)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(1.3rem, 2.8vw, 2rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.45,
                marginBottom: '1.5rem',
              }}
            >
              "True innovation doesn't ask for permission to cross borders. When a solution is deeply rooted in human truth, its resonance is inevitably global."
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#EB0028', fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              <Layers size={14} />
              <span>{EVENT_DETAILS.name} Curatorial Vision &bull; Nov 21, 2026</span>
            </div>
          </div>
        </div>

        {/* Exciting 4 Theme Pillars Grid */}
        <div className="grid-2" style={{ gap: '2.5rem' }}>
          {THEME_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="glass-card"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: pillar.gradient,
                border: `1px solid ${pillar.borderGlow}`,
                boxShadow: `0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px ${pillar.accentColor}18`,
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px ${pillar.accentColor}35`;
                e.currentTarget.style.borderColor = pillar.accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px ${pillar.accentColor}18`;
                e.currentTarget.style.borderColor = pillar.borderGlow;
              }}
            >
              {/* Pillar Number Watermark in Background */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '15px',
                  fontSize: '6.5rem',
                  fontWeight: 900,
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: 'rgba(255, 255, 255, 0.03)',
                  pointerEvents: 'none',
                  lineHeight: 1,
                }}
              >
                0{idx + 1}
              </div>

              <div>
                {/* Top Row: Icon + Metric Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: `1px solid ${pillar.accentColor}50`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 25px ${pillar.accentColor}30`,
                    }}
                  >
                    {getIcon(pillar.iconName)}
                  </div>

                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: pillar.accentColor,
                      background: 'rgba(0, 0, 0, 0.5)',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '9999px',
                      border: `1px solid ${pillar.accentColor}40`,
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: pillar.metrics }} />
                  </div>
                </div>

                {/* Pillar Header */}
                <h3 style={{ fontSize: '1.55rem', fontWeight: 800, marginBottom: '0.4rem', color: '#FFFFFF', lineHeight: 1.25 }}>
                  {pillar.title}
                </h3>
                <div style={{ fontSize: '0.92rem', color: pillar.accentColor, fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.02em' }}>
                  {pillar.subtitle}
                </div>

                <p style={{ color: '#D1D5DB', fontSize: '0.96rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                  {pillar.description}
                </p>
              </div>

              {/* Tag Badges */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.09)',
                  }}
                >
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#F3F4F6',
                        background: 'rgba(255, 255, 255, 0.06)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
