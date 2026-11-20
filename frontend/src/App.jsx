
import { useState } from 'react';
import './App.css';

import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Login from './pages/login';
import Signup from './pages/Signup';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [homepageSearch, setHomepageSearch] = useState('');
  const [bookingMessage, setBookingMessage] = useState('');

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    setCurrentPage('details');
    setBookingMessage('');
  };

  const goHome = () => {
    setCurrentPage('home');
    setSelectedEvent(null);
    setBookingMessage('');
  };

  const handleHomeBooking = (eventName) => {
    setBookingMessage(`Booking confirmed for ${eventName}! 🎉`);
  };

  const handleLogin = (email) => {
    alert(`Welcome to Eventify! ${email}`);
    goHome();
  };

  const handleSignup = (user) => {
    alert(`Signup successful! Welcome ${user.name}`);
    setCurrentPage('login');
  };

  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo" onClick={goHome}>
          Eventify<span>.</span>
        </h2>

        <div className="nav-links">
          <a href="#home" onClick={goHome}>Home</a>

          <a href="#events" onClick={(e) => {
            e.preventDefault();
            setCurrentPage('events');
          }}>
            Events
          </a>

          <a href="#categories" onClick={goHome}>Categories</a>
          <a href="#footer" onClick={goHome}>Contact</a>
        </div>

        <button
          className="login-btn"
          onClick={() => setCurrentPage('login')}
        >
          Login
        </button>
      </nav>

      {currentPage === 'home' && (
        <>
          <section className="hero" id="home">
            <div className="hero-content">
              <span className="hero-tag">
                YOUR NEXT EXPERIENCE STARTS HERE
              </span>

              <h1>
                Discover Events.<br />
                <span>Book Experiences.</span>
              </h1>

              <p>
                Find amazing events, connect with people and create
                unforgettable memories.
              </p>

              <div className="search-box">
                <input
                  placeholder="Search events..."
                  value={homepageSearch}
                  onChange={(e) => setHomepageSearch(e.target.value)}
                />

                <input placeholder="Location" />

                <button onClick={() => setCurrentPage('events')}>
                  Search Events
                </button>
              </div>
            </div>
          </section>

          <section className="categories" id="categories">
            <h2>Explore Categories</h2>
            <p>Find events that match your interests.</p>

            <div className="category-list">
              <div className="category-item">🎵<span>Music</span></div>
              <div className="category-item">💻<span>Technology</span></div>
              <div className="category-item">🎨<span>Art</span></div>
              <div className="category-item">⚽<span>Sports</span></div>
              <div className="category-item">🎤<span>Business</span></div>
            </div>
          </section>

          <section className="events-section" id="events">
            <div className="section-heading">
              <div>
                <h2>Featured Events</h2>
                <p>Discover exciting events happening soon.</p>
              </div>

              <a href="#events" onClick={(e) => {
                e.preventDefault();
                setCurrentPage('events');
              }}>
                View All Events →
              </a>
            </div>

            <div className="event-grid">
              <div className="event-card">
                <div className="event-image music">🎵</div>
                <div className="event-info">
                  <h3>Live Music Festival</h3>
                  <p>📅 December 15, 2026</p>
                  <p>📍 Karachi, Pakistan</p>
                  <div className="event-bottom">
                    <strong>Rs. 2,500</strong>
                    <button onClick={() => handleHomeBooking('Live Music Festival')}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="event-card">
                <div className="event-image tech">💻</div>
                <div className="event-info">
                  <h3>Tech Innovation Summit</h3>
                  <p>📅 December 20, 2026</p>
                  <p>📍 Lahore, Pakistan</p>
                  <div className="event-bottom">
                    <strong>Rs. 1,500</strong>
                    <button onClick={() => handleHomeBooking('Tech Innovation Summit')}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="event-card">
                <div className="event-image art">🎨</div>
                <div className="event-info">
                  <h3>Creative Art Exhibition</h3>
                  <p>📅 December 25, 2026</p>
                  <p>📍 Islamabad, Pakistan</p>
                  <div className="event-bottom">
                    <strong>Rs. 1,000</strong>
                    <button onClick={() => handleHomeBooking('Creative Art Exhibition')}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {bookingMessage && (
              <p className="booking-success">{bookingMessage}</p>
            )}
          </section>
        </>
      )}

      {currentPage === 'events' && (
        <Events
          onViewDetails={handleViewDetails}
          initialSearch={homepageSearch}
        />
      )}

      {currentPage === 'details' && (
        <EventDetails
          event={selectedEvent}
          onBack={() => setCurrentPage('events')}
        />
      )}

      {currentPage === 'login' && (
        <Login
          onLogin={handleLogin}
          onSignup={() => setCurrentPage('signup')}
        />
      )}

      {currentPage === 'signup' && (
        <Signup
          onSignup={handleSignup}
          onLogin={() => setCurrentPage('login')}
        />
      )}

      <footer id="footer">
        <h2>Eventify<span>.</span></h2>
        <p>Discover Events. Book Experiences.</p>
        <p className="copyright">
          © 2026 Eventify. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
