import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Eventify</h1>
        <p>Your ultimate destination for discovering, creating, and hosting amazing events.</p>
      </header>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At Eventify, we are passionate about connecting people through unique and memorable experiences. 
          Whether you're looking to attend exciting events or host your own, we provide a seamless platform that makes event discovery and management easy.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <p>
          Our team is a group of dedicated professionals with a shared vision of making event planning and participation accessible to everyone. 
          We are driven by creativity, technology, and innovation.
        </p>
        <div className="team-members">
          <div className="team-member">
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <h3>Jane Smith</h3>
            <p>Product Manager</p>
          </div>
          <div className="team-member">
            <h3>Emily Davis</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Eventify?</h2>
        <ul>
          <li><strong>Easy Event Discovery:</strong> Find events tailored to your interests and location.</li>
          <li><strong>Seamless Event Creation:</strong> Quickly create and manage your events with our intuitive tools.</li>
          <li><strong>Community Engagement:</strong> Connect with like-minded individuals through events that inspire you.</li>
          <li><strong>End-to-End Support:</strong> From event creation to attendee management, we’re with you every step of the way.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
