import React from 'react';
import { Calendar, MapPin, Sparkles, CheckCircle2, Printer, Clock } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';
import type { RegistrationFormData } from '../types';

interface TicketBadgeProps {
  data: RegistrationFormData;
  ticketId: string;
  tierName: string;
  tierColor: string;
  onClose: () => void;
}

export const TicketBadge: React.FC<TicketBadgeProps> = ({
  data,
  ticketId,
  tierName,
  tierColor,
  onClose,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
      {/* Success Banner */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(0, 200, 83, 0.15)',
            border: '2px solid #00C853',
            color: '#00C853',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem auto',
          }}
        >
          <CheckCircle2 size={32} />
        </div>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.35rem' }}>
          Seat Reserved!
        </h3>
        <p style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>
          Your official delegate pass has been generated. Please save or screenshot this badge for check-in at The Law Auditorium.
        </p>
      </div>

      {/* The Printable Digital Pass Card */}
      <div
        id="printable-ticket"
        style={{
          width: '100%',
          maxWidth: '440px',
          background: 'linear-gradient(145deg, #121218 0%, #08080C 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.85), 0 0 30px rgba(235, 0, 40, 0.25)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Pass Top Bar */}
        <div
          style={{
            background: `linear-gradient(90deg, ${tierColor} 0%, #EB0028 100%)`,
            padding: '0.65rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFFFFF' }}>
            OFFICIAL DELEGATE PASS &bull; 200 SEAT QUOTA
          </span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, background: 'rgba(0,0,0,0.4)', padding: '0.2rem 0.55rem', borderRadius: '9999px', color: '#FFFFFF' }}>
            {tierName}
          </span>
        </div>

        {/* Pass Body */}
        <div style={{ padding: '1.75rem' }}>
          {/* Header Branding */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img src="/logo.png" alt="Topfaith Logo" style={{ height: '32px', width: 'auto' }} />
              <div className="ted-logo-wrap">
                <div className="ted-logo-main" style={{ fontSize: '1.2rem' }}>
                  <span className="ted-red">TED</span>
                  <span className="ted-x">x</span>
                  <span className="ted-event-name" style={{ fontSize: '1.05rem' }}>TopfaithUni</span>
                </div>
                <span className="ted-tagline" style={{ fontSize: '0.5rem' }}>independently organized TED event</span>
              </div>
            </div>
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: '#EB0028',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: '0.85rem',
                boxShadow: '0 0 15px rgba(235, 0, 40, 0.6)',
              }}
            >
              x
            </div>
          </div>

          {/* Theme Tag */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#EB0028', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              THEME
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF' }}>
              {EVENT_DETAILS.fullTheme}
            </div>
          </div>

          {/* Attendee Info */}
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '12px', padding: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.68rem', color: '#71717A', textTransform: 'uppercase', fontWeight: 600 }}>
              Attendee Name
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.3rem' }}>
              {data.fullName}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#A1A1AA' }}>
              <span>{data.role} &bull; {data.institution}</span>
            </div>
          </div>

          {/* Event Specs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem', fontSize: '0.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#D1D5DB' }}>
              <Calendar size={13} color="#EB0028" />
              <span>{EVENT_DETAILS.dateFormatted}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#D1D5DB' }}>
              <Clock size={13} color="#EB0028" />
              <span>{EVENT_DETAILS.time}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#D1D5DB', gridColumn: 'span 2' }}>
              <MapPin size={13} color="#EB0028" />
              <span>{EVENT_DETAILS.venue.name}, {EVENT_DETAILS.venue.institution}</span>
            </div>
          </div>

          {/* Perforated Divider */}
          <div
            style={{
              position: 'relative',
              margin: '0 -1.75rem 1.25rem -1.75rem',
              borderTop: '2px dashed rgba(255, 255, 255, 0.15)',
            }}
          >
            <div style={{ position: 'absolute', left: '-12px', top: '-10px', width: '20px', height: '20px', borderRadius: '50%', background: '#0E0E12' }} />
            <div style={{ position: 'absolute', right: '-12px', top: '-10px', width: '20px', height: '20px', borderRadius: '50%', background: '#0E0E12' }} />
          </div>

          {/* QR Code Simulation & Ticket ID */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#71717A', textTransform: 'uppercase', fontWeight: 700 }}>
                PASS CODE / TICKET ID
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#EB0028', fontFamily: 'monospace' }}>
                {ticketId}
              </div>
              <div style={{ fontSize: '0.72rem', color: '#00C853', marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Sparkles size={11} />
                <span>Verified 200 Quota Entry</span>
              </div>
            </div>

            {/* Custom SVG QR Code Generator */}
            <div
              style={{
                width: '72px',
                height: '72px',
                background: '#FFFFFF',
                borderRadius: '8px',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                <rect x="0" y="0" width="30" height="30" fill="#000000" />
                <rect x="5" y="5" width="20" height="20" fill="#FFFFFF" />
                <rect x="9" y="9" width="12" height="12" fill="#EB0028" />

                <rect x="70" y="0" width="30" height="30" fill="#000000" />
                <rect x="75" y="5" width="20" height="20" fill="#FFFFFF" />
                <rect x="79" y="9" width="12" height="12" fill="#000000" />

                <rect x="0" y="70" width="30" height="30" fill="#000000" />
                <rect x="5" y="75" width="20" height="20" fill="#FFFFFF" />
                <rect x="9" y="79" width="12" height="12" fill="#000000" />

                <rect x="38" y="10" width="8" height="8" fill="#000000" />
                <rect x="52" y="15" width="8" height="8" fill="#000000" />
                <rect x="42" y="42" width="16" height="16" fill="#EB0028" />
                <rect x="15" y="45" width="8" height="8" fill="#000000" />
                <rect x="75" y="45" width="12" height="8" fill="#000000" />
                <rect x="68" y="72" width="10" height="10" fill="#000000" />
                <rect x="45" y="78" width="8" height="14" fill="#000000" />
                <rect x="85" y="85" width="10" height="10" fill="#000000" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '440px' }}>
        <button
          onClick={handlePrint}
          className="btn btn-secondary"
          style={{ flex: 1, padding: '0.75rem', fontSize: '0.9rem' }}
        >
          <Printer size={16} />
          <span>Print Pass</span>
        </button>

        <button
          onClick={onClose}
          className="btn btn-primary"
          style={{ flex: 1, padding: '0.75rem', fontSize: '0.9rem' }}
        >
          <span>Done</span>
        </button>
      </div>
    </div>
  );
};
