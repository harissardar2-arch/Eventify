
import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';

const eventData = [
  {
    id: 1,
    icon: '🎵',
    name: 'Live Music Festival',
    category: 'Music',
    date: 'December 15, 2026',
    location: 'Karachi, Pakistan',
    price: 'Rs. 2,500',
    color: 'music',
    description: 'Enjoy an exciting live music experience with amazing performances.'
  },
  {
    id: 2,
    icon: '💻',
    name: 'Tech Innovation Summit',
    category: 'Technology',
    date: 'December 20, 2026',
    location: 'Lahore, Pakistan',
    price: 'Rs. 1,500',
    color: 'tech',
    description: 'Explore new technology, innovation and ideas.'
  },
  {
    id: 3,
    icon: '🎨',
    name: 'Creative Art Exhibition',
    category: 'Art',
    date: 'December 25, 2026',
    location: 'Islamabad, Pakistan',
    price: 'Rs. 1,000',
    color: 'art',
    description: 'Discover creative artwork and artistic talent.'
  },
  {
    id: 4,
    icon: '⚽',
    name: 'Football Championship',
    category: 'Sports',
    date: 'December 28, 2026',
    location: 'Karachi, Pakistan',
    price: 'Rs. 2,000',
    color: 'tech',
    description: 'Watch an exciting football championship.'
  }
];

function Events({ onViewDetails, initialSearch = '' }) {
  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState('All');

const [eventData, setEventData] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}/api/events`)
    .then((response) => response.json())
    .then((data) => {
      console.log('API DATA:', data);
      setEventData(data.events);
      setLoading(false);
    })
    .catch((error) => {
      console.log('API ERROR:', error);
      setLoading(false);
    });
}, []);console.log('API Events:', eventData);
  const filteredEvents = eventData.filter((event) => {
    const matchesSearch =
      event.name.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === 'All' || event.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="events-section">
      <h1>Explore All Events</h1>
      <p>Find your next unforgettable experience.</p>

      <div className="events-search">
        <input
          type="text"
          placeholder="Search event or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Music</option>
          <option>Technology</option>
          <option>Art</option>
          <option>Sports</option>
        </select>
      </div>
{loading && <p>Loading events...</p>}
      <div className="event-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onViewDetails={onViewDetails}
            />
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
     
    </section>
  );
}

export default Events;
