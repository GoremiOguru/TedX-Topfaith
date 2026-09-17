import React from 'react';
import { Sparkles, Cpu, Globe, Zap, ArrowUpRight } from 'lucide-react';
import { THEME_PILLARS, EVENT_DETAILS } from '../data/eventData';

interface ThemeSectionProps {
  onExploreTheme: () => void;
}

export const ThemeSection: React.FC<ThemeSectionProps> = ({ onExploreTheme }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu size={24} color="#EB0028" />;
      case 'Globe':
        return <Globe size={24} color="#00C853" />;
      case 'Zap':
        return <Zap size={24} color="#FF9100" />;
      default:
        return <Sparkles size={24} color="#FF334B" />;
    }
  };

  return (
    <section id="theme" className="section-padding" style={{ position: 'relative', background: 'rgba(10, 10, 14, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
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

        {/* Central Theme Manifesto Showcase */}
        <div
          className="glass-card"
          style={{
            padding: '3rem 2.5rem',
            marginBottom: '3.5rem',
            background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.08) 0%, rgba(18, 18, 24, 0.9) 100%)',
            border: '1px solid rgba(235, 0, 40, 0.25)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.85rem)',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.5,
                marginBottom: '1.5rem',
              }}
            >
              "True innovation doesn't ask for permission to cross borders. When a solution is deeply rooted in human truth, its resonance is inevitably global."
            </div>
            <div style={{ color: '#EB0028', fontWeight: 700, letterSpacing: '0.08em', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              &mdash; {EVENT_DETAILS.name} Curatorial Statement
            </div>
          </div>
        </div>

        {/* 4 Theme Pillars Grid */}
        <div className="grid-2" style={{ gap: '2rem' }}>
          {THEME_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-card"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(pillar.iconName)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: pillar.color,
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '9999px',
                      border: `1px solid ${pillar.color}40`,
                    }}
                  >
                    Pillar
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '0.5rem', color: '#FFFFFF' }}>
                  {pillar.title}
                </h3>
                <div style={{ fontSize: '0.9rem', color: '#EB0028', fontWeight: 600, marginBottom: '1rem' }}>
                  {pillar.subtitle}
                </div>
                <p style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {pillar.description}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.07)' }}>
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.78rem',
                        color: '#D1D5DB',
                        background: 'rgba(255, 255, 255, 0.04)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
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
