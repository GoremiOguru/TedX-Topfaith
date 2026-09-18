import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Flame, 
  Zap, 
  Globe, 
  Compass, 
  Radio, 
  Target, 
  Disc, 
  Award,
  Scale,
  Palette,
  Briefcase,
  UtensilsCrossed,
  HeartHandshake,
  Leaf
} from 'lucide-react';
import { THEME_PILLARS } from '../data/eventData';

interface ThematicWordItem {
  id: string;
  word: string;
  subtext: string;
  icon: React.ReactNode;
  accentColor: string;
  tag?: string;
}

export const ThemeSection: React.FC = () => {
  // Row 1 Thematic Items (Scrolling Left)
  const rowOneItems: ThematicWordItem[] = [
    {
      id: 'w1',
      word: 'ARTS, CULTURE & STORYTELLING',
      subtext: 'Global Transmedia Narratives',
      icon: <Sparkles size={20} color="#EB0028" />,
      accentColor: '#EB0028',
      tag: 'Pillar 1',
    },
    {
      id: 'w2',
      word: 'EXCEEDING LIMITATIONS',
      subtext: 'Official 2026 Theme',
      icon: <Zap size={20} color="#FFD700" />,
      accentColor: '#FFD700',
      tag: 'Event Theme',
    },
    {
      id: 'w3',
      word: 'FOOD, CRAFT & HERITAGE',
      subtext: 'Gastronomy & Living Traditions',
      icon: <UtensilsCrossed size={20} color="#FFAB00" />,
      accentColor: '#FFAB00',
      tag: 'Pillar 2',
    },
    {
      id: 'w4',
      word: 'THE RED DOT STAGE',
      subtext: 'The Iconic 18-Min Circle',
      icon: <Disc size={20} color="#EB0028" />,
      accentColor: '#EB0028',
      tag: 'TED Symbol',
    },
    {
      id: 'w5',
      word: 'FASHION & CREATIVE ENTERPRISE',
      subtext: 'Wearable Culture & Global Design',
      icon: <Layers size={20} color="#FF3366" />,
      accentColor: '#FF3366',
      tag: 'Pillar 3',
    },
    {
      id: 'w6',
      word: 'BUSINESS & CREATOR ECONOMY',
      subtext: 'Monetizing Cultural Capital',
      icon: <Briefcase size={20} color="#10B981" />,
      accentColor: '#10B981',
      tag: 'Pillar 4',
    },
    {
      id: 'w7',
      word: 'TOPFAITH VANGUARD',
      subtext: 'Academic Distinction',
      icon: <Award size={20} color="#A855F7" />,
      accentColor: '#A855F7',
      tag: 'Host Heritage',
    },
    {
      id: 'w8',
      word: 'PARADIGM SHIFTERS',
      subtext: 'Transformative Thought',
      icon: <Target size={20} color="#F59E0B" />,
      accentColor: '#F59E0B',
      tag: 'Catalysts',
    },
  ];

  // Row 2 Thematic Items (Scrolling Right)
  const rowTwoItems: ThematicWordItem[] = [
    {
      id: 'w9',
      word: 'LAW, GOVERNANCE & JUSTICE',
      subtext: 'Institutional Integrity & Reform',
      icon: <Scale size={20} color="#3B82F6" />,
      accentColor: '#3B82F6',
      tag: 'Pillar 5',
    },
    {
      id: 'w10',
      word: 'MIGRATION & DIASPORA',
      subtext: 'Transnational Global Networks',
      icon: <Globe size={20} color="#8B5CF6" />,
      accentColor: '#8B5CF6',
      tag: 'Pillar 6',
    },
    {
      id: 'w11',
      word: '3 HOURS OF POWER',
      subtext: '9:00 AM – 12:00 PM (WAT)',
      icon: <Radio size={20} color="#EB0028" />,
      accentColor: '#EB0028',
      tag: 'Program',
    },
    {
      id: 'w12',
      word: 'ENVIRONMENT & SUSTAINABLE FUTURES',
      subtext: 'Indigenous Ecology & Living',
      icon: <Leaf size={20} color="#00E676" />,
      accentColor: '#00E676',
      tag: 'Pillar 7',
    },
    {
      id: 'w13',
      word: 'MIND, GROWTH & SELF-MASTERY',
      subtext: 'Inner Resilience & Leadership',
      icon: <Sparkles size={20} color="#F59E0B" />,
      accentColor: '#F59E0B',
      tag: 'Pillar 8',
    },
    {
      id: 'w14',
      word: 'STRICTLY 200 SEATS',
      subtext: 'The Law Auditorium Quota',
      icon: <Target size={20} color="#10B981" />,
      accentColor: '#10B981',
      tag: 'Intimate Stage',
    },
    {
      id: 'w15',
      word: 'IDEAS WORTH SPREADING',
      subtext: 'The Global TED Creed',
      icon: <Flame size={20} color="#EB0028" />,
      accentColor: '#EB0028',
      tag: 'TED Creed',
    },
    {
      id: 'w16',
      word: 'UNSTOPPABLE MOMENTUM',
      subtext: 'November 21st, 2026',
      icon: <Flame size={20} color="#EB0028" />,
      accentColor: '#EB0028',
      tag: 'Date with Destiny',
    },
  ];

  return (
    <section id="theme" className="section-padding" style={{ position: 'relative', background: 'rgba(8, 8, 12, 0.75)', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Theme 2026</span>
          </div>
          <h2 className="section-title">
            TRANSCEND: <span className="highlight">Exceeding Limitations</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We explore the boundary breakers, the paradigm shifters, and the defiant dreamers who refuse to accept “impossible” as an answer across arts, culture, fashion, culinary heritage, creator commerce, law, global diaspora, ecology, and personal mastery.
          </p>
        </div>

        {/* Central Theme Quote Statement */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem 2rem',
            marginBottom: '3.5rem',
            background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.12) 0%, rgba(18, 18, 24, 0.95) 100%)',
            border: '1px solid rgba(235, 0, 40, 0.35)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(235, 0, 40, 0.15)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(1.25rem, 2.8vw, 1.95rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.45,
                marginBottom: '1.25rem',
              }}
            >
              "TEDxTopfaithUniversity is here to drive innovation, build growth and shift mindsets"
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#EB0028', fontWeight: 800, letterSpacing: '0.08em', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              <Layers size={14} />
              <span>Joshua Clifford, COTUS President &bull; 17th September, 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-playing, Horizontally Scrolling Infinite Loop Content Carousel */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%', marginBottom: '3rem' }}>
        
        {/* Carousel Row 1: Leftward Infinite Scroll */}
        <div className="marquee-container">
          <div className="marquee-row marquee-left">
            {[...rowOneItems, ...rowOneItems].map((item, idx) => (
              <div
                key={`row1-${item.id}-${idx}`}
                className="thematic-pill-card"
                style={{
                  borderLeft: `3px solid ${item.accentColor}`,
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: `${item.accentColor}18`,
                    border: `1px solid ${item.accentColor}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '0.92rem',
                        fontWeight: 800,
                        letterSpacing: '0.04em',
                        color: '#FFFFFF',
                      }}
                    >
                      {item.word}
                    </span>
                    {item.tag && (
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          color: item.accentColor,
                          background: 'rgba(0, 0, 0, 0.4)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '9999px',
                          border: `1px solid ${item.accentColor}30`,
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#9CA3AF', fontWeight: 500 }}>
                    {item.subtext}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Row 2: Rightward Infinite Scroll */}
        <div className="marquee-container">
          <div className="marquee-row marquee-right">
            {[...rowTwoItems, ...rowTwoItems].map((item, idx) => (
              <div
                key={`row2-${item.id}-${idx}`}
                className="thematic-pill-card"
                style={{
                  borderLeft: `3px solid ${item.accentColor}`,
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: `${item.accentColor}18`,
                    border: `1px solid ${item.accentColor}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '0.92rem',
                        fontWeight: 800,
                        letterSpacing: '0.04em',
                        color: '#FFFFFF',
                      }}
                    >
                      {item.word}
                    </span>
                    {item.tag && (
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          color: item.accentColor,
                          background: 'rgba(0, 0, 0, 0.4)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '9999px',
                          border: `1px solid ${item.accentColor}30`,
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#9CA3AF', fontWeight: 500 }}>
                    {item.subtext}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 8 Official Thematic Pillars Grid Showcase */}
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#EB0028', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            THE 8 PILLARS OF TRANSCENDENCE
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
          }}
        >
          {THEME_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-card"
              style={{
                padding: '1.25rem',
                borderRadius: '12px',
                border: `1px solid ${pillar.borderGlow}`,
                background: pillar.gradient,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = pillar.accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = pillar.borderGlow;
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: pillar.accentColor,
                      background: 'rgba(0, 0, 0, 0.4)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      border: `1px solid ${pillar.accentColor}30`,
                    }}
                  >
                    {pillar.metrics}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                  {pillar.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: '#D1D5DB', lineHeight: 1.5, marginBottom: '0.85rem' }}>
                  {pillar.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.75rem' }}>
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.72rem',
                      color: '#A1A1AA',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


