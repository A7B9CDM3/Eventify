import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to Eventify</h1>
        <p>Your one-stop solution for discovering and hosting amazing events.</p>
        <div className="hero-buttons">
          <button className="button primary">Discover Events</button>
          <button className="button secondary">Learn More</button>
        </div>
      </header>

      {/* Featured Section */}
      <section className="featured">
        <h2>Featured Events</h2>
        <div className="card-container">
          <div className="card">
            <h3>Music Concert</h3>
            <p>Experience live performances by top artists around the globe.</p>
            <button className="button">Explore</button>
          </div>
          <div className="card">
            <h3>Tech Conference</h3>
            <p>Join the latest discussions on cutting-edge technology and innovation.</p>
            <button className="button">Register</button>
          </div>
          <div className="card">
            <h3>Art Workshop</h3>
            <p>Unleash your creativity with hands-on art and craft sessions.</p>
            <button className="button">Join Now</button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Get Started Today</h2>
        <p>Sign up now and start exploring the world of incredible events.</p>
        <button className="button primary">Sign Up</button>
      </section>
    </div>
  );
};

export default Home;
