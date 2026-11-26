import React from 'react';
import { motion } from 'framer-motion';
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
  Lightbulb,
  Compass,
  Mic2,
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
  // Row 1 Thematic Items (Scrolling Left) - Pure TED Colors (Red & White)
  const rowOneItems: ThematicWordItem[] = [
    {
      id: 'w1',
      word: 'EXCEEDING LIMITATIONS',
      subtext: 'Official 2026 Theme',
      icon: <Zap size={20} color="#EB0028" />,
      accentColor: '#EB0028',
      tag: 'Event Theme',
    },
    {
      id: 'w2',
      word: 'THE RED DOT STAGE',
      subtext: 'The Iconic 18-Min Circle',
      icon: <Disc size={20} color="#EB0028" />,
      accentColor: '#EB0028',
      tag: 'TED Symbol',
    },
    {
      id: 'w3',
      word: 'BOLD PERSPECTIVES',
      subtext: 'Challenging Assumptions',
      icon: <Lightbulb size={20} color="#FFFFFF" />,
      accentColor: '#FFFFFF',
      tag: 'Mindset',
    },
    {
      id: 'w4',
      word: 'TOPFAITH VANGUARD',
      subtext: 'Academic Distinction',
      icon: <Award size={20} color="#FFFFFF" />,
      accentColor: '#FFFFFF',
      tag: 'Host Heritage',
    },
    {
      id: 'w5',
      word: 'PARADIGM SHIFTERS',
      subtext: 'Transformative Thought',
      icon: <Target size={20} color="#EB0028" />,
      accentColor: '#EB0028',
      tag: 'Catalysts',
    },
    {
      id: 'w6',
      word: 'THE LAW AUDITORIUM',
      subtext: 'Topfaith University, Mkpatak',
      icon: <Compass size={20} color="#FFFFFF" />,
      accentColor: '#FFFFFF',
      tag: 'Official Venue',
    },
  ];

  // Row 2 Thematic Items (Scrolling Right) - Pure TED Colors (Red & White)
  const rowTwoItems: ThematicWordItem[] = [
    {
      id: 'w7',
      word: '3 HOURS OF POWER',
      subtext: '9:00 AM – 12:00 PM (WAT)',
      icon: <Radio size={20} color="#EB0028" />,
      accentColor: '#EB0028',
      tag: 'Program',
    },
    {
      id: 'w8',
      word: 'IDEAS WORTH SPREADING',
      subtext: 'The Global TED Creed',
      icon: <Flame size={20} color="#EB0028" />,
      accentColor: '#EB0028',
      tag: 'TED Creed',
    },
    {
      id: 'w9',
      word: 'VOICES OF IMPACT',
      subtext: 'Curated Live TEDx Talks',
      icon: <Mic2 size={20} color="#FFFFFF" />,
      accentColor: '#FFFFFF',
      tag: 'Main Stage',
    },
    {
      id: 'w10',
      word: 'GLOBAL RESONANCE',
      subtext: 'Local Roots, Global Reach',
      icon: <Globe size={20} color="#EB0028" />,
      accentColor: '#EB0028',
      tag: 'TEDx Network',
    },
    {
      id: 'w11',
      word: 'CURATED ACCESS',
      subtext: 'Free Advance Registration',
      icon: <Target size={20} color="#FFFFFF" />,
      accentColor: '#FFFFFF',
      tag: 'Intimate Stage',
    },
    {
      id: 'w12',
      word: 'UNSTOPPABLE MOMENTUM',
      subtext: 'December 5th, 2026',
      icon: <Flame size={20} color="#EB0028" />,
      accentColor: '#EB0028',
      tag: 'Save the Date',
    },
  ];

  return (
    <section id="theme" className="section-padding" style={{ position: 'relative', background: 'rgba(8, 8, 12, 0.85)', overflowX: 'clip' }}>
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
          background: 'radial-gradient(circle, rgba(235, 0, 40, 0.15) 0%, transparent 70%)',
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
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div className="section-badge animate-float">
            <Sparkles size={14} />
            <span>Theme 2026</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <img
              src="/TEDX44.png"
              alt="TRANSCEND — Exceeding Limitations Official Event Logo"
              style={{
                height: 'clamp(72px, 13vw, 130px)',
                width: 'auto',
                maxWidth: '90%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 10px 30px rgba(235, 0, 40, 0.35))',
              }}
            />
          </div>
          <h2 className="section-title">
            TRANSCEND: <span className="highlight">Exceeding Limitations</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Celebrating boundary breakers, paradigm shifters, and bold thinkers whose ideas challenge assumptions, ignite growth, and inspire lasting change.
          </p>
        </motion.div>

        {/* Central Quote Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{
            padding: '2.25rem 2rem',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.14) 0%, rgba(14, 14, 20, 0.96) 100%)',
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
        </motion.div>
      </div>

      {/* Auto-playing, Horizontally Scrolling Infinite Loop Marquee */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
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
                          background: 'rgba(0, 0, 0, 0.5)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '9999px',
                          border: `1px solid ${item.accentColor}40`,
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#D1D5DB', fontWeight: 500 }}>
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
                          background: 'rgba(0, 0, 0, 0.5)',
                          padding: '0.15rem 0.5rem',
                          borderRadius: '9999px',
                          border: `1px solid ${item.accentColor}40`,
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#D1D5DB', fontWeight: 500 }}>
                    {item.subtext}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
