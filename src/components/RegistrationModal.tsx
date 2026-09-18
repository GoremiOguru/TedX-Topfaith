import React, { useState } from 'react';
import { X, Ticket, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TICKET_TIERS, EVENT_DETAILS } from '../data/eventData';
import type { RegistrationFormData } from '../types';
import { TicketBadge } from './TicketBadge';

interface RegistrationModalProps {
  isOpen: boolean;
  initialTierId?: string;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  initialTierId,
  onClose,
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>(
    initialTierId || 'student-pass'
  );
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    role: 'Student',
    institution: 'Topfaith University',
    tier: selectedTierId,
    motivation: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const selectedTier = TICKET_TIERS.find((t) => t.id === selectedTierId) || TICKET_TIERS[0];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.institution.trim()) newErrors.institution = 'Institution / Organization is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomCode = 'TEDX-TU-' + Math.random().toString(36).substring(2, 7).toUpperCase();
    setTicketId(randomCode);
    setIsSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#EB0028', '#FFFFFF', '#00C853', '#FFD700'],
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card modal-container"
        style={{
          width: '100%',
          maxWidth: '640px',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: 'rgba(12, 12, 16, 0.98)',
          border: '1px solid rgba(235, 0, 40, 0.4)',
          padding: '1.75rem 1.25rem',
          position: 'relative',
          borderRadius: '1.25rem 1.25rem 0 0',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          <TicketBadge
            data={formData}
            ticketId={ticketId}
            tierName={selectedTier.name}
            tierColor={selectedTier.color}
            onClose={onClose}
          />
        ) : (
          <div>
            {/* Modal Header */}
            <div style={{ marginBottom: '1.5rem', paddingRight: '2rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#EB0028', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                <Ticket size={13} />
                <span>OFFICIAL REGISTRATION &bull; LIMITED PASSES</span>
              </div>
              <h2 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
                Reserve Your Pass
              </h2>
              <p style={{ color: '#9CA3AF', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                {EVENT_DETAILS.dateFormatted} &bull; {EVENT_DETAILS.venue.name}
              </p>
            </div>

            {/* Step 1: Select Tier (Stacked for Mobile) */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#E4E4E7', marginBottom: '0.65rem' }}>
                Select Pass Option:
              </label>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {TICKET_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => {
                      setSelectedTierId(tier.id);
                      setFormData({ ...formData, tier: tier.id });
                    }}
                    style={{
                      padding: '1rem',
                      borderRadius: '12px',
                      textAlign: 'left',
                      background: selectedTierId === tier.id ? 'rgba(235, 0, 40, 0.16)' : 'rgba(255, 255, 255, 0.04)',
                      border: selectedTierId === tier.id ? '2px solid #EB0028' : '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>
                        {tier.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#9CA3AF', marginTop: '0.15rem' }}>
                        {tier.badge}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#EB0028', fontFamily: 'Space Grotesk' }}>
                        {tier.currency}{tier.price.toLocaleString()}
                      </div>
                      {selectedTierId === tier.id && (
                        <span style={{ fontSize: '0.68rem', color: '#00C853', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
                          <Check size={11} /> Selected
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Form Inputs */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 0.95rem',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: errors.fullName ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                />
                {errors.fullName && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.fullName}</div>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 0.95rem',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: errors.email ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                />
                {errors.email && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.email}</div>}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+234 800 000 0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 0.95rem',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: errors.phone ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    outline: 'none',
                  }}
                />
                {errors.phone && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.phone}</div>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                    Attendee Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 0.95rem',
                      background: '#121218',
                      border: '1px solid rgba(255, 255, 255, 0.14)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      fontSize: '16px',
                      outline: 'none',
                    }}
                  >
                    <option value="Student">Topfaith Student</option>
                    <option value="Faculty">Faculty / Staff Member</option>
                    <option value="Professional">Industry Professional</option>
                    <option value="Executive">Corporate Executive / Leader</option>
                    <option value="Guest">Guest Delegate</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.35rem' }}>
                    Institution / University / Company *
                  </label>
                  <input
                    type="text"
                    placeholder="Topfaith University"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 0.95rem',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: errors.institution ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.14)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      fontSize: '16px',
                      outline: 'none',
                    }}
                  />
                  {errors.institution && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{errors.institution}</div>}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '0.95rem',
                  fontSize: '1rem',
                  fontWeight: 800,
                  marginTop: '0.5rem',
                }}
              >
                <Sparkles size={17} />
                <span>Confirm Pass ({selectedTier.currency}{selectedTier.price.toLocaleString()})</span>
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 640px) {
          .modal-container {
            padding: 2.5rem !important;
            border-radius: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
};
