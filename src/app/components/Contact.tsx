'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    // You can later integrate email API or backend here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span className="focus"></span>
          </div>

          <div className="input-field">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="focus"></span>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
            />
            <span className="focus"></span>
          </div>

          <div className="input-field">
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <span className="focus"></span>
          </div>
        </div>

        <div className="textarea-field">
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <span className="focus"></span>
        </div>

        <div className="btn-box btns">
          <button 
            type="submit" 
            className="btn"
            disabled={isSubmitting}
            style={{
              opacity: isSubmitting ? 0.6 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>

      <div className="contact-links">
        <h3 className="heading" style={{ fontSize: '2.5rem', marginTop: '4rem' }}>
          Or reach out directly
        </h3>

        <div className="contact-icons">
          <a
            href="mailto:aadit.gupta@mail.utoronto.ca"
            className="email-icon"
            aria-label="Email me"
            style={{ textDecoration: 'none' }}
          >
            <i className="bx bx-envelope"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/aadit-gupta-1411ag"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedIn-icon"
            aria-label="Connect on LinkedIn"
            style={{ textDecoration: 'none' }}
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <p style={{
          fontSize: '1.6rem',
          color: 'rgba(237, 237, 237, 0.7)',
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          aadit.gupta@mail.utoronto.ca
        </p>
      </div>
    </section>
  );
}