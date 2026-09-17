import React, { useState } from 'react';
import { X, Ticket, Sparkles, Check, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TICKET_TIERS } from '../data/eventData';
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
    initialTierId || 'standard-delegate'
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

  const selectedTier = TICKET_TIERS.find((t) => t.id === selectedTierId) || TICKET_TIERS[1];

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

    // Generate unique TEDx Ticket ID
    const randomCode = 'TEDX-TU-' + Math.random().toString(36).substring(2, 7).toUpperCase();
    setTicketId(randomCode);
    setIsSubmitted(true);

    // Trigger celebration confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#EB0028', '#FFFFFF', '#00C853', '#FFD700'],
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card"
        style={{
          maxWidth: '680px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          background: 'rgba(12, 12, 16, 0.98)',
          border: '1px solid rgba(235, 0, 40, 0.35)',
          padding: '2.5rem',
          position: 'relative',
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
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
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
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#EB0028', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                <Ticket size={14} />
                <span>OFFICIAL REGISTRATION PORTAL</span>
              </div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
                Reserve Your Delegate Seat
              </h2>
              <p style={{ color: '#9CA3AF', fontSize: '0.92rem', marginTop: '0.25rem' }}>
                Join 1,200+ leaders and thinkers at Topfaith University Law Auditorium.
              </p>
            </div>

            {/* Step 1: Select Tier */}
            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#E4E4E7', marginBottom: '0.75rem' }}>
                Select Your Access Pass:
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                {TICKET_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTierId(tier.id)}
                    style={{
                      padding: '1rem',
                      borderRadius: '12px',
                      textAlign: 'left',
                      background: selectedTierId === tier.id ? 'rgba(235, 0, 40, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      border: selectedTierId === tier.id ? '2px solid #EB0028' : '1px solid rgba(255, 255, 255, 0.08)',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                    }}
                  >
                    {selectedTierId === tier.id && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '0.5rem',
                          right: '0.5rem',
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: '#EB0028',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
                        }}
                      >
                        <Check size={12} />
                      </div>
                    )}
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>
                      {tier.name}
                    </div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#EB0028', marginTop: '0.25rem', fontFamily: 'Space Grotesk' }}>
                      {tier.price === 0 ? 'FREE' : `${tier.currency}${tier.price.toLocaleString()}`}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#9CA3AF', marginTop: '0.2rem' }}>
                      {tier.spotsLeft} seats remaining
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Form Fields */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.4rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. David Bassey"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: errors.fullName ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    color: '#FFFFFF',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
                {errors.fullName && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.fullName}</div>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.4rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: errors.email ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      color: '#FFFFFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                  {errors.email && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.email}</div>}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.4rem' }}>
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: errors.phone ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      color: '#FFFFFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                  {errors.phone && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.phone}</div>}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.4rem' }}>
                    Attendee Category
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      background: '#121218',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      color: '#FFFFFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Student">Topfaith Student</option>
                    <option value="Faculty">Faculty / Staff Member</option>
                    <option value="Professional">Industry Professional</option>
                    <option value="Innovator">Tech Founder / Innovator</option>
                    <option value="Guest">Guest Delegate</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.4rem' }}>
                    Institution / University / Company *
                  </label>
                  <input
                    type="text"
                    placeholder="Topfaith University"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: errors.institution ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '10px',
                      color: '#FFFFFF',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                  {errors.institution && <div style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.3rem' }}>{errors.institution}</div>}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#D1D5DB', marginBottom: '0.4rem' }}>
                  What idea or ambition do you hope to Transcend this year? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what excites you about moving local innovation to the global stage..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  marginTop: '0.5rem',
                }}
              >
                <Sparkles size={18} />
                <span>Complete Registration & Generate Pass</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
