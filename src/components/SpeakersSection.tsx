import React, { useState } from 'react';
import { Mic2, Clock, Sparkles, ArrowRight, UserCheck } from 'lucide-react';
import { SPEAKERS } from '../data/eventData';
import type { Speaker } from '../types';
import { SpeakerModal } from './SpeakerModal';

export const SpeakersSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);

  const categories = ['All', 'Tech & AI', 'Global Leadership', 'Creative Arts', 'Science & Health'];

  const filteredSpeakers = selectedCategory === 'All'
    ? SPEAKERS
    : SPEAKERS.filter(s => s.category === selectedCategory);

  return (
    <section id="speakers" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Mic2 size={14} />
            <span>Visionaries & Thought Leaders</span>
          </div>
          <h2 className="section-title">
            The Voices of <span className="highlight">Transcendence</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Meet the pioneering researchers, innovators, cultural icons, and youth catalysts taking the TEDxTopfaithUniversity stage to challenge assumptions and unveil boundary-breaking ideas.
          </p>
        </div>

        {/* Category Filters */}
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
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.55rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
                backgroundColor: selectedCategory === cat ? '#EB0028' : 'rgba(255, 255, 255, 0.05)',
                color: selectedCategory === cat ? '#FFFFFF' : '#9CA3AF',
                border: selectedCategory === cat ? '1px solid #EB0028' : '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: selectedCategory === cat ? '0 0 20px rgba(235, 0, 40, 0.4)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Speakers Grid */}
        <div className="grid-3" style={{ gap: '2rem', marginBottom: '4rem' }}>
          {filteredSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="glass-card"
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onClick={() => setActiveSpeaker(speaker)}
            >
              <div>
                {/* Speaker Photo */}
                <div
                  style={{
                    position: 'relative',
                    height: '280px',
                    width: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Gradient Bottom Fade */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(18, 18, 24, 1) 0%, rgba(18, 18, 24, 0.4) 40%, transparent 100%)',
                    }}
                  />

                  {/* Category Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '9999px',
                      background: 'rgba(6, 6, 8, 0.85)',
                      backdropFilter: 'blur(8px)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    <Sparkles size={11} color="#EB0028" />
                    <span>{speaker.category}</span>
                  </div>

                  {/* Talk Duration */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      right: '1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '6px',
                      background: 'rgba(235, 0, 40, 0.85)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                    }}
                  >
                    <Clock size={11} />
                    <span>{speaker.talkDuration}</span>
                  </div>
                </div>

                {/* Speaker Card Content */}
                <div style={{ padding: '1.5rem 1.75rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                    {speaker.name}
                  </h3>
                  <div style={{ fontSize: '0.86rem', color: '#EB0028', fontWeight: 600, marginBottom: '0.2rem' }}>
                    {speaker.role}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#9CA3AF', marginBottom: '1.25rem' }}>
                    {speaker.organization}
                  </div>

                  {/* Talk Title Preview */}
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    <div style={{ fontSize: '0.7rem', color: '#71717A', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.3rem' }}>
                      Talk Topic
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#E4E4E7', lineHeight: 1.4 }}>
                      "{speaker.topic}"
                    </div>
                  </div>
                </div>
              </div>

              {/* View Bio CTA */}
              <div
                style={{
                  padding: '1rem 1.75rem 1.5rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  color: '#EB0028',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                <span>Read Full Biography</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Student Speaker Auditions Callout */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(235, 0, 40, 0.12) 0%, rgba(18, 18, 24, 0.9) 100%)',
            border: '1px solid rgba(235, 0, 40, 0.3)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <div style={{ maxWidth: '650px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#EB0028', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              <UserCheck size={16} />
              <span>TOPFAITH STUDENT & FACULTY SPOTLIGHT</span>
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Do you have an idea worth spreading?
            </h3>
            <p style={{ color: '#A1A1AA', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Student and faculty speaker auditions are currently open for the 2026 Transcend roster. Submit your 3-minute video pitch to our curatorial board.
            </p>
          </div>

          <a
            href="mailto:curators@tedxtopfaithuni.com?subject=Student%20Speaker%20Pitch%20-%20TEDxTopfaithUniversity"
            className="btn btn-primary"
            style={{ padding: '0.85rem 1.75rem' }}
          >
            <span>Submit Your Pitch</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Speaker Detail Modal */}
      <SpeakerModal speaker={activeSpeaker} onClose={() => setActiveSpeaker(null)} />
    </section>
  );
};
