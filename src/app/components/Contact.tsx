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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can later integrate email API or backend here
    alert('Message sent!');
    setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });
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
              required
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
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <span className="focus"></span>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>

       <div className="contact-links">
        <h3 className="heading">Or</h3>

        <div className="contact-icons">
            <a
            href="mailto:aadit.gupta@mail.utoronto.ca"
            className="email-icon"
            >
            <i className="bx bx-envelope"></i>
            </a>

            <a
            href="https://www.linkedin.com/in/aadit-gupta-1411ag"
            target="_blank"
            className="linkedIn-icon"
            >
            <i className="bx bx-linkedin"></i>
            </a>
        </div>
        </div>
    </section>
  );
}
