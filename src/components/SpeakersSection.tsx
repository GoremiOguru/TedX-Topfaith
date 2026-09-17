import React, { useState } from 'react';
import { Mic2, Lock, Sparkles, Bell, ArrowRight, CheckCircle2, UserCheck, Eye } from 'lucide-react';
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
            Our curatorial board is currently reviewing confidential speaker submissions across technology, global finance, bio-science, arts, and student innovation. Official speaker profiles will be unveiled in upcoming drops!
          </p>
        </div>

        {/* Mystery Teaser Cards Grid */}
        <div className="grid-3" style={{ gap: '2rem', marginBottom: '4rem' }}>
          {SPEAKER_TEASERS.map((teaser, idx) => (
            <div
              key={teaser.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(14, 14, 18, 0.85)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.35s ease',
              }}
              onClick={() => setActiveTeaser(teaser)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = teaser.silhouetteColor;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 16px 40px rgba(0, 0, 0, 0.7), 0 0 30px ${teaser.silhouetteColor}25`;
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
                    height: '220px',
                    borderRadius: '16px',
                    background: `radial-gradient(circle at 50% 40%, ${teaser.silhouetteColor}25 0%, rgba(6, 6, 10, 0.95) 75%)`,
                    border: `1px solid ${teaser.silhouetteColor}35`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    overflow: 'hidden',
                  }}
                >
                  {/* Glowing Silhouette Outline */}
                  <div
                    style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `2px dashed ${teaser.silhouetteColor}80`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <Lock size={32} color={teaser.silhouetteColor} />
                  </div>

                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: teaser.silhouetteColor,
                      background: 'rgba(0,0,0,0.6)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '9999px',
                      border: `1px solid ${teaser.silhouetteColor}40`,
                    }}
                  >
                    UNVEILING IN DROP {idx + 1}
                  </div>
                </div>

                {/* Category & Codename */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: teaser.silhouetteColor, fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  <Mic2 size={13} />
                  <span>{teaser.category}</span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  {teaser.codename}
                </h3>

                <div style={{ fontSize: '0.86rem', color: '#9CA3AF', marginBottom: '1.25rem', fontWeight: 500 }}>
                  {teaser.field}
                </div>

                {/* Teaser Quote preview */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '1rem',
                    borderRadius: '10px',
                    borderLeft: `3px solid ${teaser.silhouetteColor}`,
                    fontStyle: 'italic',
                    color: '#D1D5DB',
                    fontSize: '0.88rem',
                    lineHeight: 1.55,
                  }}
                >
                  "{teaser.teaserQuote}"
                </div>
              </div>

              {/* Reveal Clue CTA */}
              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: teaser.silhouetteColor,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Eye size={15} />
                  <span>View Curatorial Clue</span>
                </div>
                <ArrowRight size={15} />
              </div>
            </div>
          ))}
        </div>

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
              Get Instant Speaker Drop Alerts
            </h3>
            <p style={{ color: '#A1A1AA', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Receive priority alerts as each visionary speaker is officially unveiled ahead of November 21st, 2026.
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
              Topfaith students and faculty innovators are invited to submit a 3-minute video pitch to be considered for the student innovator stage.
            </p>

            <a
              href="mailto:speakers@tedxtopfaithuni.com?subject=Speaker%20Audition%20Pitch%20-%20TEDxTopfaithUniversity"
              className="btn btn-secondary"
              style={{ padding: '0.75rem 1.35rem', fontSize: '0.88rem' }}
            >
              <span>Submit Speaker Pitch</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Clue Modal */}
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
              {activeTeaser.category} &bull; CODENAME: {activeTeaser.codename}
            </div>

            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
              {activeTeaser.field}
            </h3>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                padding: '1.25rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '1.5rem',
                textAlign: 'left',
              }}
            >
              <div style={{ fontSize: '0.75rem', color: '#EB0028', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Curatorial Clue
              </div>
              <p style={{ color: '#E4E4E7', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {activeTeaser.hint}
              </p>
            </div>

            <div style={{ fontStyle: 'italic', color: '#A1A1AA', fontSize: '0.92rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              "{activeTeaser.teaserQuote}"
            </div>

            <button
              onClick={() => setActiveTeaser(null)}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.8rem' }}
            >
              <span>Close Clue</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
