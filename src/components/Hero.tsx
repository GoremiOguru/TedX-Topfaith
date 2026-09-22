import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Play, Flame, Sparkles, Clock } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface HeroProps {
  onOpenRegister: () => void;
  onExploreSpeakers: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onExploreSpeakers }) => {
  // Live Countdown Timer to Nov 21, 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(EVENT_DETAILS.isoDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="tedx-hero-section">
      {/* Immersive TED Stage Photo Background (what_the_hall_looks_like_part3.jpeg) */}
      <div className="tedx-hero-bg-container">
        <img
          src="/what_the_hall_looks_like_part3.jpeg"
          alt="TEDxTopfaithUniversity Law Auditorium Stage"
          className="tedx-hero-bg-image"
          fetchPriority="high"
          loading="eager"
        />

        {/* Cinematic Gradient Overlays: Clear on stage area (top/mid), dark only at bottom for typography */}
        <div className="tedx-hero-gradient-overlay" />
      </div>

      {/* Floating Stage Identifier Badge */}
      <div className="tedx-stage-tag">
        <span className="live-dot" />
        <span>THE LAW AUDITORIUM • TOPFAITH</span>
      </div>

      {/* Hero Content Container (Placed in the lower portion so the stage shines above) */}
      <div className="container tedx-hero-content-wrapper">
        <div className="tedx-hero-inner">
          
          {/* Top Badges */}
          <div className="tedx-hero-badges-row">
            <div className="section-badge" style={{ margin: 0 }}>
              <Flame size={12} color="#EB0028" />
              <span>Official TEDx Event</span>
            </div>
            <div className="tedx-hero-status-pill">
              <Sparkles size={11} color="#EB0028" />
              <span>Theme Unveiled</span>
            </div>
          </div>

          {/* Main Brand & Theme Heading */}
          <div className="tedx-hero-title-group">
            <h1 className="tedx-hero-main-title">
              TEDx<span className="brand-suffix">TopfaithUniversity</span>
            </h1>
            <div className="tedx-hero-theme-subtitle">
              <span className="theme-highlight">TRANSCEND</span>
              <span className="theme-dash">&mdash;</span>
              <span className="theme-tagline">Exceeding Limitations</span>
            </div>
          </div>

          {/* Subtitle / Mission */}
          <p className="tedx-hero-desc">
            Join visionary thinkers, innovators, and industry leaders at the Law Auditorium for ideas that challenge the boundaries of human potential.
          </p>

          {/* Event Meta Pills */}
          <div className="tedx-hero-meta-row">
            <div className="tedx-meta-item">
              <Calendar size={13} color="#EB0028" />
              <span>Sat, Nov 21, 2026</span>
            </div>
            <div className="tedx-meta-item">
              <Clock size={13} color="#EB0028" />
              <span>9:00 AM &ndash; 12:00 PM</span>
            </div>
            <a href="#venue" className="tedx-meta-item tedx-meta-interactive">
              <MapPin size={13} color="#EB0028" />
              <span>The Law Auditorium</span>
            </a>
          </div>

          {/* Action Buttons & Countdown */}
          <div className="tedx-hero-bottom-grid">
            <div className="tedx-hero-cta-buttons">
              <button
                onClick={onOpenRegister}
                className="btn btn-primary tedx-hero-primary-btn"
              >
                <span>Reserve Pass (From ₦10,000)</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onExploreSpeakers}
                className="btn btn-secondary tedx-hero-secondary-btn"
              >
                <Play size={12} fill="white" />
                <span>Explore Speakers</span>
              </button>
            </div>

            {/* Compact Countdown Bar */}
            <div className="tedx-hero-countdown-strip">
              <div className="countdown-label">
                <span className="live-dot" />
                <span>COUNTDOWN</span>
              </div>
              <div className="countdown-digits-wrapper">
                {[
                  { label: 'D', value: timeLeft.days },
                  { label: 'H', value: timeLeft.hours },
                  { label: 'M', value: timeLeft.minutes },
                  { label: 'S', value: timeLeft.seconds },
                ].map((unit) => (
                  <div key={unit.label} className="countdown-digit-pill">
                    <span className="digit-val">{String(unit.value).padStart(2, '0')}</span>
                    <span className="digit-unit">{unit.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .tedx-hero-section {
          position: relative;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-top: clamp(330px, 56vh, 480px); /* Unveils the speaker carpet and 3D letters on mobile */
          padding-bottom: 2.25rem;
          overflow: hidden;
          background-color: #060608;
        }

        @media (min-width: 900px) {
          .tedx-hero-section {
            min-height: 105vh;
            padding-top: 55vh; /* Places entire hero block right below the 3D stage letters */
            padding-bottom: 3.25rem;
          }
        }

        .tedx-hero-bg-container {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }

        .tedx-hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top; /* Keeps the projector screen, stage lights, & red carpet in crisp focus */
          display: block;
          filter: contrast(1.08) brightness(0.98);
          transform: scale(1.01);
        }

        @media (min-width: 900px) {
          .tedx-hero-bg-image {
            object-position: center 3%;
          }
        }

        /* Gradient overlay: Crystal clear across projector screen, stage floor, & speaker red carpet, darkening where text sits */
        .tedx-hero-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(6, 6, 9, 0.35) 0%,
            rgba(6, 6, 9, 0) 12%,
            rgba(6, 6, 9, 0.04) 44%,
            rgba(6, 6, 9, 0.76) 56%,
            rgba(6, 6, 9, 0.98) 74%,
            #060608 100%
          );
          pointer-events: none;
        }

        .tedx-stage-tag {
          position: absolute;
          top: 4.8rem;
          right: 1.25rem;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(6, 6, 9, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #F4F4F5;
          z-index: 2;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
        }

        @media (max-width: 640px) {
          .tedx-stage-tag {
            top: 4.5rem;
            right: 0.75rem;
            font-size: 0.62rem;
            padding: 0.25rem 0.6rem;
          }
        }

        .tedx-hero-content-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .tedx-hero-inner {
          max-width: 860px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .tedx-hero-badges-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 0.6rem;
        }

        .tedx-hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 700;
          background: rgba(235, 0, 40, 0.15);
          border: 1px solid rgba(235, 0, 40, 0.4);
          color: #FFFFFF;
        }

        .tedx-hero-title-group {
          margin-bottom: 0.65rem;
        }

        .tedx-hero-main-title {
          font-size: clamp(2rem, 6.5vw, 4.2rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: #FFFFFF;
          text-transform: none;
          text-shadow: 0 4px 25px rgba(0, 0, 0, 0.95), 0 0 35px rgba(0, 0, 0, 0.85);
        }

        .brand-suffix {
          font-weight: 800;
          color: #FFFFFF;
        }

        .tedx-hero-theme-subtitle {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.4rem 0.55rem;
          margin-top: 0.35rem;
          font-size: clamp(0.95rem, 3.2vw, 1.55rem);
          font-weight: 800;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .theme-highlight {
          color: #EB0028;
          text-shadow: 0 0 20px rgba(235, 0, 40, 0.6);
        }

        .theme-dash {
          color: rgba(255, 255, 255, 0.4);
          font-weight: 400;
        }

        .theme-tagline {
          color: #FFFFFF;
        }

        .tedx-hero-desc {
          font-size: clamp(0.86rem, 2vw, 1.05rem);
          color: #D1D5DB;
          line-height: 1.5;
          margin-bottom: 1.15rem;
          max-width: 620px;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.95);
        }

        .tedx-hero-meta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 1.4rem;
        }

        .tedx-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(18, 18, 24, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0.38rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #F4F4F5;
        }

        .tedx-meta-interactive {
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .tedx-meta-interactive:hover {
          border-color: #EB0028;
          background: rgba(235, 0, 40, 0.2);
        }

        .tedx-hero-bottom-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        @media (min-width: 768px) {
          .tedx-hero-bottom-grid {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .tedx-hero-cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          width: 100%;
        }

        @media (min-width: 480px) {
          .tedx-hero-cta-buttons {
            flex-direction: row;
            width: auto;
          }
        }

        .tedx-hero-primary-btn {
          padding: 0.8rem 1.35rem;
          font-size: 0.92rem;
          font-weight: 800;
          border-radius: 9999px;
        }

        .tedx-hero-secondary-btn {
          padding: 0.8rem 1.25rem;
          font-size: 0.88rem;
          font-weight: 600;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .tedx-hero-countdown-strip {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: rgba(14, 14, 20, 0.85);
          border: 1px solid rgba(235, 0, 40, 0.35);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0.35rem 0.7rem;
          border-radius: 9999px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6), 0 0 20px rgba(235, 0, 40, 0.15);
          width: fit-content;
        }

        .countdown-label {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #A1A1AA;
        }

        .countdown-digits-wrapper {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .countdown-digit-pill {
          display: flex;
          align-items: baseline;
          gap: 2px;
          background: rgba(255, 255, 255, 0.06);
          padding: 0.18rem 0.4rem;
          border-radius: 0.35rem;
        }

        .digit-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.9rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1;
        }

        .digit-unit {
          font-size: 0.58rem;
          font-weight: 700;
          color: #EB0028;
        }
      `}</style>
    </section>
  );
};
