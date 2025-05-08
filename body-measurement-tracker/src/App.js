import React, { useEffect } from "react";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-area">BodyTrack</div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/blog">Blog</a>
      </div>
      <div className="nav-auth">
        <button className="nav-btn">Login</button>
        <button className="nav-btn nav-btn-signup">Signup</button>
      </div>
    </nav>
  );
}

function SearchBar() {
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search for products, services, or blog posts"
        aria-label="Search"
      />
      <button aria-label="Search Button">
        <span role="img" aria-label="search">🔍</span>
      </button>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="HeroSection">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-text">
          <h1>Transform Your Fitness Journey</h1>
          <p>Track, compare, and achieve your body measurement goals with ease.</p>
        </div>
        <form className="hero-contact-card">
          <h2>Contact Us</h2>
          <input type="text" placeholder="Name" aria-label="Name" />
          <input type="email" placeholder="Email" aria-label="Email" />
          <textarea placeholder="Message" aria-label="Message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

function Carousel({ items }) {
  return (
    <div className="Carousel">
      {items.map((item, idx) => (
        <div key={idx} className="feature-card">
          <div className="feature-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.link && <a href={item.link}>Learn More</a>}
        </div>
      ))}
    </div>
  );
}

function KeySellingPoints() {
  return (
    <section className="KeySellingPoints">
      <div className="ksp ksp-left">
        <div className="ksp-text">
          <h2>Track Progress Over Time</h2>
          <p>Easily log and compare your body measurements to see your fitness journey in action.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" alt="Progress" />
      </div>
      <div className="ksp ksp-right">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Goals" />
        <div className="ksp-text">
          <h2>Set and Achieve Goals</h2>
          <p>Set personalized goals and stay motivated as you reach new milestones.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
      <div className="footer-contact">
        <span>Contact: info@yourcompany.com | +1 234 567 8901</span>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="footer-copyright">
        © 2025 BodyTrack
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const featureItems = [
    { icon: "📏", title: "Body Measurement Tracker", description: "Log and track your body stats.", link: "/features/tracker" },
    { icon: "📊", title: "Progress Charts", description: "Visualize your progress.", link: "/features/charts" },
    { icon: "🎯", title: "Goal Setting", description: "Set and achieve your fitness goals.", link: "/features/goals" },
    { icon: "🔔", title: "Reminders", description: "Never miss a measurement day.", link: "/features/reminders" },
    { icon: "🔒", title: "Privacy First", description: "Your data is safe and secure.", link: "/features/privacy" },
  ];

  return (
    <div>
      <Navbar />
      <SearchBar />
      <HeroSection />
      <section className="features-section">
        <h2 className="features-title">Features</h2>
        <Carousel items={featureItems} />
      </section>
      <KeySellingPoints />
      <Footer />
    </div>
  );
}
