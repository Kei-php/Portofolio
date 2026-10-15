import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(6, 8, 14, 0.95)',
        padding: '50px 0 30px 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '40px',
          }}
        >
          {/* Logo & Tagline */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 800,
                fontSize: '1.25rem',
                marginBottom: '8px',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#07090e',
                }}
              >
                <Sparkles size={16} />
              </div>
              <span>
                Keitaro<span style={{ color: 'var(--primary)' }}>.dev</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.86rem', maxWidth: '340px' }}>
              Building ultra-fast, visually stunning web experiences engineered to endure.
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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

            {/* Back to Top button */}
            <button
              onClick={scrollToTop}
              className="btn-icon"
              style={{
                marginLeft: '12px',
                background: 'rgba(var(--primary-rgb), 0.1)',
                color: 'var(--primary)',
                borderColor: 'rgba(var(--primary-rgb), 0.3)',
              }}
              aria-label="Back to top"
              title="Return to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: '0.82rem',
            color: 'var(--text-dim)',
          }}
        >
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Crafted with React 19, Vite & <Heart size={13} color="var(--primary)" fill="var(--primary)" />
          </div>
        </div>
      </div>
    </footer>
  );
};
