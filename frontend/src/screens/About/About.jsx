import React from "react";
import { Link } from "react-router-dom";
import {
  FaCompass,
  FaHotel,
  FaUtensils,
  FaUserShield,
  FaMapMarkedAlt,
  FaClock,
} from "react-icons/fa";
import "./About.css";

function About() {
  const features = [
    {
      icon: <FaCompass />,
      title: "Adventure Travel",
      description:
        "Discover breathtaking destinations and unique experiences across the globe with our curated travel packages.",
    },
    {
      icon: <FaHotel />,
      title: "Luxury Accommodations",
      description:
        "Stay in hand-picked hotels and resorts that offer comfort, luxury, and unforgettable experiences.",
    },
    {
      icon: <FaUtensils />,
      title: "Culinary Experiences",
      description:
        "Savor local and international cuisine with our specially designed dining packages and food tours.",
    },
    {
      icon: <FaUserShield />,
      title: "Secure Booking",
      description:
        "Book with confidence using our secure payment system and get instant confirmation.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Guided Tours",
      description:
        "Expert local guides to help you explore and understand the culture and history of each destination.",
    },
    {
      icon: <FaClock />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to assist you before, during, and after your journey.",
    },
  ];

  const stats = [
    { number: "50+", label: "Destinations" },
    { number: "1000+", label: "Happy Travelers" },
    { number: "100+", label: "Local Partners" },
    { number: "4.8", label: "Average Rating" },
  ];

  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>Discover Your Next Adventure</h1>
        <p>Making travel dreams come true since 2020</p>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At Travel Booking App, we're passionate about connecting travelers
            with extraordinary destinations. Our mission is to make travel
            planning seamless and enjoyable, offering carefully curated
            experiences that create lasting memories.
          </p>
        </section>

        <section className="features-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-content">
            <div className="value-item">
              <h3>Quality</h3>
              <p>
                We ensure the highest standards in accommodations and services.
              </p>
            </div>
            <div className="value-item">
              <h3>Authenticity</h3>
              <p>
                We provide genuine local experiences and cultural connections.
              </p>
            </div>
            <div className="value-item">
              <h3>Reliability</h3>
              <p>
                We deliver on our promises with transparent booking processes.
              </p>
            </div>
          </div>
        </section>

        <div className="about-cta">
          <h2>Ready to Start Your Journey?</h2>
          <div className="cta-buttons">
            <Link to="/home" className="primary-button">
              Explore Destinations
            </Link>
            <Link to="/contact" className="secondary-button">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
