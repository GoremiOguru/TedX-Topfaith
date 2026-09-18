import React, { useRef, useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Flame, 
  Zap, 
  Globe, 
  Radio, 
  Target, 
  Disc, 
  Award,
  Scale,
  Briefcase,
  UtensilsCrossed,
  Leaf,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activePillarId, setActivePillarId] = useState<string>(THEME_PILLARS[0].id);

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
      word: 'EXCLUSIVE ACCESS',
      subtext: 'Curated Delegate Cohort',
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

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPillar = (id: string) => {
    setActivePillarId(id);
    const element = document.getElementById(`pillar-card-${id}`);
    if (element && scrollContainerRef.current) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <section id="theme" className="section-padding" style={{ position: 'relative', background: 'rgba(8, 8, 12, 0.75)', overflow: 'hidden' }}>
      {/* Dynamic Ambient Background Glow */}
      <div
        className="animate-pulse-glow"
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
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
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-badge animate-float">
            <Sparkles size={14} />
            <span>Theme 2026</span>
          </div>
          <h2 className="section-title">
            TRANSCEND: <span className="highlight">Exceeding Limitations</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We explore boundary breakers, paradigm shifters, and defiant dreamers across culture, fashion, gastronomy, creator commerce, law, global diaspora, ecology, and personal mastery.
          </p>
        </div>

        {/* Central Quote Statement */}
        <div
          className="glass-card"
          style={{
            padding: '2.25rem 2rem',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.12) 0%, rgba(18, 18, 24, 0.95) 100%)',
            border: '1px solid rgba(235, 0, 40, 0.35)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(235, 0, 40, 0.15)',
          }}
        >
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(1.15rem, 2.6vw, 1.85rem)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.4,
                marginBottom: '1rem',
              }}
            >
              "TEDxTopfaithUniversity is here to drive innovation, build growth and shift mindsets"
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#EB0028', fontWeight: 800, letterSpacing: '0.08em', fontSize: '0.82rem', textTransform: 'uppercase' }}>
              <Layers size={14} />
              <span>Joshua Clifford, COTUS President &bull; 17th September, 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-playing, Horizontally Scrolling Infinite Loop Content Carousel */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', marginBottom: '3.5rem' }}>
        
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
                    width: '36px',
                    height: '36px',
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
                        fontSize: '0.9rem',
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
                          fontSize: '0.65rem',
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
                  <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 500 }}>
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
                    width: '36px',
                    height: '36px',
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
                        fontSize: '0.9rem',
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
                          fontSize: '0.65rem',
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
                  <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 500 }}>
                    {item.subtext}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 8 Official Thematic Pillars: Sleek Animated Horizontal Interactive Showcase */}
      <div className="container">
        {/* Header & Controls */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 800, color: '#EB0028', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              <Zap size={13} />
              <span>THE 8 PILLARS OF TRANSCENDENCE</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.85rem)', fontWeight: 800, color: '#FFFFFF', marginTop: '0.2rem' }}>
              Explore The 8 Curated Domains
            </h3>
          </div>

          {/* Navigation Scroll Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              onClick={() => handleScroll('left')}
              className="btn btn-secondary"
              style={{
                width: '42px',
                height: '42px',
                minHeight: '42px',
                padding: 0,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Scroll Pillars Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="btn btn-secondary"
              style={{
                width: '42px',
                height: '42px',
                minHeight: '42px',
                padding: 0,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Scroll Pillars Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Quick-Jump Interactive Tab Pills Bar */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.75rem',
            marginBottom: '1rem',
            scrollbarWidth: 'none',
          }}
        >
          {THEME_PILLARS.map((pillar, index) => {
            const isActive = activePillarId === pillar.id;
            return (
              <button
                key={`tab-${pillar.id}`}
                onClick={() => scrollToPillar(pillar.id)}
                style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  background: isActive ? pillar.accentColor : 'rgba(255, 255, 255, 0.05)',
                  color: isActive ? '#FFFFFF' : '#A1A1AA',
                  border: isActive ? `1px solid ${pillar.accentColor}` : '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span>{index + 1}.</span>
                <span>{pillar.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Horizontal Card Track */}
        <div
          ref={scrollContainerRef}
          className="pillars-horizontal-wrapper"
        >
          {THEME_PILLARS.map((pillar, index) => {
            const isActive = activePillarId === pillar.id;
            return (
              <div
                key={pillar.id}
                id={`pillar-card-${pillar.id}`}
                className="pillar-horizontal-card"
                style={{
                  border: isActive ? `2px solid ${pillar.accentColor}` : `1px solid ${pillar.borderGlow}`,
                  background: pillar.gradient,
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                }}
                onClick={() => setActivePillarId(pillar.id)}
              >
                <div>
                  {/* Card Header: Number & Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: `${pillar.accentColor}25`,
                        border: `1px solid ${pillar.accentColor}60`,
                        color: pillar.accentColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 900,
                        fontSize: '0.85rem',
                        fontFamily: 'Space Grotesk',
                      }}
                    >
                      0{index + 1}
                    </div>

                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: pillar.accentColor,
                        background: 'rgba(0, 0, 0, 0.5)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        border: `1px solid ${pillar.accentColor}40`,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      <Sparkles size={11} />
                      <span>{pillar.metrics}</span>
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h4
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      marginBottom: '0.45rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {pillar.title}
                  </h4>
                  
                  <div style={{ fontSize: '0.82rem', color: pillar.accentColor, fontWeight: 700, marginBottom: '0.85rem' }}>
                    {pillar.subtitle}
                  </div>

                  <p style={{ fontSize: '0.86rem', color: '#D1D5DB', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1rem' }}>
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.74rem',
                          color: '#E4E4E7',
                          background: 'rgba(255, 255, 255, 0.08)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px',
                          fontWeight: 500,
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
