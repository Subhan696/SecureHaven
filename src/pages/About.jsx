import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="about-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <main style={{ flex: 1 }}>
      {/* Hero Section */}
      <section style={{ width: '100%', padding: '3rem 0', background: '#0d1b2a', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>About Secure Haven</h1>
            <p style={{ maxWidth: 700, color: '#cbd5e1', fontSize: '1.25rem' }}>
              We're on a mission to make elections accessible, secure, and transparent for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{ width: '100%', padding: '3rem 0', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
            <div>
              <img
                src="https://placehold.co/600x400?text=Our+Team"
                width={600}
                height={400}
                alt="Our team"
                style={{ display: 'block', margin: '0 auto', borderRadius: '1rem', objectFit: 'cover', aspectRatio: '3/2' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Our Story</h2>
                <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
                  Secure Haven was founded in 2025 by a team of two passionate individuals and election specialists who saw a need for more accessible, secure voting systems for organizations of all sizes.
                </p>
                <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
                  What started as a solution for university student elections has grown into a comprehensive platform trusted by schools, non-profits, clubs, and businesses worldwide.
                </p>
                <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
                  Our mission is to make democratic processes more accessible while maintaining the highest standards of security and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section style={{ width: '100%', padding: '3rem 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Our Values</h2>
            <p style={{ maxWidth: 900, color: '#64748b', fontSize: '1.1rem' }}>
              The principles that guide everything we do
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginTop: '3rem', maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.5rem', background: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: '50%', background: '#dbeafe', color: '#2563eb', fontWeight: 700, fontSize: '1.25rem' }}>1</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Security First</h3>
              <p style={{ textAlign: 'center', color: '#64748b' }}>
                We never compromise on security. Your data and votes are protected with industry-leading encryption.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.5rem', background: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: '50%', background: '#dbeafe', color: '#2563eb', fontWeight: 700, fontSize: '1.25rem' }}>2</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Accessibility</h3>
              <p style={{ textAlign: 'center', color: '#64748b' }}>
                Democratic processes should be available to everyone, regardless of technical expertise or budget.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '1rem', padding: '1.5rem', background: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: '50%', background: '#dbeafe', color: '#2563eb', fontWeight: 700, fontSize: '1.25rem' }}>3</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Transparency</h3>
              <p style={{ textAlign: 'center', color: '#64748b' }}>
                We believe in open, transparent elections where results can be verified and trusted by all participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ width: '100%', padding: '3rem 0', background: '#0d1b2a', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Ready to get started?</h2>
            <p style={{ maxWidth: 600, color: '#cbd5e1', fontSize: '1.1rem' }}>
              Join thousands of organizations already using Secure Haven for their elections.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '0.75rem 2rem', background: '#22c55e', color: 'white', borderRadius: '8px', fontWeight: 600, fontSize: '1.1rem', border: 'none', cursor: 'pointer' }}>
                  Sign Up Free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default About;
