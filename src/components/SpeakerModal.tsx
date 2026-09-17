import React from 'react';
import { X, Clock, Sparkles, Quote, ExternalLink, Mic } from 'lucide-react';
import type { Speaker } from '../types';

interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
}

export const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, onClose }) => {
  if (!speaker) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card"
        style={{
          maxWidth: '750px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'rgba(15, 15, 20, 0.96)',
          border: '1px solid rgba(235, 0, 40, 0.35)',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 50px rgba(235, 0, 40, 0.2)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Header Layout */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              position: 'relative',
              width: '140px',
              height: '140px',
              borderRadius: '20px',
              overflow: 'hidden',
              flexShrink: 0,
              border: '2px solid rgba(235, 0, 40, 0.5)',
              boxShadow: '0 10px 30px rgba(235, 0, 40, 0.3)',
            }}
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1, minWidth: '240px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#EB0028',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.4rem',
              }}
            >
              <Sparkles size={13} />
              <span>{speaker.category}</span>
            </div>

            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '0.35rem' }}>
              {speaker.name}
            </h2>

            <div style={{ fontSize: '0.95rem', color: '#D1D5DB', fontWeight: 500, marginBottom: '0.2rem' }}>
              {speaker.role}
            </div>

            <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>
              {speaker.organization}
            </div>
          </div>
        </div>

        {/* Talk Details Box */}
        <div
          style={{
            background: 'rgba(235, 0, 40, 0.07)',
            border: '1px solid rgba(235, 0, 40, 0.25)',
            borderRadius: '1rem',
            padding: '1.5rem',
            marginBottom: '1.75rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#EB0028', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase' }}>
              <Mic size={15} />
              <span>OFFICIAL TALK TOPIC</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#9CA3AF', fontSize: '0.82rem' }}>
              <Clock size={13} />
              <span>{speaker.talkDuration}</span>
            </div>
          </div>

          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.35, marginBottom: '0.75rem' }}>
            "{speaker.topic}"
          </div>

          <div style={{ fontSize: '0.88rem', color: '#E4E4E7', lineHeight: 1.6 }}>
            <strong style={{ color: '#FF4A61' }}>Core Takeaway: </strong>
            {speaker.keyTakeaway}
          </div>
        </div>

        {/* Speaker Biography */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.65rem' }}>
            About the Speaker
          </h4>
          <p style={{ fontSize: '0.95rem', color: '#A1A1AA', lineHeight: 1.7 }}>
            {speaker.bio}
          </p>
        </div>

        {/* Speaker Quote */}
        {speaker.quote && (
          <div
            style={{
              padding: '1.25rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.03)',
              borderLeft: '3px solid #EB0028',
              borderRadius: '0 0.75rem 0.75rem 0',
              fontStyle: 'italic',
              color: '#F4F4F5',
              fontSize: '0.92rem',
              lineHeight: 1.6,
            }}
          >
            "{speaker.quote}"
          </div>
        )}
      </div>
    </div>
  );
};
