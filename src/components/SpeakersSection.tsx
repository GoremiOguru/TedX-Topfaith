import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mic2, Lock, Bell, CheckCircle2 } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const SpeakersSection: React.FC = () => {
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

  return (
    <section id="speakers" className="section-padding" style={{ position: 'relative', overflowX: 'clip', background: '#070709' }}>
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
          style={{ textAlign: 'center', marginBottom: '2.75rem' }}
        >
          <div className="section-badge animate-float">
            <Sparkles size={14} />
            <span>Curated Catalyst Lineup</span>
          </div>
          <h2 className="section-title">
            The <span className="highlight">Speakers & Visionaries</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            In adherence with TED's mystery reveal traditions, our official speaker lineup for {EVENT_DETAILS.theme} is unlocking soon. Stay tuned for staged announcements ahead of December 5th.
          </p>
        </motion.div>

        {/* Speaker Reveal Spotlight & Drop Alerts Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{
            padding: 'clamp(2rem, 4vw, 3.25rem) clamp(1.5rem, 3vw, 2.5rem)',
            background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.12) 0%, rgba(14, 14, 20, 0.96) 100%)',
            border: '1px solid rgba(235, 0, 40, 0.35)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(235, 0, 40, 0.15)',
          }}
        >
          <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(235, 0, 40, 0.16)',
                  border: '1px solid rgba(235, 0, 40, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 25px rgba(235, 0, 40, 0.25)',
                }}
              >
                <Lock size={24} color="#EB0028" />
              </div>
            </div>

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
                marginBottom: '0.85rem',
                background: 'rgba(235, 0, 40, 0.1)',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                border: '1px solid rgba(235, 0, 40, 0.3)',
              }}
            >
              <Mic2 size={13} />
              <span>SPEAKER LINEUP UNVEILING SOON</span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.85rem', lineHeight: 1.25 }}>
              Be The First To Know When Speakers Are Unlocked
            </h3>

            <p style={{ color: '#D1D5DB', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '2rem' }}>
              Our selected speakers are currently under wraps as we prepare for the official reveal. Subscribe below to get instant alerts as speaker identities and talk details are announced.
            </p>

            {/* Email Form */}
            <form onSubmit={handleNotify} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '520px', margin: '0 auto' }}>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="Enter your email for speaker reveal alerts..."
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
                  style={{
                    color: '#FFFFFF',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    marginTop: '0.5rem',
                    background: 'rgba(235, 0, 40, 0.2)',
                    padding: '0.55rem',
                    borderRadius: '8px',
                  }}
                >
                  <CheckCircle2 size={16} color="#EB0028" />
                  <span>Thank you! You will be notified as soon as the speakers are revealed.</span>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
