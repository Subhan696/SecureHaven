import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <main style={{ flex: 1 }}>
      {/* Hero Section */}
      <section style={{ width: '100%', padding: '3rem 0', background: '#0d1b2a', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Contact Us</h1>
            <p style={{ maxWidth: 700, color: '#cbd5e1', fontSize: '1.25rem' }}>
              Have questions or need assistance? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ width: '100%', padding: '3rem 0', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Get in Touch</h2>
                <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Mail size={24} style={{ color: '#2563eb', marginTop: 2 }} />
                  <div>
                    <h3 style={{ fontWeight: 700 }}>Email</h3>
                    <p style={{ color: '#64748b' }}>support@securehaven.com</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <Phone size={24} style={{ color: '#2563eb', marginTop: 2 }} />
                  <div>
                    <h3 style={{ fontWeight: 700 }}>Phone</h3>
                    <p style={{ color: '#64748b' }}>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <MapPin size={24} style={{ color: '#2563eb', marginTop: 2 }} />
                  <div>
                    <h3 style={{ fontWeight: 700 }}>Office</h3>
                    <p style={{ color: '#64748b' }}>
                      123 Election Avenue, Suite 200<br />San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ background: '#f8fafc', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(30,41,59,0.06)', padding: '2rem' }}>
              <form className="space-y-4">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="first-name" style={{ fontWeight: 500 }}>First name</label>
                    <input id="first-name" placeholder="Enter your first name" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="last-name" style={{ fontWeight: 500 }}>Last name</label>
                    <input id="last-name" placeholder="Enter your last name" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                  <label htmlFor="email" style={{ fontWeight: 500 }}>Email</label>
                  <input id="email" type="email" placeholder="Enter your email" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="subject" style={{ fontWeight: 500 }}>Subject</label>
                  <input id="subject" placeholder="Enter the subject" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="message" style={{ fontWeight: 500 }}>Message</label>
                  <textarea id="message" placeholder="Enter your message" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0', minHeight: 120 }} />
                </div>
                <button type="submit" style={{ width: '100%', background: '#2563eb', color: 'white', padding: '0.9rem', borderRadius: '8px', fontWeight: 600, fontSize: '1.1rem', border: 'none', cursor: 'pointer', marginTop: '1rem' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Contact;
