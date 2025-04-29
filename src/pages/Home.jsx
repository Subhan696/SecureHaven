import React from 'react';
import { Link } from 'react-router-dom';
import reviews from '../data/reviewsData';
import video  from "../assets/voting-demo.mp4";
import './Home.css';

const Home = () => {
  const featuredReviews = reviews.slice(0, 3); // show top 3 reviews

  return (
    <>
      {/* Hero Section */}
      <section className="home-section">
        <div className="home-content">
          <h2>Secure, Cloud-based Elections</h2>
          <p>
            Create an election for your school or organization in seconds. Your voters can vote from any location on any device.
          </p>
          <Link to="/create" className="btn start-btn">
            Create a Free Election
          </Link>
          <p className="subtext">
            * Elections with up to 20 voters are free. <Link to="/pricing">View Pricing</Link>
          </p>
        </div>

        <div className="home-video">
          <video 
            src={video}
            autoPlay
            loop
            playsInline
            alt="Online Voting Illustration"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h3>Why Choose Secure Haven?</h3>
        <div className="features-grid">
          <div className="feature-card">
            <h4>End-to-End Encryption</h4>
            <p>Your votes are protected with top-tier encryption protocols.</p>
          </div>
          <div className="feature-card">
            <h4>Real-Time Results</h4>
            <p>Get instant insights as soon as voting ends — no delays.</p>
          </div>
          <div className="feature-card">
            <h4>Mobile Friendly</h4>
            <p>Voters can participate easily from any device, anytime.</p>
          </div>
          <div className="feature-card">
            <h4>Fraud Detection</h4>
            <p>Our system flags suspicious activity automatically.</p>
          </div>
        </div>
      </section>

      {/* Reviews Preview Section */}
      <section className="reviews-section">
        <h3>What People Are Saying</h3>
        <div className="review-list">
          {featuredReviews.map((review, index) => (
            <div className="review-card" key={index}>
              <p>"{review.text}"</p>
              <div className="review-stars">
                {'⭐'.repeat(review.stars)}
              </div>
              <span>{review.author}</span>
            </div>
          ))}
        </div>
        <p>
          <Link to="/reviews" className="btn view-all-reviews">
            View All Reviews
          </Link>
        </p>
      </section>
    </>
  );
};

export default Home;
