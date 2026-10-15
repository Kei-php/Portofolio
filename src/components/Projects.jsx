import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, ArrowRight, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'AI & Full-Stack', 'Fintech & Web3', 'DevOps & Cloud', 'WebGL & Creative'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase().slice(0, 4)));

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Featured Engineering</span>
          </div>
          <h2 className="section-title">
            Selected Works & <span className="gradient-text">Production Case Studies</span>
          </h2>
          <p className="section-subtitle">
            A showcase of web applications, distributed platforms, and real-time tools built with performance and elegance in mind.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '32px',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                  background:
                    selectedCategory === cat
                      ? 'linear-gradient(135deg, var(--primary), var(--secondary))'
                      : 'rgba(255, 255, 255, 0.04)',
                  color: selectedCategory === cat ? '#07090e' : 'var(--text-muted)',
                  border:
                    selectedCategory === cat
                      ? '1px solid transparent'
                      : '1px solid var(--border-subtle)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '30px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0',
                border: project.featured ? '1px solid var(--border-glow)' : '1px solid var(--border-subtle)',
              }}
            >
              {/* Card Visual Header / Mockup Banner */}
              <div
                style={{
                  height: '190px',
                  background: project.gradient,
                  position: 'relative',
                  padding: '16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                }}
              >
                {/* Radial Glow Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.25), transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Top Bar with mock dots and category */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    zIndex: 2,
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'rgba(0,0,0,0.3)' }} />
                    <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'rgba(0,0,0,0.3)' }} />
                    <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'rgba(0,0,0,0.3)' }} />
                  </div>
                  <span
                    style={{
                      background: 'rgba(0, 0, 0, 0.4)',
                      backdropFilter: 'blur(8px)',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: '#ffffff',
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Center Title Badge */}
                <div style={{ zIndex: 2 }}>
                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: '#07090e',
                      letterSpacing: '-0.02em',
                      textShadow: '0 1px 2px rgba(255,255,255,0.4)',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: 'rgba(7, 9, 14, 0.85)',
                      fontWeight: 600,
                      lineHeight: 1.3,
                      marginTop: '4px',
                    }}
                  >
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Card Content Body */}
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.92rem',
                      lineHeight: 1.65,
                      marginBottom: '18px',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Impact Metric Badge */}
                  <div
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--primary)',
                      marginBottom: '20px',
                    }}
                  >
                    {project.metrics}
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="badge">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="badge" style={{ color: 'var(--primary)' }}>
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-subtle)',
                    gap: '10px',
                  }}
                >
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-secondary"
                    style={{
                      padding: '8px 16px',
                      fontSize: '0.84rem',
                      gap: '6px',
                    }}
                  >
                    <Eye size={15} />
                    <span>Case Study</span>
                  </button>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-icon"
                      aria-label="View Code"
                      title="GitHub Repository"
                    >
                      <GithubIcon size={17} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-icon"
                      aria-label="Live Demo"
                      title="Live Demo"
                      style={{ color: 'var(--primary)' }}
                    >
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};
