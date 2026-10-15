import React, { useState } from 'react';
import {
  Mail,
  Send,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    // Simulate sending email
    setTimeout(() => {
      setStatus('success');

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f2fe', '#4facfe', '#8b5cf6', '#10b981'],
        });
      } catch (err) {
        // Fallback gracefully
      }
    }, 1000);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
  };

  return (
    <section id="contact" className="section" style={{ background: 'rgba(8, 11, 18, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Initiate Contact</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, need technical leadership, or want to discuss full-stack architecture? Reach out anytime.
          </p>
        </div>

        {/* Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'flex-start',
            maxWidth: '1060px',
            margin: '0 auto',
          }}
        >
          {/* Left Column: Direct Info & Availability */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              background: 'rgba(15, 20, 32, 0.75)',
            }}
          >
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '8px' }}>
              Contact Information
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '28px' }}>
              I respond promptly to inquiries regarding new ventures, consulting, or technical advisory roles.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(var(--primary-rgb), 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'block' }}>EMAIL</span>
                  <a
                    href={`mailto:${personal.email}`}
                    style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'block' }}>LOCATION</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{personal.location}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(192, 132, 252, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#c084fc',
                  }}
                >
                  <Clock size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'block' }}>RESPONSE TIME</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Within 24 Hours Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Book a Call CTA Card */}
            <div
              style={{
                padding: '20px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--primary)' }}>
                <Calendar size={18} />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Quick Coffee Chat?</h4>
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '14px' }}>
                Book a 15-minute introductory video call to brainstorm architectural ideas or team fit.
              </p>
              <a
                href={`mailto:${personal.email}?subject=Introductory%20Call%20Request`}
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.85rem', padding: '10px 16px' }}
              >
                <span>Schedule Discussion</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              background: 'rgba(15, 20, 32, 0.85)',
              border: '1px solid var(--border-glow)',
            }}
          >
            {status === 'success' ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Message Dispatched!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '400px', lineHeight: 1.6 }}>
                  Thank you for reaching out, <strong style={{ color: 'var(--text-main)' }}>{formData.name}</strong>.
                  I have received your transmission and will respond shortly.
                </p>
                <button
                  onClick={resetForm}
                  className="btn btn-secondary"
                  style={{ marginTop: '14px' }}
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '4px' }}>
                  Send a Direct Message
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>
                  Fill in the fields below to send a high-priority message.
                </p>

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-muted)' }}
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Connor"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(6, 9, 15, 0.7)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '12px',
                      color: 'var(--text-main)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-muted)' }}
                  >
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sarah@acmecorp.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(6, 9, 15, 0.7)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '12px',
                      color: 'var(--text-main)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-muted)' }}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Advisory"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(6, 9, 15, 0.7)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '12px',
                      color: 'var(--text-main)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-muted)' }}
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your product, timeline, or engineering goals..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(6, 9, 15, 0.7)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '12px',
                      color: 'var(--text-main)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '14px', marginTop: '6px' }}
                  id="contact-submit-btn"
                >
                  {status === 'loading' ? (
                    <span>Encrypting & Sending...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
