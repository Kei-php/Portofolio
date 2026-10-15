import React, { useEffect } from 'react';
import { X, ExternalLink, Zap, Layers, Sparkles, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(5, 7, 12, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        animation: 'modalFadeIn 0.25s ease',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'rgba(14, 18, 28, 0.95)',
          border: '1px solid var(--border-glow)',
          borderRadius: '24px',
          padding: '36px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(var(--primary-rgb), 0.25)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-icon"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 10,
          }}
          aria-label="Close Case Study"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span className="badge badge-primary">{project.category}</span>
            {project.featured && <span className="badge">⭐ Featured Project</span>}
          </div>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '8px' }}>
            {project.title}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
            {project.tagline}
          </p>
        </div>

        {/* Visual Mock Banner */}
        <div
          style={{
            height: '160px',
            borderRadius: '16px',
            background: project.gradient,
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#07090e',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at top right, rgba(255,255,255,0.3), transparent 70%)',
            }}
          />
          <div style={{ zIndex: 1, textAlign: 'center', padding: '16px' }}>
            <Sparkles size={36} style={{ marginBottom: '8px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#07090e' }}>
              System Architecture & Deep Dive
            </h3>
          </div>
        </div>

        {/* Full Overview */}
        <div style={{ marginBottom: '24px' }}>
          <h4
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--primary)',
            }}
          >
            <Layers size={18} />
            <span>Problem & Solution</span>
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.7 }}>
            {project.fullDescription}
          </p>
        </div>

        {/* Technical Architecture */}
        <div style={{ marginBottom: '24px' }}>
          <h4
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--primary)',
            }}
          >
            <Zap size={18} />
            <span>Technical Architecture</span>
          </h4>
          <div
            style={{
              background: 'rgba(6, 8, 14, 0.8)',
              padding: '14px 18px',
              borderRadius: '12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.84rem',
              color: '#93c5fd',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            {project.architecture}
          </div>
        </div>

        {/* Key Metrics / Impact */}
        <div style={{ marginBottom: '28px' }}>
          <h4
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#10b981',
            }}
          >
            <CheckCircle size={18} />
            <span>Impact & Verified Metrics</span>
          </h4>
          <div
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              padding: '12px 18px',
              borderRadius: '12px',
              color: '#34d399',
              fontSize: '0.88rem',
              fontWeight: 600,
              border: '1px solid rgba(16, 185, 129, 0.25)',
            }}
          >
            {project.metrics}
          </div>
        </div>

        {/* Technologies Tags */}
        <div style={{ marginBottom: '32px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'block', marginBottom: '8px' }}>
            TECHNOLOGIES UTILIZED:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ flex: 1, minWidth: '180px' }}
          >
            <span>Live Demonstration</span>
            <ExternalLink size={16} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{ flex: 1, minWidth: '180px' }}
          >
            <GithubIcon size={16} />
            <span>View Source Code</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};
