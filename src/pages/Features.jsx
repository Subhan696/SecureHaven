import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, BarChart3, Smartphone, ShieldCheck, Clock, Globe, Users } from 'lucide-react';

const Features = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <main style={{ flex: 1 }}>
      {/* Hero Section */}
      <section style={{ width: '100%', padding: '3rem 0', background: '#0d1b2a', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Platform Features</h1>
            <p style={{ maxWidth: 700, color: '#cbd5e1', fontSize: '1.25rem' }}>
              Everything you need to run secure, transparent elections
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section style={{ width: '100%', padding: '3rem 0', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Core Features</h2>
            <p style={{ maxWidth: 900, color: '#64748b', fontSize: '1.1rem' }}>
              Our platform is designed to make elections simple, secure, and accessible
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#f8fafc', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(30,41,59,0.06)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
              <Lock size={48} style={{ color: '#2563eb' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>End-to-End Encryption</h3>
              <p style={{ color: '#64748b' }}>
                Your votes are protected with top-tier encryption protocols that ensure complete privacy and security.
              </p>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(30,41,59,0.06)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
              <BarChart3 size={48} style={{ color: '#2563eb' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Real-Time Results</h3>
              <p style={{ color: '#64748b' }}>
                Get instant insights as soon as voting ends — no delays. View results as charts, graphs, or raw data.
              </p>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(30,41,59,0.06)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
              <Smartphone size={48} style={{ color: '#2563eb' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Mobile Friendly</h3>
              <p style={{ color: '#64748b' }}>
                Voters can participate easily from any device, anytime. Our responsive design works on all screen sizes.
              </p>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(30,41,59,0.06)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
              <ShieldCheck size={48} style={{ color: '#2563eb' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Fraud Detection</h3>
              <p style={{ color: '#64748b' }}>
                Our system flags suspicious activity automatically, ensuring the integrity of your election results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section style={{ width: '100%', padding: '3rem 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Advanced Features</h2>
            <p style={{ maxWidth: 900, color: '#64748b', fontSize: '1.1rem' }}>
              For organizations with more complex election needs
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'white', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(30,41,59,0.06)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
              <Clock size={48} style={{ color: '#2563eb' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Scheduled Elections</h3>
              <p style={{ color: '#64748b' }}>
                Set up elections in advance and have them automatically start and end at specified times.
              </p>
            </div>
            <div style={{ background: 'white', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(30,41,59,0.06)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
              <Globe size={48} style={{ color: '#2563eb' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Multi-language Support</h3>
              <p style={{ color: '#64748b' }}>
                Create elections in multiple languages to accommodate diverse voter populations.
              </p>
            </div>
            <div style={{ background: 'white', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(30,41,59,0.06)', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
              <Users size={48} style={{ color: '#2563eb' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Voter Verification</h3>
              <p style={{ color: '#64748b' }}>
                Advanced options for verifying voter identity, including email verification and access codes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ width: '100%', padding: '3rem 0', background: '#0d1b2a', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Ready to experience these features?</h2>
            <p style={{ maxWidth: 600, color: '#cbd5e1', fontSize: '1.1rem' }}>
              Create your first election today and see how Secure Haven can transform your voting process.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <Link to="/create" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '0.75rem 2rem', background: '#22c55e', color: 'white', borderRadius: '8px', fontWeight: 600, fontSize: '1.1rem', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Create a Free Election
                  <ArrowRight size={20} style={{ marginLeft: 8 }} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Features;
