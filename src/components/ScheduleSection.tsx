import React from 'react';
import { Calendar, Clock, MapPin, Coffee, Mic, Sparkles, Users, Award } from 'lucide-react';
import { SCHEDULE_ITEMS, EVENT_DETAILS } from '../data/eventData';

export const ScheduleSection: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'keynote':
        return <Award size={16} color="#EB0028" />;
      case 'talk':
        return <Mic size={16} color="#EB0028" />;
      case 'performance':
        return <Sparkles size={16} color="#FF334B" />;
      case 'break':
        return <Coffee size={16} color="#00C853" />;
      default:
        return <Users size={16} color="#3B82F6" />;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'keynote':
        return { label: 'Opening Address', bg: 'rgba(235, 0, 40, 0.15)', text: '#FF4A61' };
      case 'talk':
        return { label: 'TEDx Talk Block', bg: 'rgba(235, 0, 40, 0.15)', text: '#FF4A61' };
      case 'performance':
        return { label: 'Live Sonic Arts', bg: 'rgba(255, 51, 75, 0.15)', text: '#FF8093' };
      case 'break':
        return { label: 'Refreshments', bg: 'rgba(0, 200, 83, 0.15)', text: '#69F0AE' };
      default:
        return { label: 'Delegation Networking', bg: 'rgba(59, 130, 246, 0.15)', text: '#93C5FD' };
    }
  };

  return (
    <section id="schedule" className="section-padding" style={{ position: 'relative', background: 'rgba(8, 8, 12, 0.65)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Calendar size={14} />
            <span>Event Agenda &bull; 9:00 AM &ndash; 12:00 PM</span>
          </div>
          <h2 className="section-title">
            The Flow of <span className="highlight">Transcendence</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A concentrated 3-hour power journey on {EVENT_DETAILS.dateFormatted} inside {EVENT_DETAILS.venue.name}, maximizing every minute for high-impact talks, artistic performances, and executive networking.
          </p>
        </div>

        {/* Timeline Stack */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {SCHEDULE_ITEMS.map((item) => {
            const badge = getTypeBadge(item.type);
            return (
              <div
                key={item.id}
                className="glass-card"
                style={{
                  padding: '1.75rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* Meta Header */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#EB0028',
                        background: 'rgba(235, 0, 40, 0.1)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(235, 0, 40, 0.25)',
                      }}
                    >
                      <Clock size={13} />
                      <span>{item.time}</span>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px',
                        backgroundColor: badge.bg,
                        color: badge.text,
                      }}
                    >
                      {getTypeIcon(item.type)}
                      <span>{badge.label}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: '#9CA3AF' }}>
                    <MapPin size={13} color="#EB0028" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Session Title */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>
                  {item.title}
                </h3>

                {/* Session Description */}
                <p style={{ color: '#A1A1AA', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
