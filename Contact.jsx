import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);

    // Clear form fields after submission
    setFormData({ name: '', email: '', message: '' });

    // User feedback
    alert('Thank you! Your message has been sent.');
  };

  return (
    <div className="page-container">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, feel free to reach out to us. We're here to help!</p>

        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Email us at <a href="mailto:support@eventify.com"><strong>support@eventify.com</strong></a>
          </p>
          <p>
            Or give us a call at <a href="tel:+11234567890"><strong>+1 (123) 456-7890</strong></a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          />

          <button type="submit" className="button primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
