import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Download, ArrowRight } from 'lucide-react';

export const Navbar = ({ currentTheme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const themes = [
    { id: 'cyan', label: 'Aurora', color: '#00f2fe' },
    { id: 'violet', label: 'Cyber', color: '#c084fc' },
    { id: 'emerald', label: 'Matrix', color: '#10b981' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: isScrolled ? '12px 24px' : '22px 24px',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1160px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: isScrolled ? 'rgba(10, 14, 23, 0.82)' : 'rgba(14, 18, 27, 0.55)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '9999px',
            padding: '8px 18px 8px 24px',
            border: '1px solid rgba(255, 255, 255, 0.09)',
            boxShadow: isScrolled
              ? '0 12px 35px -8px rgba(0, 0, 0, 0.6), 0 0 20px -5px rgba(var(--primary-rgb), 0.15)'
              : '0 8px 25px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: 800,
              fontSize: '1.15rem',
              letterSpacing: '-0.02em',
            }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#07090e',
                boxShadow: '0 0 16px rgba(var(--primary-rgb), 0.4)',
              }}
            >
              <Sparkles size={18} strokeWidth={2.5} />
            </div>
            <span>
              Keitaro<span style={{ color: 'var(--primary)' }}>.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                    background: isActive ? 'rgba(var(--primary-rgb), 0.12)' : 'transparent',
                    border: isActive
                      ? '1px solid rgba(var(--primary-rgb), 0.3)'
                      : '1px solid transparent',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-main)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Theme Selector & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Theme switcher */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '4px',
                borderRadius: '9999px',
                border: '1px solid var(--border-subtle)',
              }}
              title="Change Accent Color"
            >
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: t.color,
                    opacity: currentTheme === t.id ? 1 : 0.45,
                    transform: currentTheme === t.id ? 'scale(1.2)' : 'scale(0.9)',
                    transition: 'all 0.2s ease',
                    boxShadow: currentTheme === t.id ? `0 0 10px ${t.color}` : 'none',
                    border: currentTheme === t.id ? '2px solid #ffffff' : 'none',
                  }}
                  aria-label={`Switch to ${t.label} theme`}
                />
              ))}
            </div>

            {/* Resume button (desktop) */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn btn-primary"
              style={{
                padding: '8px 18px',
                fontSize: '0.86rem',
                display: 'none',
              }}
              id="nav-cta-btn"
            >
              <span>Hire Me</span>
              <ArrowRight size={15} />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-icon"
              style={{ display: 'flex' }}
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              marginTop: '12px',
              background: 'rgba(12, 16, 26, 0.95)',
              backdropFilter: 'blur(25px)',
              WebkitBackdropFilter: 'blur(25px)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7)',
              animation: 'fadeIn 0.2s ease',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: activeSection === link.id ? 'var(--primary)' : 'var(--text-main)',
                  background:
                    activeSection === link.id ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent',
                }}
              >
                {link.name}
              </a>
            ))}

            <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Hire Me / Get In Touch</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Media query helper styles */}
      <style>{`
        @media (min-width: 820px) {
          .desktop-nav {
            display: flex !important;
          }
          #nav-cta-btn {
            display: inline-flex !important;
          }
          #mobile-menu-toggle {
            display: none !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};
