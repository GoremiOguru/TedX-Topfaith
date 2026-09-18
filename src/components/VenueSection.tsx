import React, { useState } from 'react';
import { MapPin, Navigation, Maximize2, X, Compass, ShieldCheck, Users, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { VENUE_GALLERY, EVENT_DETAILS } from '../data/eventData';

export const VenueSection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  const activeVenue = VENUE_GALLERY[activeImageIndex];

  const handlePrevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? VENUE_GALLERY.length - 1 : prev - 1));
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev === VENUE_GALLERY.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="venue" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <MapPin size={14} />
            <span>The Host Venue</span>
          </div>
          <h2 className="section-title">
            The Law <span className="highlight">Auditorium</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            An architecturally distinguished amphitheater on the Topfaith University campus, acoustically engineered for crystal-clear talk delivery to a curated cohort of seated delegates.
          </p>
        </div>

        {/* Featured Main Showcase Viewer */}
        <div
          className="glass-card"
          style={{
            overflow: 'hidden',
            marginBottom: '2.5rem',
            border: '1px solid rgba(235, 0, 40, 0.35)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 35px rgba(235, 0, 40, 0.15)',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(340px, 50vw, 560px)',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
            onClick={() => setLightboxOpen(true)}
          >
            <img
              src={activeVenue.image}
              alt={activeVenue.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />

            {/* Gradient Mask */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(6, 6, 9, 0.95) 0%, rgba(6, 6, 9, 0.3) 50%, transparent 100%)',
              }}
            />

            {/* Top Badges */}
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 0.95rem',
                borderRadius: '9999px',
                background: 'rgba(235, 0, 40, 0.9)',
                color: '#FFFFFF',
                fontSize: '0.82rem',
                fontWeight: 700,
                boxShadow: '0 4px 15px rgba(235, 0, 40, 0.4)',
              }}
            >
              <Sparkles size={13} />
              <span>{activeVenue.badge}</span>
            </div>

            {/* Lightbox Expand Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(true);
              }}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(6, 6, 9, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="View Fullscreen"
            >
              <Maximize2 size={18} />
            </button>

            {/* Bottom Caption Details */}
            <div
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                right: '2rem',
              }}
            >
              <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                {activeVenue.title}
              </h3>
              <p style={{ color: '#D1D5DB', fontSize: '0.98rem', maxWidth: '750px', lineHeight: 1.6 }}>
                {activeVenue.caption}
              </p>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              padding: '1.25rem',
              background: 'rgba(12, 12, 16, 0.95)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {VENUE_GALLERY.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveImageIndex(index)}
                style={{
                  position: 'relative',
                  height: '85px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: activeImageIndex === index ? '2px solid #EB0028' : '1px solid rgba(255, 255, 255, 0.1)',
                  opacity: activeImageIndex === index ? 1 : 0.6,
                  transition: 'all 0.25s ease',
                  padding: 0,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.35)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '0.4rem',
                  }}
                >
                  <span style={{ fontSize: '0.7rem', color: '#FFFFFF', fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                    {item.badge}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Venue Amenities & Location Info */}
        <div className="grid-3" style={{ gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(235, 0, 40, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Compass size={20} color="#EB0028" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>Topfaith University Campus</h4>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Mkpatak, Essien Udim LGA</div>
              </div>
            </div>
            <p style={{ color: '#A1A1AA', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Located in the serene educational haven of Mkpatak, easily accessible via regional transit corridors with dedicated security checkpoints.
            </p>
            <a
              href={EVENT_DETAILS.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-red"
              style={{ width: '100%', padding: '0.65rem', fontSize: '0.85rem' }}
            >
              <Navigation size={14} />
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(235, 0, 40, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={20} color="#EB0028" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>Strict License Quota</h4>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>Intimate & Immersive</div>
              </div>
            </div>
            <p style={{ color: '#A1A1AA', fontSize: '0.9rem', lineHeight: 1.6 }}>
              In compliance with TED's university license standards, attendance is strictly capped to ensure an intimate, high-impact delegate experience.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={20} color="#60A5FA" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>Production & Security</h4>
                <div style={{ fontSize: '0.8rem', color: '#9CA3AF' }}>The Centrestage Company</div>
              </div>
            </div>
            <p style={{ color: '#A1A1AA', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Executive production overseen by The Centrestage Company alongside Topfaith campus security and protocol teams.
            </p>
          </div>
        </div>
      </div>

      {/* Centered Fullscreen Lightbox Modal (Mobile & Desktop Fixed) */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <div
            className="lightbox-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Navigation Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.25rem',
                background: 'rgba(12, 12, 16, 0.98)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', minWidth: 0 }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    background: 'rgba(235, 0, 40, 0.15)',
                    border: '1px solid rgba(235, 0, 40, 0.4)',
                    color: '#FF4A61',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    flexShrink: 0,
                  }}
                >
                  <Sparkles size={11} />
                  <span>{activeVenue.badge}</span>
                </div>
                <span
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {activeVenue.title}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                <span style={{ fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 600 }}>
                  {activeImageIndex + 1} / {VENUE_GALLERY.length}
                </span>
                <button
                  onClick={() => setLightboxOpen(false)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  aria-label="Close Lightbox"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Main Centered Image Frame with Prev/Next Controls */}
            <div className="lightbox-img-wrap">
              <button
                onClick={handlePrevImage}
                className="lightbox-nav-btn lightbox-nav-prev"
                aria-label="Previous Image"
              >
                <ChevronLeft size={22} />
              </button>

              <img
                src={activeVenue.image}
                alt={activeVenue.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  background: '#000000',
                  userSelect: 'none',
                }}
              />

              <button
                onClick={handleNextImage}
                className="lightbox-nav-btn lightbox-nav-next"
                aria-label="Next Image"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Bottom Caption & Thumbnail Switcher */}
            <div
              style={{
                padding: '1rem 1.25rem',
                background: 'rgba(12, 12, 16, 0.98)',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <p style={{ color: '#D1D5DB', fontSize: '0.86rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                {activeVenue.caption}
              </p>

              {/* Quick Jump Thumbnails */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                {VENUE_GALLERY.map((item, idx) => (
                  <button
                    key={`lightbox-thumb-${item.id}`}
                    onClick={() => setActiveImageIndex(idx)}
                    style={{
                      height: '46px',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      border: activeImageIndex === idx ? '2px solid #EB0028' : '1px solid rgba(255, 255, 255, 0.1)',
                      opacity: activeImageIndex === idx ? 1 : 0.5,
                      transition: 'all 0.2s ease',
                      padding: 0,
                    }}
                  >
                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

