import React, { useState } from 'react';
import { Mic2, Lock, Sparkles, Bell, ArrowRight, CheckCircle2, UserCheck, ShieldAlert, Info } from 'lucide-react';
import { SPEAKER_TEASERS } from '../data/eventData';
import type { SpeakerTeaser } from '../types';

export const SpeakersSection: React.FC = () => {
  const [activeTeaser, setActiveTeaser] = useState<SpeakerTeaser | null>(null);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notified, setNotified] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail.trim()) {
      setNotified(true);
      setNotifyEmail('');
      setTimeout(() => setNotified(false), 5000);
    }
  };

  return (
    <section id="speakers" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Sparkles size={14} />
            <span>The 2026 Lineup</span>
          </div>
          <h2 className="section-title">
            The Speaker <span className="highlight">Unveiling</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Our curatorial board is actively reviewing speaker submissions across multidisciplinary domains in accordance with official TED licensing guidelines. Official speaker profiles and talk announcements will be revealed in curated drops!
          </p>
        </div>

        {/* Subtle Carousel Control Prompt */}
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.76rem',
              color: '#9CA3AF',
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '0.3rem 0.8rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Sparkles size={12} color="#EB0028" />
            <span>Auto-playing Lineup &bull; Hover or tap to pause &bull; Tap card for details</span>
          </div>
        </div>
      </div>

      {/* Auto-looping Speaker Carousel (Mobile & Desktop) */}
      <div className="speaker-carousel-wrapper">
        <div className="speaker-carousel-track">
          {[...SPEAKER_TEASERS, ...SPEAKER_TEASERS].map((teaser, idx) => (
            <div
              key={`speaker-carousel-${teaser.id}-${idx}`}
              className="glass-card speaker-carousel-card"
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(14, 14, 18, 0.9)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.35s ease',
              }}
              onClick={() => setActiveTeaser(teaser)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = teaser.silhouetteColor;
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 20px 45px rgba(0, 0, 0, 0.8), 0 0 35px ${teaser.silhouetteColor}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Silhouette Graphic Container */}
              <div>
                <div
                  style={{
                    position: 'relative',
                    height: '190px',
                    borderRadius: '16px',
                    background: `radial-gradient(circle at 50% 40%, ${teaser.silhouetteColor}25 0%, rgba(6, 6, 10, 0.95) 75%)`,
                    border: `1px solid ${teaser.silhouetteColor}35`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    overflow: 'hidden',
                  }}
                >
                  {/* Glowing Lock Outline */}
                  <div
                    style={{
                      width: '75px',
                      height: '75px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `2px dashed ${teaser.silhouetteColor}80`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.65rem',
                    }}
                  >
                    <Lock size={28} color={teaser.silhouetteColor} />
                  </div>

                  <div
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: teaser.silhouetteColor,
                      background: 'rgba(0,0,0,0.65)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      border: `1px solid ${teaser.silhouetteColor}40`,
                    }}
                  >
                    DROP {(idx % SPEAKER_TEASERS.length) + 1}
                  </div>
                </div>

                {/* Category & Status */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: teaser.silhouetteColor, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                    <Mic2 size={12} />
                    <span>{teaser.category}</span>
                  </div>

                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: '#9CA3AF',
                      background: 'rgba(255, 255, 255, 0.06)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {teaser.status}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                  {teaser.field}
                </h3>

                <p style={{ fontSize: '0.84rem', color: '#9CA3AF', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {teaser.curatorialNote}
                </p>
              </div>

              {/* Reveal Clue CTA */}
              <div
                style={{
                  marginTop: '0.5rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: teaser.silhouetteColor,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Info size={14} />
                  <span>Curatorial Review Details</span>
                </div>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">

        {/* Drop Notification & Speaker Audition Callout */}
        <div
          className="glass-card"
          style={{
            padding: '3rem 2.5rem',
            background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.12) 0%, rgba(14, 14, 20, 0.95) 100%)',
            border: '1px solid rgba(235, 0, 40, 0.35)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Col 1: Notification Signup */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#EB0028', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              <Bell size={15} />
              <span>BE FIRST IN THE KNOW</span>
            </div>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Get Priority Speaker Drop Alerts
            </h3>
            <p style={{ color: '#A1A1AA', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Receive priority notifications as each confirmed speaker and talk title is officially unveiled ahead of November 21st, 2026.
            </p>

            <form onSubmit={handleNotify} style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '9999px',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.88rem' }}
              >
                <span>Notify Me</span>
              </button>
            </form>

            {notified && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#00C853', fontSize: '0.82rem', marginTop: '0.6rem' }}>
                <CheckCircle2 size={15} />
                <span>You're on the priority notification list!</span>
              </div>
            )}
          </div>

          {/* Col 2: Student / Faculty Pitch */}
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.09)', paddingLeft: '1.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#60A5FA', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              <UserCheck size={15} />
              <span>TOPFAITH COMMUNITY CALL FOR IDEAS</span>
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Have an Idea Worth Spreading?
            </h3>
            <p style={{ color: '#A1A1AA', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Topfaith students, researchers, and innovators are invited to submit talk pitches for curatorial review for the student catalyst stage.
            </p>

            <a
              href="mailto:freshjoshcliff@gmail.com?subject=Speaker%20Audition%20Pitch%20-%20TEDxTopfaithUniversity"
              className="btn btn-secondary"
              style={{ padding: '0.75rem 1.35rem', fontSize: '0.88rem' }}
            >
              <span>Submit Speaker Pitch</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Curatorial Status Modal */}
      {activeTeaser && (
        <div className="modal-overlay" onClick={() => setActiveTeaser(null)}>
          <div
            className="glass-card"
            style={{
              maxWidth: '550px',
              width: '100%',
              background: 'rgba(12, 12, 16, 0.98)',
              border: `1px solid ${activeTeaser.silhouetteColor}60`,
              padding: '2.5rem',
              position: 'relative',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                width: '65px',
                height: '65px',
                borderRadius: '50%',
                background: `${activeTeaser.silhouetteColor}20`,
                border: `2px solid ${activeTeaser.silhouetteColor}`,
                color: activeTeaser.silhouetteColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
              }}
            >
              <Sparkles size={28} />
            </div>

            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: activeTeaser.silhouetteColor, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              {activeTeaser.category} &bull; {activeTeaser.status}
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
              {activeTeaser.field}
            </h3>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                padding: '1.25rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '1.75rem',
                textAlign: 'left',
              }}
            >
              <div style={{ fontSize: '0.75rem', color: '#EB0028', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Curatorial Protocol
              </div>
              <p style={{ color: '#E4E4E7', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Under official TED guidelines, speaker confirmations and talk narratives undergo strict curatorial vetting. The confirmed speaker profile for this session will be officially announced in upcoming reveal drops.
              </p>
            </div>

            <button
              onClick={() => setActiveTeaser(null)}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.8rem' }}
            >
              <span>Close Information</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

