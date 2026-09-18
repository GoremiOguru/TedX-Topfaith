import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Compass, Award, CheckCircle, ExternalLink, Globe, Sparkles } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', overflow: 'hidden', background: '#08080C' }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <div className="section-badge animate-float">
            <Lightbulb size={14} />
            <span>The Power of Ideas</span>
          </div>
          <h2 className="section-title">
            Where Curiosity Meets <span className="highlight">Global Impact</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            In the spirit of TED's mission, "Ideas Worth Spreading," TEDxTopfaithUniversity is an independently organized gathering bringing together visionary minds for 3 electrifying hours (9:00 AM &ndash; 12:00 PM) on Saturday, November 21st, 2026.
          </p>
        </motion.div>

        {/* Featured "What is TEDx?" Narrative Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '3.5rem',
            border: '1px solid rgba(235, 0, 40, 0.35)',
            background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.1) 0%, rgba(14, 14, 20, 0.98) 100%)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 35px rgba(235, 0, 40, 0.15)',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(235, 0, 40, 0.2)',
                  border: '1px solid rgba(235, 0, 40, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#EB0028',
                  fontWeight: 900,
                  fontSize: '1.1rem',
                }}
              >
                x
              </div>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#EB0028',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                DISCOVER THE MISSION
              </span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#FFFFFF', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              What is <span style={{ color: '#EB0028' }}>TEDx</span>?
            </h3>

            <div style={{ color: '#E4E4E7', fontSize: '1.02rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>
                <strong style={{ color: '#FFFFFF' }}>TED</strong> is a global nonprofit organisation dedicated to sharing ideas worth spreading. Through TED Talks, it brings together leading voices in science, technology, education, business, arts and beyond to share ideas that inspire people to think differently and create change.
              </p>
              <p>
                <strong style={{ color: '#EB0028' }}>TEDx</strong> brings this spirit to local communities through independently organised events licensed by TED. Since its launch in 2009, more than <span style={{ color: '#FFFFFF', fontWeight: 700 }}>49,000 TEDx events</span> have been held across <span style={{ color: '#FFFFFF', fontWeight: 700 }}>180 countries</span>, with over <span style={{ color: '#FFFFFF', fontWeight: 700 }}>4,000 events</span> taking place each year.
              </p>
              <p>
                TED’s global platform reaches millions of people every month, with its content generating more than <span style={{ color: '#EB0028', fontWeight: 800 }}>1.7 billion views and listens annually</span>. This global reach, combined with TED’s standards for speaker selection, coaching and event production, makes TEDx a respected platform for discovering and sharing ideas with impact.
              </p>
            </div>

            {/* TEDx Key Pillars Checklist */}
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1rem',
              }}
            >
              {[
                'Independently organized under official TED license',
                'Multidisciplinary focus across 8 transcendent pillars',
                'Zero commercial pitches, 100% intellectual passion',
                'Curated delegate cohort for intimate networking',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#F4F4F5', fontSize: '0.88rem' }}>
                  <CheckCircle size={16} color="#EB0028" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 2-Column Campus & Strategic Production Grid */}
        <div className="grid-2" style={{ alignItems: 'stretch', marginBottom: '4rem' }}>
          {/* Topfaith University Legacy Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(14, 14, 20, 0.95) 100%)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Award size={14} color="#EB0028" />
                <span>THE HOST INSTITUTION</span>
              </div>
              <h3 style={{ fontSize: '1.65rem', marginBottom: '1rem', lineHeight: 1.25, color: '#FFFFFF', fontWeight: 800 }}>
                Topfaith University: Beacon of Innovation
              </h3>
              <p style={{ color: '#D1D5DB', fontSize: '0.94rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                Situated in Mkpatak, Topfaith University stands at the vanguard of academic distinction, technological research, and character formation. With the prestigious Law Auditorium and smart campus infrastructure, Topfaith provides the ideal stage for transcendence.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'The Law Auditorium: World-class acoustic amphitheater',
                  'Nurturing next-generation leaders, jurists, and entrepreneurs',
                  'Serene, secure, and intellectually vibrant smart campus'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#F4F4F5', fontSize: '0.9rem' }}>
                    <Compass size={16} color="#EB0028" style={{ flexShrink: 0 }} />
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
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img
                  src="/logo.png"
                  alt="Topfaith University"
                  style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                />
                <div>
                  <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.92rem' }}>Topfaith University</div>
                  <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Mkpatak, Akwa Ibom State</div>
                </div>
              </div>
              <a
                href="https://topfaith.edu.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.45rem 0.95rem', fontSize: '0.8rem', minHeight: '34px', width: 'auto' }}
              >
                <span>Visit University Site</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

          {/* Strategic Production & Global Reach Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="glass-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(235, 0, 40, 0.3)',
              background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.08) 0%, rgba(14, 14, 20, 0.95) 100%)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(235, 0, 40, 0.15)',
                  color: '#EB0028',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                }}
              >
                <Globe size={14} />
                <span>EXECUTIVE PRODUCTION</span>
              </div>
              <h3 style={{ fontSize: '1.65rem', marginBottom: '1rem', lineHeight: 1.25, color: '#FFFFFF', fontWeight: 800 }}>
                World-Class Production Architecture
              </h3>
              <p style={{ color: '#D1D5DB', fontSize: '0.94rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                Executive consulting and staging curated in partnership with <strong style={{ color: '#FFFFFF' }}>The Centrestage Company</strong>, applying international TED broadcast benchmarks, multi-camera 4K cinematography, and immersive stage craft.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  '4K Ultra HD Broadcast & Multi-angle Capture',
                  'Acoustically calibrated stage setup and lighting design',
                  'Executive delegate curation and seamless guest protocol'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#F4F4F5', fontSize: '0.9rem' }}>
                    <Sparkles size={16} color="#EB0028" style={{ flexShrink: 0 }} />
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
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img
                  src="/the_centrestage_company_logo.jpg"
                  alt="The Centrestage Company"
                  style={{ height: '36px', width: 'auto', borderRadius: '8px', objectFit: 'contain' }}
                />
                <div>
                  <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '0.92rem' }}>The Centrestage Company</div>
                  <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Executive Producer & Consultant</div>
                </div>
              </div>
              <a
                href="https://thecentrestagecompany.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.45rem 0.95rem', fontSize: '0.8rem', minHeight: '34px', width: 'auto' }}
              >
                <span>Visit Centrestage</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* 4 Impact Numbers Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {EVENT_DETAILS.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card"
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(14, 14, 20, 0.85)',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  fontFamily: 'Space Grotesk, sans-serif',
                  lineHeight: 1,
                  marginBottom: '0.45rem',
                }}
              >
                {stat.value}
                <span style={{ color: '#EB0028' }}>{stat.suffix}</span>
              </div>
              <div style={{ fontSize: '0.84rem', color: '#D1D5DB', fontWeight: 600 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
