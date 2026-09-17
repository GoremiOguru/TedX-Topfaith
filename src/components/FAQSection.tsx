import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/eventData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Essential details regarding attendance, pass pricing, the 200 seating quota at The Law Auditorium, and event day procedures.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="glass-card"
                style={{
                  border: isOpen ? '1px solid rgba(235, 0, 40, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    background: 'transparent',
                    color: '#FFFFFF',
                  }}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.4 }}>
                    {item.question}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? '#EB0028' : 'rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'transform 0.3s ease, background 0.3s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDown size={18} color="#FFFFFF" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.5rem 1.5rem',
                      color: '#A1A1AA',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                      paddingTop: '1rem',
                      animation: 'fadeIn 0.2s ease-out',
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#9CA3AF', fontSize: '0.9rem' }}>
            <MessageSquare size={16} color="#EB0028" />
            <span>Have specific inquiries? Contact our team at{' '}
              <a href="mailto:info@tedxtopfaithuni.com" style={{ color: '#EB0028', fontWeight: 600, textDecoration: 'underline' }}>
                info@tedxtopfaithuni.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
