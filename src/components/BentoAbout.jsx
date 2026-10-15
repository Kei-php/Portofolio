import React, { useState } from 'react';
import {
  Code,
  Globe2,
  Headphones,
  Cpu,
  ShieldCheck,
  Terminal,
  Sparkles,
  Zap,
  CheckCircle2,
} from 'lucide-react';

export const BentoAbout = () => {
  const [activeTab, setActiveTab] = useState('bio');
  const [isPlaying, setIsPlaying] = useState(true);

  const terminalTabs = {
    bio: `# Keitaro.bio
name: "Keitaro Dior Purnomo"
status: "Full-Stack Developer"
focus: "Java, Php, Flutter, Web"
motto: "Make it work, make it clean, make it fly."`,
    skills: `// core_competencies.json
{
  "frontend": ["React", "TypeScript", "Tailwind", "WebGL"],
  "backend": ["Node.js", "Express", "Python", "Go"],
  "database": ["PostgreSQL", "Prisma", "Redis"],
  "cloud": ["Docker", "AWS", "Kubernetes", "Vercel"]
}`,
    setup: `# developer_gear.yaml
workstation: "MacBook Pro M3 Max + 32-inch 4K HDR"
editor: "VS Code with Catppuccin Mocha"
keyboard: "Custom 65% Mechanical with Lubed Linear Switches"
fuel: "Specialty Ethiopian Aeropress Coffee ☕"`,
  };

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Behind The Screen</span>
          </div>
          <h2 className="section-title">
            Passionate About Architecture,{' '}
            <span className="gradient-text">Obsessed With Detail</span>
          </h2>
          <p className="section-subtitle">
            I bridge the gap between creative visual artistry and rigorous systems engineering.
            Every interface I build is fast, accessible, and designed to endure.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '22px',
          }}
        >
          {/* Card 1: Core Philosophy (8 Columns) */}
          <div
            className="glass-card"
            style={{
              gridColumn: 'span 8',
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'var(--primary)',
                  marginBottom: '16px',
                }}
              >
                <Cpu size={22} />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Architecture Philosophy
                </span>
              </div>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 700, marginBottom: '14px', lineHeight: 1.3 }}>
                Building digital products that feel like second nature.
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Great software shouldn’t just look polished—it should respond instantaneously. Over the past 6+ years,
                I’ve engineered mission-critical web applications for high-growth startups and established teams.
                My approach marries robust state architecture, strict typing, and micro-interactions that elevate
                user perception from “useful” to “delightful”.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '14px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--primary)" />
                <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>Zero-Latency UX</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--primary)" />
                <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>Clean Architecture</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--primary)" />
                <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>WCAG Accessibility</span>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Terminal (4 Columns) */}
          <div
            className="glass-card"
            style={{
              gridColumn: 'span 4',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(10, 14, 22, 0.9)',
            }}
          >
            {/* Terminal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '14px',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              </div>
              <div style={{ display: 'flex', gap: '4px' }}>
                {['bio', 'skills', 'setup'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      color: activeTab === tab ? 'var(--primary)' : 'var(--text-dim)',
                      background: activeTab === tab ? 'rgba(var(--primary-rgb), 0.12)' : 'transparent',
                      border: activeTab === tab ? '1px solid rgba(var(--primary-rgb), 0.3)' : '1px solid transparent',
                    }}
                  >
                    {tab}.{tab === 'skills' ? 'json' : tab === 'setup' ? 'yaml' : 'sh'}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Body */}
            <pre
              style={{
                flex: 1,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                lineHeight: '1.6',
                color: '#93c5fd',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                background: 'rgba(5, 7, 12, 0.6)',
                padding: '14px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                overflowY: 'auto',
                maxHeight: '220px',
              }}
            >
              <code>{terminalTabs[activeTab]}</code>
            </pre>
          </div>

          {/* Card 3: Deep Work Music / Spotify Widget (4 Columns) */}
          <div
            className="glass-card"
            style={{
              gridColumn: 'span 4',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1db954' }}>
                  <Headphones size={20} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Focus Frequency
                  </span>
                </div>
                <div className="pulse-dot" />
              </div>

              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '4px' }}>
                Tycho — Awake (Ambient Edit)
              </h4>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.84rem', marginBottom: '18px' }}>
                Soundtrack for late-night code sprints & UI polishing
              </p>
            </div>

            {/* Equalizer Bars */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 18px',
                background: 'rgba(29, 185, 84, 0.08)',
                border: '1px solid rgba(29, 185, 84, 0.25)',
                borderRadius: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '22px' }}>
                {[14, 22, 10, 18, 12, 20, 8, 16, 22, 14].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: '3px',
                      height: `${h}px`,
                      background: '#1db954',
                      borderRadius: '2px',
                      animation: isPlaying ? `equalizer 1.2s ease-in-out infinite alternate` : 'none',
                      animationDelay: `${i * 0.12}s`,
                    }}
                  />
                ))}
              </div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: '#1db954',
                  padding: '4px 10px',
                  background: 'rgba(29, 185, 84, 0.15)',
                  borderRadius: '9999px',
                }}
              >
                {isPlaying ? 'Pause Groove' : 'Play Track'}
              </button>
            </div>
          </div>

          {/* Card 4: Global Availability & Timezone (4 Columns) */}
          <div
            className="glass-card"
            style={{
              gridColumn: 'span 4',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', marginBottom: '16px' }}>
                <Globe2 size={20} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Location & Collab
                </span>
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px' }}>
                Malang, East Java & Remote
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Comfortable working across global time zones (US, Europe, Asia Pacific). Fast asynchronous communication and disciplined ownership.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-dim)', display: 'block' }}>LOCAL TIME</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                </span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-dim)', display: 'block' }}>STATUS</span>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#10b981' }}>● Async Ready</span>
              </div>
            </div>
          </div>

          {/* Card 5: Core Values & Principles (4 Columns) */}
          <div
            className="glass-card"
            style={{
              gridColumn: 'span 4',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#c084fc', marginBottom: '16px' }}>
                <ShieldCheck size={20} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Execution Standards
                </span>
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px' }}>
                Tested, Documented, Deployed
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Every line of code is structured for maintainability. Automated CI pipelines, typed contracts, and thorough PR reviews ensure peace of mind.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '16px' }}>
              <span className="badge">100% Type-Safe</span>
              <span className="badge">Unit & E2E Tested</span>
              <span className="badge">Sub-second Builds</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes equalizer {
          0% { height: 4px; }
          100% { height: 20px; }
        }
        @media (max-width: 960px) {
          #about .glass-card {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
