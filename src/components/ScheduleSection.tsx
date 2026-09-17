import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Coffee, Mic, Sparkles, Users, Award } from 'lucide-react';
import { SCHEDULE_ITEMS } from '../data/eventData';

export const ScheduleSection: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('All');

  const periods = ['All', 'Morning', 'Midday', 'Afternoon', 'Evening'];

  const filteredSchedule = selectedPeriod === 'All'
    ? SCHEDULE_ITEMS
    : SCHEDULE_ITEMS.filter(item => item.period === selectedPeriod);

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
        return { label: 'Keynote Address', bg: 'rgba(235, 0, 40, 0.15)', text: '#FF4A61' };
      case 'talk':
        return { label: 'TEDx Talk', bg: 'rgba(235, 0, 40, 0.15)', text: '#FF4A61' };
      case 'performance':
        return { label: 'Live Performance', bg: 'rgba(255, 51, 75, 0.15)', text: '#FF8093' };
      case 'break':
        return { label: 'Networking & Lunch', bg: 'rgba(0, 200, 83, 0.15)', text: '#69F0AE' };
      default:
        return { label: 'Interactive Panel', bg: 'rgba(59, 130, 246, 0.15)', text: '#93C5FD' };
    }
  };

  return (
    <section id="schedule" className="section-padding" style={{ position: 'relative', background: 'rgba(8, 8, 12, 0.6)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Calendar size={14} />
            <span>Event Agenda & Flow</span>
          </div>
          <h2 className="section-title">
            The Flow of <span className="highlight">Inspiration</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A meticulously designed single-day journey through thought-provoking presentations, immersive cultural showcases, and high-impact delegate networking.
          </p>
        </div>

        {/* Period Filter Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3.5rem',
          }}
        >
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => setSelectedPeriod(p)}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
                backgroundColor: selectedPeriod === p ? '#EB0028' : 'rgba(255, 255, 255, 0.05)',
                color: selectedPeriod === p ? '#FFFFFF' : '#9CA3AF',
                border: selectedPeriod === p ? '1px solid #EB0028' : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: selectedPeriod === p ? '0 0 20px rgba(235, 0, 40, 0.35)' : 'none',
              }}
            >
              {p === 'All' ? 'Full Day Program' : `${p} Session`}
            </button>
          ))}
        </div>

        {/* Timeline Stack */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {filteredSchedule.map((item) => {
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

                {/* Speaker tag if any */}
                {item.speaker && (
                  <div style={{ fontSize: '0.88rem', color: '#E4E4E7', fontWeight: 600 }}>
                    Featured: <span style={{ color: '#FF4A61' }}>{item.speaker}</span>
                    {item.speakerRole && <span style={{ color: '#9CA3AF', fontWeight: 400 }}> &bull; {item.speakerRole}</span>}
                  </div>
                )}

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
