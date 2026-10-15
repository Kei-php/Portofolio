import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, GraduationCap, Award, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="section" style={{ background: 'rgba(8, 11, 18, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Career Progression</span>
          </div>
          <h2 className="section-title">
            Work Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="section-subtitle">
            A track record of engineering leadership, high-impact deliveries, and cross-functional collaboration.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Line */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: '20px',
              bottom: '20px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--primary), var(--secondary), transparent)',
              opacity: 0.35,
            }}
          />

          {/* Timeline Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {experience.map((job, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '28px',
                  position: 'relative',
                }}
              >
                {/* Glowing Node Dot */}
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--bg-surface)',
                    border: '2px solid var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    flexShrink: 0,
                    zIndex: 2,
                    boxShadow: '0 0 15px rgba(var(--primary-rgb), 0.4)',
                  }}
                >
                  <Briefcase size={18} />
                </div>

                {/* Content Card */}
                <div
                  className="glass-card"
                  style={{
                    flex: 1,
                    padding: '30px',
                    background: 'rgba(15, 20, 32, 0.7)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '12px',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '4px' }}>
                        {job.role}
                      </h3>
                      <div
                        style={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: 'var(--primary)',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {job.company}
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      <Calendar size={13} />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.82rem',
                      color: 'var(--text-dim)',
                      marginBottom: '16px',
                    }}
                  >
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>

                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.94rem',
                      lineHeight: 1.65,
                      marginBottom: '18px',
                    }}
                  >
                    {job.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div style={{ marginBottom: '20px' }}>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: 'var(--text-dim)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      Key Milestones & Achievements:
                    </span>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {job.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '0.88rem',
                            color: 'var(--text-main)',
                            lineHeight: 1.5,
                          }}
                        >
                          <ChevronRight size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {job.skills.map((s) => (
                      <span key={s} className="badge">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education & Certs Card */}
          <div
            style={{
              marginTop: '50px',
              paddingLeft: '70px',
            }}
          >
            <div
              className="glass-card"
              style={{
                padding: '28px',
                background: 'rgba(12, 17, 27, 0.6)',
                border: '1px solid var(--border-subtle)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(var(--primary-rgb), 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>
                    {education[0].degree}
                  </h4>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    {education[0].institution} • {education[0].period}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                    {education[0].details}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(245, 158, 11, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f59e0b',
                    flexShrink: 0,
                  }}
                >
                  <Award size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px' }}>
                    Industry Accreditations
                  </h4>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    AWS Certified Solutions Architect & Meta React Professional
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                    Rigorous validations in distributed cloud patterns and scalable frontend architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
