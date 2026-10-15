import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Copy,
  Check,
  Sparkles,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Zap,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = personal.typedRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 85;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personal.typedRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, personal.typedRoles]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const techBadges = [
    'React 19',
    'Next.js 15',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'PostgreSQL',
    'Docker',
    'FastAPI',
    'GraphQL',
    'AWS Cloud',
    'Three.js',
    'Redis',
  ];

  return (
    <section id="hero" className="section" style={{ paddingTop: '150px', paddingBottom: '60px' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Text & CTAs */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 16px',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                marginBottom: '24px',
              }}
            >
              <span className="pulse-dot" />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#34d399' }}>
                {personal.status}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 4rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.12,
                marginBottom: '16px',
              }}
            >
              Crafting Scalable Web Products as a{' '}
              <span className="gradient-text" style={{ display: 'block', minHeight: '1.2em' }}>
                {displayedText}
                <span
                  style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1em',
                    backgroundColor: 'var(--primary)',
                    marginLeft: '4px',
                    verticalAlign: 'text-bottom',
                    animation: 'blink 1s infinite',
                  }}
                />
              </span>
            </h1>

            {/* Bio Paragraph */}
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                lineHeight: 1.7,
                maxWidth: '560px',
                marginBottom: '32px',
              }}
            >
              Hi, I'm <strong style={{ color: 'var(--text-main)' }}>{personal.name}</strong>. {personal.bio}
            </p>

            {/* CTAs & Socials */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '42px',
              }}
            >
              <a href="#projects" className="btn btn-primary" id="hero-projects-btn">
                <span>View My Work</span>
                <ArrowRight size={17} />
              </a>

              <a href="#contact" className="btn btn-secondary" id="hero-contact-btn">
                <span>Let's Talk</span>
              </a>

              <button
                onClick={copyEmailToClipboard}
                className="btn btn-secondary"
                style={{ padding: '12px 18px', gap: '8px' }}
                title="Copy Email Address"
                id="hero-copy-email-btn"
              >
                {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                <span style={{ fontSize: '0.88rem' }}>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginRight: '6px' }}>
                CONNECT:
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personal.twitter}
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                aria-label="Twitter / X"
              >
                <TwitterIcon size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Interactive Showcase Card */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Glowing Backdrop Ring */}
            <div
              style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.22) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0,
              }}
            />

            {/* Central Terminal / Tech Card */}
            <div
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '440px',
                padding: '28px',
                borderRadius: '26px',
                border: '1px solid rgba(var(--primary-rgb), 0.25)',
                background: 'rgba(14, 18, 28, 0.75)',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px -5px rgba(var(--primary-rgb), 0.2)',
              }}
            >
              {/* Card Header with macOS style dots */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '18px',
                  borderBottom: '1px solid var(--border-subtle)',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Terminal size={14} />
                  <span>developer.config.ts</span>
                </div>
              </div>

              {/* Developer Visual Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '20px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '14px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid var(--border-glow)',
                    boxShadow: '0 0 15px rgba(var(--primary-rgb), 0.3)',
                    position: 'relative',
                  }}
                >
                  <Code2 size={28} color="var(--primary)" />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-3px',
                      right: '-3px',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: '#10b981',
                      border: '2px solid #0f172a',
                    }}
                  />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Keitaro Dior Purnomo</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
                    Senior React & Cloud Architect
                  </p>
                  <p style={{ fontSize: '0.76rem', color: 'var(--text-dim)' }}>Malang, East Java (GMT+7)</p>
                </div>
              </div>

              {/* Code Snippet */}
              <div
                style={{
                  background: 'rgba(6, 8, 14, 0.85)',
                  padding: '16px',
                  borderRadius: '14px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  lineHeight: '1.6',
                  color: '#cbd5e1',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  marginBottom: '20px',
                }}
              >
                <div>
                  <span style={{ color: '#c084fc' }}>const</span> developer = &#123;
                </div>
                <div style={{ paddingLeft: '14px' }}>
                  <span style={{ color: '#38bdf8' }}>specialty:</span>{' '}
                  <span style={{ color: '#a7f3d0' }}>'High-Performance React & AI'</span>,
                </div>
                <div style={{ paddingLeft: '14px' }}>
                  <span style={{ color: '#38bdf8' }}>architecture:</span>{' '}
                  <span style={{ color: '#a7f3d0' }}>'Distributed & Microservices'</span>,
                </div>
                <div style={{ paddingLeft: '14px' }}>
                  <span style={{ color: '#38bdf8' }}>coreDrive:</span>{' '}
                  <span style={{ color: '#fde047' }}>'Zero-Lag Pixel Perfection'</span>,
                </div>
                <div style={{ paddingLeft: '14px' }}>
                  <span style={{ color: '#38bdf8' }}>lovesCoffee:</span>{' '}
                  <span style={{ color: '#fb923c' }}>true</span>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Floating Mini Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="badge badge-primary">⚡ React 19 Ready</span>
                <span className="badge">🌐 Next.js SSR</span>
                <span className="badge">🔒 TypeScript 100%</span>
                <span className="badge">🚀 60 FPS Animations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div
          style={{
            marginTop: '70px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '18px',
          }}
        >
          {personal.stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: '22px 24px',
                textAlign: 'center',
                background: 'rgba(16, 22, 35, 0.55)',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.5rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.02em',
                  color: 'var(--primary)',
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Marquee Ticker */}
        <div
          style={{
            marginTop: '60px',
            padding: '18px 0',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '36px',
              animation: 'marquee 28s linear infinite',
              width: 'max-content',
            }}
          >
            {[...techBadges, ...techBadges].map((tech, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-dim)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.04em',
                }}
              >
                <Zap size={14} color="var(--primary)" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
