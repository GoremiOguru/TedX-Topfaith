import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Flame, 
  Zap, 
  Globe, 
  Lightbulb, 
  Rocket, 
  Compass, 
  Radio, 
  Target, 
  Cpu, 
  Disc, 
  Award,
  ArrowUpRight
} from 'lucide-react';

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
      word: 'IDEAS WORTH SPREADING',
      subtext: 'The Global TED Creed',
      icon: <Flame size={20} color="#EB0028" />,
      accentColor: '#EB0028',
      tag: 'TED Creed',
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
      word: 'THE RED DOT STAGE',
      subtext: 'The Iconic 18-Min Circle',
      icon: <Disc size={20} color="#EB0028" />,
      accentColor: '#EB0028',
      tag: 'TED Symbol',
    },
    {
      id: 'w4',
      word: 'RADICAL INGENUITY',
      subtext: 'Indigenous Engineering',
      icon: <Cpu size={20} color="#60A5FA" />,
      accentColor: '#60A5FA',
      tag: 'Innovation',
    },
    {
      id: 'w5',
      word: 'BREAKING CEILINGS',
      subtext: 'Defying Conventional Boundaries',
      icon: <Rocket size={20} color="#FF3366" />,
      accentColor: '#FF3366',
      tag: 'Mindset',
    },
    {
      id: 'w6',
      word: 'AFRICAN EXCELLENCE',
      subtext: 'Global Vanguard from Nigeria',
      icon: <Globe size={20} color="#00E676" />,
      accentColor: '#00E676',
      tag: 'Impact',
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
      word: 'DEFIANT DREAMS',
      subtext: 'Refusing the Impossible',
      icon: <Sparkles size={20} color="#FF3366" />,
      accentColor: '#FF3366',
      tag: 'Vision',
    },
    {
      id: 'w10',
      word: 'BORDERLESS IMPACT',
      subtext: 'Local Roots to Global Echo',
      icon: <Compass size={20} color="#3B82F6" />,
      accentColor: '#3B82F6',
      tag: 'Reach',
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
      word: 'LIMITLESS HORIZONS',
      subtext: 'Discovery & Research',
      icon: <Lightbulb size={20} color="#FBBF24" />,
      accentColor: '#FBBF24',
      tag: 'Future',
    },
    {
      id: 'w13',
      word: 'STRICTLY 200 SEATS',
      subtext: 'The Law Auditorium Quota',
      icon: <Target size={20} color="#10B981" />,
      accentColor: '#10B981',
      tag: 'Intimate Stage',
    },
    {
      id: 'w14',
      word: 'TRANSFORMATIVE DIALOGUE',
      subtext: 'Catalyzing Next Era Solutions',
      icon: <Layers size={20} color="#EC4899" />,
      accentColor: '#EC4899',
      tag: 'Discourse',
    },
    {
      id: 'w15',
      word: 'YOUTH AUDACITY',
      subtext: 'Student Innovator Stage',
      icon: <Zap size={20} color="#F97316" />,
      accentColor: '#F97316',
      tag: 'Catalyst',
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
            We explore the boundary breakers, the paradigm shifters, and the defiant dreamers who refuse to accept “impossible” as an answer. TRANSCEND is our declaration that the next era of global impact is forged through African ingenuity and fearless curiosity.
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%', marginBottom: '2.5rem' }}>
        
        {/* Carousel Row 1: Leftward Infinite Scroll */}
        <div className="marquee-container">
          <div className="marquee-row marquee-left">
            {/* Duplicated for seamless infinite loop */}
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
            {/* Duplicated for seamless infinite loop */}
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

      {/* Thematic Pillars Compact Banner */}
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            padding: '1.25rem',
            background: 'rgba(12, 12, 16, 0.7)',
            borderRadius: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {[
            { title: 'Tech Breakthroughs', desc: 'Frontier AI & Indigenous Engineering', color: '#EB0028' },
            { title: 'Afro-Futurism & Arts', desc: 'Creative Power on Global Stages', color: '#FF3366' },
            { title: 'Planetary Systems', desc: 'Ecological & Sustainable Innovation', color: '#00E676' },
            { title: 'Youth Leadership', desc: 'Audacious Solutions & Global Policy', color: '#FFAB00' },
          ].map((pillar, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: pillar.color,
                  boxShadow: `0 0 10px ${pillar.color}`,
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>{pillar.title}</div>
                <div style={{ fontSize: '0.72rem', color: '#9CA3AF' }}>{pillar.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

