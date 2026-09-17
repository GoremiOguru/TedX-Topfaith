import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Play, Sparkles, Flame, Users, Clock } from 'lucide-react';
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
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
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
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '8rem',
        paddingBottom: '5.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Cinematic Dark Masking */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('/background_image.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.38,
          transform: 'scale(1.02)',
          zIndex: 0,
        }}
      />

      {/* Multi-layered cinematic gradient overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(to bottom, rgba(6, 6, 9, 0.75) 0%, rgba(6, 6, 9, 0.9) 60%, rgba(6, 6, 9, 1) 100%),
            radial-gradient(circle at 50% 25%, rgba(235, 0, 40, 0.24) 0%, transparent 65%),
            radial-gradient(circle at 15% 85%, rgba(0, 0, 0, 0.85) 0%, transparent 70%)
          `,
          zIndex: 1,
        }}
      />

      {/* Stage spotlight glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(235, 0, 40, 0.2) 0%, transparent 70%)',
          filter: 'blur(70px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Top Badges */}
        <div style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.65rem', marginBottom: '1.5rem' }}>
          <div className="section-badge" style={{ gap: '0.5rem', margin: 0 }}>
            <Flame size={14} color="#EB0028" />
            <span>Official TEDx Event &bull; Topfaith University</span>
          </div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 0.9rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFD700',
            }}
          >
            <Users size={13} color="#FFD700" />
            <span>Strictly 200 Exclusive Seats</span>
          </div>
        </div>

        {/* Theme Title Lockup */}
        <div style={{ marginBottom: '1.25rem' }}>
          <h1
            style={{
              fontSize: 'clamp(2.75rem, 8vw, 5.8rem)',
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textShadow: '0 4px 35px rgba(0,0,0,0.85)',
            }}
          >
            TRANSCEND
          </h1>
          <div
            style={{
              fontSize: 'clamp(1.2rem, 3.8vw, 2.35rem)',
              fontWeight: 800,
              color: '#EB0028',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginTop: '0.45rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              textShadow: '0 0 30px rgba(235, 0, 40, 0.55)',
            }}
          >
            <span>Moving Local to Global</span>
          </div>
        </div>

        {/* Subtitle / Description */}
        <p
          style={{
            maxWidth: '780px',
            margin: '0 auto 2.5rem auto',
            fontSize: 'clamp(1.02rem, 1.8vw, 1.25rem)',
            color: '#D1D5DB',
            lineHeight: 1.65,
            fontWeight: 400,
            textShadow: '0 2px 10px rgba(0,0,0,0.7)',
          }}
        >
          {EVENT_DETAILS.description}
        </p>

        {/* Key Event Metadata Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(12px)',
              padding: '0.65rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.92rem',
              color: '#F3F4F6',
            }}
          >
            <Calendar size={17} color="#EB0028" />
            <span style={{ fontWeight: 700 }}>{EVENT_DETAILS.dateFormatted}</span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(12px)',
              padding: '0.65rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.92rem',
              color: '#F3F4F6',
            }}
          >
            <Clock size={17} color="#EB0028" />
            <span style={{ fontWeight: 600 }}>{EVENT_DETAILS.time}</span>
            <span style={{ color: '#9CA3AF', fontSize: '0.82rem' }}>({EVENT_DETAILS.durationText})</span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(12px)',
              padding: '0.65rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.92rem',
              color: '#F3F4F6',
            }}
          >
            <MapPin size={17} color="#EB0028" />
            <span style={{ fontWeight: 700 }}>{EVENT_DETAILS.venue.name}</span>
            <span style={{ color: '#9CA3AF' }}>&bull; {EVENT_DETAILS.venue.institution}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3.5rem',
          }}
        >
          <button
            onClick={onOpenRegister}
            className="btn btn-primary"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.05rem',
              fontWeight: 700,
            }}
          >
            <span>Reserve Delegate Pass</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onExploreSpeakers}
            className="btn btn-secondary"
            style={{
              padding: '1rem 2rem',
              fontSize: '1.02rem',
              fontWeight: 600,
            }}
          >
            <Play size={15} fill="white" />
            <span>Speaker Unveils</span>
          </button>
        </div>

        {/* Live Countdown Grid to Nov 21 */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            background: 'rgba(12, 12, 16, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '1.25rem',
            backdropFilter: 'blur(16px)',
            padding: '1.5rem 1.75rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65), 0 0 35px rgba(235, 0, 40, 0.12)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '0.82rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#9CA3AF',
              marginBottom: '1rem',
            }}
          >
            <Sparkles size={14} color="#EB0028" />
            <span>Countdown to November 21st, 2026</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
            }}
          >
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '0.85rem',
                  padding: '0.85rem 0.5rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: '#EB0028',
                    marginTop: '0.4rem',
                  }}
                >
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
