import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Mic2, Lock, Info, Bell, CheckCircle2, X } from 'lucide-react';
import { SPEAKER_TEASERS, EVENT_DETAILS } from '../data/eventData';
import type { SpeakerTeaser } from '../types';

export const SpeakersSection: React.FC = () => {
  const [activeTeaser, setActiveTeaser] = useState<SpeakerTeaser | null>(null);
  const [notifyEmail, setNotifyEmail] = useState<string>('');
  const [notified, setNotified] = useState<boolean>(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail.trim()) {
      setNotified(true);
      setTimeout(() => {
        setNotified(false);
        setNotifyEmail('');
      }, 5000);
    }
  };

  // Duplicate the teasers for seamless infinite auto-scroll
  const duplicatedTeasers = [...SPEAKER_TEASERS, ...SPEAKER_TEASERS];

  return (
    <section id="speakers" className="section-padding" style={{ position: 'relative', overflow: 'hidden', background: '#070709' }}>
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(235, 0, 40, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
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
            <span>Curated Catalyst Lineup</span>
          </div>
          <h2 className="section-title">
            The <span className="highlight">Speakers & Visionaries</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            In adherence with TED's mystery reveal traditions, the final speaker lineup for {EVENT_DETAILS.theme} is unlocking in staged drops. Discover the 8 multidisciplinary fields represented on the red dot.
          </p>
        </motion.div>
      </div>

      {/* Auto-Looping Infinite Horizontal Speaker Carousel */}
      <div className="speaker-carousel-wrapper">
        <div className="speaker-carousel-track">
          {duplicatedTeasers.map((teaser, index) => (
            <motion.div
              key={`${teaser.id}-${index}`}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-card speaker-carousel-card"
              onClick={() => setActiveTeaser(teaser)}
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(235, 0, 40, 0.3)',
                background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.08) 0%, rgba(14, 14, 20, 0.95) 100%)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(235, 0, 40, 0.15)',
                      border: '1px solid rgba(235, 0, 40, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Lock size={18} color="#EB0028" />
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: '#EB0028',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      background: 'rgba(235, 0, 40, 0.12)',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(235, 0, 40, 0.3)',
                    }}
                  >
                    CONFIDENTIAL
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.45rem', lineHeight: 1.3 }}>
                  {teaser.codename}
                </h3>
                <div style={{ fontSize: '0.85rem', color: '#D1D5DB', fontWeight: 600, marginBottom: '0.85rem' }}>
                  {teaser.field}
                </div>

                <p style={{ color: '#A1A1AA', fontSize: '0.84rem', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                  {teaser.curatorialNote}
                </p>
              </div>

              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveTeaser(teaser);
                  }}
                  className="btn btn-secondary"
                  style={{ width: '100%', padding: '0.65rem', fontSize: '0.82rem', minHeight: '38px' }}
                >
                  <Info size={14} />
                  <span>View Pillar Details</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Speaker Reveal Alerts Submissions Callout Banner */}
      <div className="container" style={{ marginTop: '3.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{
            padding: '2.5rem 2rem',
            background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.12) 0%, rgba(14, 14, 20, 0.96) 100%)',
            border: '1px solid rgba(235, 0, 40, 0.35)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(235, 0, 40, 0.15)',
          }}
        >
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
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
                background: 'rgba(235, 0, 40, 0.1)',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                border: '1px solid rgba(235, 0, 40, 0.3)',
              }}
            >
              <Mic2 size={13} />
              <span>STAGED SPEAKER DROPS</span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.1rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: 1.25 }}>
              Be The First To Know When Speakers Are Unlocked
            </h3>

            <p style={{ color: '#D1D5DB', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '2rem' }}>
              Subscribe to get instant alerts as our secret speakers from arts, culture, enterprise, sustainable futures, and governance are officially unveiled.
            </p>

            {/* Email Form */}
            <form onSubmit={handleNotify} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '520px', margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="Enter your email for drop alerts..."
                  required
                  style={{
                    flex: '1 1 240px',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="btn btn-primary"
                  style={{ padding: '0.85rem 1.5rem', fontSize: '0.9rem', width: 'auto', minHeight: '46px' }}
                >
                  <Bell size={15} />
                  <span>Notify Me</span>
                </motion.button>
              </div>

              {notified && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '0.5rem', background: 'rgba(235, 0, 40, 0.2)', padding: '0.5rem', borderRadius: '8px' }}
                >
                  <CheckCircle2 size={16} color="#EB0028" />
                  <span>Thank you! You will be notified immediately upon the next speaker reveal.</span>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>

      {/* Modal for Teaser Info */}
      <AnimatePresence>
        {activeTeaser && (
          <div className="modal-overlay" onClick={() => setActiveTeaser(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="glass-card"
              style={{
                maxWidth: '520px',
                width: '100%',
                padding: '2.5rem 2rem',
                border: '1px solid rgba(235, 0, 40, 0.4)',
                background: 'rgba(12, 12, 16, 0.98)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 40px rgba(235, 0, 40, 0.25)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '12px',
                      background: 'rgba(235, 0, 40, 0.15)',
                      border: '1px solid rgba(235, 0, 40, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Lock size={22} color="#EB0028" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#EB0028', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {activeTeaser.category}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF' }}>
                      {activeTeaser.codename}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTeaser(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '50%',
                    width: '34px',
                    height: '34px',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px', padding: '1.25rem', marginBottom: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.75rem', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Thematic Pillar & Focus
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  {activeTeaser.field}
                </div>
                <p style={{ color: '#D1D5DB', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {activeTeaser.curatorialNote}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div
                  style={{
                    padding: '0.85rem',
                    borderRadius: '10px',
                    background: 'rgba(235, 0, 40, 0.12)',
                    border: '1px solid rgba(235, 0, 40, 0.3)',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                  }}
                >
                  Speaker Identity Unlocking Soon
                </div>
                <button
                  onClick={() => setActiveTeaser(null)}
                  className="btn btn-secondary"
                  style={{ width: '100%', padding: '0.75rem' }}
                >
                  <span>Close Window</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
