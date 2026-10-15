import React, { useState } from 'react';
import {
  Code2,
  FileCode2,
  Globe,
  Palette,
  Box,
  Layers,
  Server,
  Terminal,
  Cpu,
  Network,
  Radio,
  Database,
  Zap,
  Container,
  Cloud,
  Flame,
  GitFork,
  Workflow,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { FigmaIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

// Icon mapping helper
const iconMap = {
  Code2,
  FileCode2,
  Globe,
  Palette,
  Box,
  Layers,
  Server,
  Terminal,
  Cpu,
  Network,
  Radio,
  Database,
  Zap,
  Container,
  Cloud,
  Flame,
  GitFork,
  Workflow,
  CheckCircle2,
  Figma: FigmaIcon,
};

export const Skills = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skills.map((s) => s.category)];

  const filteredSkills =
    activeCategory === 'All'
      ? skills.flatMap((s) => s.items.map((item) => ({ ...item, category: s.category })))
      : skills
          .find((s) => s.category === activeCategory)
          ?.items.map((item) => ({ ...item, category: activeCategory })) || [];

  return (
    <section id="skills" className="section" style={{ background: 'rgba(8, 11, 18, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Tech Arsenal</span>
          </div>
          <h2 className="section-title">
            Technologies & <span className="gradient-text">Engineering Tools</span>
          </h2>
          <p className="section-subtitle">
            A battle-tested tech stack refined through years of delivering resilient, high-traffic production systems.
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '32px',
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                  background:
                    activeCategory === category
                      ? 'linear-gradient(135deg, var(--primary), var(--secondary))'
                      : 'rgba(255, 255, 255, 0.04)',
                  color: activeCategory === category ? '#07090e' : 'var(--text-muted)',
                  border:
                    activeCategory === category
                      ? '1px solid transparent'
                      : '1px solid var(--border-subtle)',
                  boxShadow:
                    activeCategory === category
                      ? '0 4px 18px rgba(var(--primary-rgb), 0.35)'
                      : 'none',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={`${skill.name}-${index}`}
                className="glass-card"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'rgba(16, 22, 34, 0.65)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(var(--primary-rgb), 0.1)',
                      border: '1px solid rgba(var(--primary-rgb), 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)',
                    }}
                  >
                    <IconComponent size={22} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>
                    {skill.name}
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {skill.category}
                  </span>

                  {/* Level progress bar */}
                  <div
                    style={{
                      width: '100%',
                      height: '6px',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      marginTop: '14px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        width: `${skill.level}%`,
                        height: '100%',
                        borderRadius: '9999px',
                        background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                        boxShadow: '0 0 10px rgba(var(--primary-rgb), 0.5)',
                        transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
