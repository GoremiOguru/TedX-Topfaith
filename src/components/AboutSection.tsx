import React from 'react';
import { Lightbulb, Target, Compass, Award, CheckCircle } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge">
            <Lightbulb size={14} />
            <span>The Power of Ideas</span>
          </div>
          <h2 className="section-title">
            Where Curiosity Meets <span className="highlight">Global Impact</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            In the spirit of TED's mission, "Ideas Worth Spreading," TEDxTopfaithUniversity is an independently organized gathering bringing together visionary minds for 3 electrifying hours (9:00 AM &ndash; 12:00 PM) on Saturday, November 21st, 2026.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid-2" style={{ alignItems: 'stretch', marginBottom: '4rem' }}>
          {/* TED & TEDx Philosophy Card */}
          <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(235, 0, 40, 0.15)',
                  color: '#FF4A61',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                }}
              >
                <Target size={14} />
                <span>WHAT IS TEDx?</span>
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Local Voices. Global Resonance.
              </h3>
              <p style={{ color: '#A1A1AA', fontSize: '0.98rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At TEDxTopfaithUniversity, live talks and deep discussions spark authentic connections and ideas that cross geographic borders.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Independently organized under official TED license',
                  'Multidisciplinary focus across arts, law, fashion, food heritage, enterprise & self-mastery',
                  'Zero commercial pitches, 100% intellectual passion',
                  'Strictly 200 seats for intimate, high-octane delegate networking'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#D1D5DB', fontSize: '0.9rem' }}>
                    <CheckCircle size={16} color="#EB0028" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: 'rgba(235, 0, 40, 0.2)',
                  border: '1px solid rgba(235, 0, 40, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EB0028',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                }}
              >
                x
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.92rem' }}>Official TED License</div>
                <div style={{ fontSize: '0.8rem', color: '#71717A' }}>x = independently organized TED event</div>
              </div>
            </div>
          </div>

          {/* Topfaith University Legacy Card */}
          <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  color: '#60A5FA',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                }}
              >
                <Award size={14} />
                <span>THE HOST INSTITUTION</span>
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', lineHeight: 1.25 }}>
                Topfaith University: Beacon of Innovation
              </h3>
              <p style={{ color: '#A1A1AA', fontSize: '0.98rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                Situated in Mkpatak, Topfaith University stands at the vanguard of academic distinction, technological research, and character formation. With the prestigious Law Auditorium and smart campus infrastructure, Topfaith provides the ideal stage for transcendence.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'The Law Auditorium: World-class acoustic amphitheater',
                  'Nurturing next-generation scientists, jurists, and entrepreneurs',
                  'Strategic production with The Centrestage Company',
                  'Serene, secure, and intellectually vibrant smart campus'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#D1D5DB', fontSize: '0.9rem' }}>
                    <Compass size={16} color="#3B82F6" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <img
                src="/logo.png"
                alt="Topfaith University"
                style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
              />
              <div>
                <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.92rem' }}>Topfaith University, Mkpatak</div>
                <div style={{ fontSize: '0.8rem', color: '#71717A' }}>Excellence, Character & Global Competence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Numbers Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {EVENT_DETAILS.stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: '2rem 1.5rem',
                textAlign: 'center',
                background: 'rgba(15, 15, 20, 0.65)',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  fontFamily: 'Space Grotesk, sans-serif',
                  marginBottom: '0.35rem',
                  letterSpacing: '-0.03em',
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: '2px',
                }}
              >
                <span style={{ color: '#EB0028' }}>{stat.value}</span>
                {stat.suffix && <span style={{ fontSize: '1.25rem', color: '#9CA3AF' }}>{stat.suffix}</span>}
              </div>
              <div style={{ color: '#A1A1AA', fontSize: '0.9rem', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
