import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Testimonials = () => {
  const { testimonials } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Endorsements</span>
          </div>
          <h2 className="section-title">
            What Leaders & <span className="gradient-text">Founders Say</span>
          </h2>
          <p className="section-subtitle">
            Feedback from colleagues and stakeholders on engineering quality, speed, and cross-functional leadership.
          </p>
        </div>

        {/* Testimonial Card */}
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative' }}>
          <div
            className="glass-card"
            style={{
              padding: '48px 40px',
              position: 'relative',
              background: 'rgba(14, 19, 30, 0.85)',
              border: '1px solid var(--border-glow)',
              textAlign: 'center',
            }}
          >
            {/* Quote Icon */}
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'rgba(var(--primary-rgb), 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                color: 'var(--primary)',
              }}
            >
              <Quote size={24} />
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '20px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>

            {/* Quote Text */}
            <blockquote
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                fontStyle: 'italic',
                lineHeight: 1.7,
                color: 'var(--text-main)',
                marginBottom: '32px',
                minHeight: '110px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              "{current.quote}"
            </blockquote>

            {/* Author Info */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
              }}
            >
              <img
                src={current.avatar}
                alt={current.author}
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--primary)',
                  boxShadow: '0 0 14px rgba(var(--primary-rgb), 0.4)',
                }}
              />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '1.05rem', fontWeight: 800 }}>{current.author}</div>
                <div style={{ fontSize: '0.84rem', color: 'var(--primary)' }}>
                  {current.title} • {current.company}
                </div>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '28px',
            }}
          >
            <button
              onClick={prevSlide}
              className="btn-icon"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: idx === currentIndex ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '9999px',
                    background: idx === currentIndex ? 'var(--primary)' : 'rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="btn-icon"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
