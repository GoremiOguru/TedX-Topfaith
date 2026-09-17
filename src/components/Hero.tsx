import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Play, Sparkles, Flame } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface HeroProps {
  onOpenRegister: () => void;
  onExploreSpeakers: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onExploreSpeakers }) => {
  // Live Countdown Timer
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
        paddingTop: '7.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Cinematic Dark Gradient Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('/background_image.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.38,
          transform: 'scale(1.03)',
          transition: 'transform 10s ease-out',
          zIndex: 0,
        }}
      />

      {/* Multi-layered cinematic gradient overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(to bottom, rgba(6, 6, 8, 0.75) 0%, rgba(6, 6, 8, 0.88) 60%, rgba(6, 6, 8, 1) 100%),
            radial-gradient(circle at 50% 30%, rgba(235, 0, 40, 0.22) 0%, transparent 65%),
            radial-gradient(circle at 10% 80%, rgba(0, 0, 0, 0.8) 0%, transparent 70%)
          `,
          zIndex: 1,
        }}
      />

      {/* Subtle stage spotlight beam */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(235, 0, 40, 0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Top Badge */}
        <div style={{ display: 'inline-flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div className="section-badge" style={{ gap: '0.6rem' }}>
            <Flame size={15} color="#EB0028" />
            <span>Official TEDx Event &bull; Topfaith University</span>
          </div>
        </div>

        {/* Main Logo & Theme Lockup */}
        <div style={{ marginBottom: '1.25rem' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textShadow: '0 4px 30px rgba(0,0,0,0.8)',
            }}
          >
            TRANSCEND
          </h1>
          <div
            style={{
              fontSize: 'clamp(1.2rem, 3.5vw, 2.2rem)',
              fontWeight: 700,
              color: '#EB0028',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginTop: '0.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              textShadow: '0 0 25px rgba(235, 0, 40, 0.5)',
            }}
          >
            <span>Moving Local to Global</span>
          </div>
        </div>

        {/* Description / Mission */}
        <p
          style={{
            maxWidth: '780px',
            margin: '0 auto 2.5rem auto',
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            color: '#D1D5DB',
            lineHeight: 1.65,
            fontWeight: 400,
            textShadow: '0 2px 10px rgba(0,0,0,0.7)',
          }}
        >
          {EVENT_DETAILS.description}
        </p>

        {/* Event Key Meta Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(12px)',
              padding: '0.65rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.92rem',
              color: '#F3F4F6',
            }}
          >
            <Calendar size={18} color="#EB0028" />
            <span style={{ fontWeight: 600 }}>{EVENT_DETAILS.date}</span>
            <span style={{ color: '#9CA3AF' }}>&bull; {EVENT_DETAILS.time}</span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(12px)',
              padding: '0.65rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.92rem',
              color: '#F3F4F6',
            }}
          >
            <MapPin size={18} color="#EB0028" />
            <span style={{ fontWeight: 600 }}>{EVENT_DETAILS.venue.name}</span>
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
            <span>Reserve Your Delegate Seat</span>
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
            <Play size={16} fill="white" />
            <span>Discover Speakers</span>
          </button>
        </div>

        {/* Live Countdown Timer Grid */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            background: 'rgba(12, 12, 16, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.09)',
            borderRadius: '1.25rem',
            backdropFilter: 'blur(16px)',
            padding: '1.5rem 1.75rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(235, 0, 40, 0.1)',
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
            <span>Countdown to the Red Dot Stage</span>
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
