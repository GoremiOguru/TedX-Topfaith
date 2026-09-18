import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight, Play, Flame, Users, Clock } from 'lucide-react';
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
        paddingTop: '6rem',
        paddingBottom: '3.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Luxury Cinematic Lighting & Ambient Halos */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(320px, 80vw, 850px)',
          height: 'clamp(280px, 50vw, 550px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(235, 0, 40, 0.22) 0%, rgba(235, 0, 40, 0.08) 45%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(235, 0, 40, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.04) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Top Badges */}
        <div style={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <div className="section-badge animate-float" style={{ margin: 0 }}>
            <Flame size={13} color="#EB0028" />
            <span>Official TEDx &bull; Topfaith Uni</span>
          </div>
          <div
            className="radar-ping"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              background: 'rgba(255, 215, 0, 0.12)',
              border: '1px solid rgba(255, 215, 0, 0.4)',
              color: '#FFD700',
            }}
          >
            <Users size={12} color="#FFD700" />
            <span>Exclusive Delegate Quota</span>
          </div>
        </div>

        {/* Theme Title */}
        <div style={{ marginBottom: '1rem' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 11vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textShadow: '0 4px 30px rgba(0,0,0,0.9)',
            }}
          >
            TRANSCEND
          </h1>
          <div
            style={{
              fontSize: 'clamp(1.05rem, 5vw, 2.2rem)',
              fontWeight: 800,
              color: '#EB0028',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginTop: '0.35rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              textShadow: '0 0 25px rgba(235, 0, 40, 0.6)',
            }}
          >
            <span>Exceeding Limitations</span>
          </div>
        </div>

        {/* Description / Mission */}
        <p
          style={{
            maxWidth: '720px',
            margin: '0 auto 1.75rem auto',
            fontSize: 'clamp(0.92rem, 3.5vw, 1.15rem)',
            color: '#D1D5DB',
            lineHeight: 1.55,
            fontWeight: 400,
          }}
        >
          {EVENT_DETAILS.description}
        </p>

        {/* Event Meta Pills (Stacked/Flexible on Mobile) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(10px)',
              padding: '0.55rem 0.95rem',
              borderRadius: '9999px',
              fontSize: '0.84rem',
              color: '#F3F4F6',
            }}
          >
            <Calendar size={15} color="#EB0028" />
            <span style={{ fontWeight: 700 }}>Sat, Nov 21, 2026</span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(10px)',
              padding: '0.55rem 0.95rem',
              borderRadius: '9999px',
              fontSize: '0.84rem',
              color: '#F3F4F6',
            }}
          >
            <Clock size={15} color="#EB0028" />
            <span style={{ fontWeight: 600 }}>9:00 AM &ndash; 12:00 PM</span>
          </div>

          <a
            href="#venue"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(10px)',
              padding: '0.55rem 0.95rem',
              borderRadius: '9999px',
              fontSize: '0.84rem',
              color: '#F3F4F6',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#EB0028';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.color = '#F3F4F6';
            }}
          >
            <MapPin size={15} color="#EB0028" />
            <span style={{ fontWeight: 700 }}>{EVENT_DETAILS.venue.name}</span>
          </a>
        </div>

        {/* Action Buttons (Full width on mobile) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            marginBottom: '2.5rem',
            maxWidth: '480px',
            margin: '0 auto 2.5rem auto',
          }}
          className="hero-buttons-container"
        >
          <button
            onClick={onOpenRegister}
            className="btn btn-primary"
            style={{
              padding: '0.95rem 1.5rem',
              fontSize: '1rem',
              fontWeight: 800,
            }}
          >
            <span>Reserve Seat (₦10,000)</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onExploreSpeakers}
            className="btn btn-secondary"
            style={{
              padding: '0.85rem 1.5rem',
              fontSize: '0.95rem',
              fontWeight: 600,
            }}
          >
            <Play size={14} fill="white" />
            <span>Explore Speaker Unveils</span>
          </button>
        </div>

        {/* Live Countdown Grid (Optimized for 360px+ screens) */}
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            background: 'rgba(12, 12, 16, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '1rem',
            backdropFilter: 'blur(16px)',
            padding: '1.25rem 0.85rem',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.7), 0 0 30px rgba(235, 0, 40, 0.12)',
          }}
        >
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#9CA3AF',
              marginBottom: '0.85rem',
            }}
          >
            COUNTDOWN TO SATURDAY, NOVEMBER 21ST
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.5rem',
            }}
          >
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINS', value: timeLeft.minutes },
              { label: 'SECS', value: timeLeft.seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '0.65rem',
                  padding: '0.65rem 0.25rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(1.4rem, 5vw, 2.2rem)',
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
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#EB0028',
                    marginTop: '0.3rem',
                  }}
                >
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .hero-buttons-container {
            flex-direction: row !important;
            justify-content: center !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
