
import { useState } from 'react';

function EventDetails({ event, onBack }) {
  const [booked, setBooked] = useState(false);
 const [quantity, setQuantity] = useState(1);
  if (!event) {
    return <h2>Event not found.</h2>;
  }
const unitPrice = Number(event.price.replace(/[^\d]/g, ''));
const totalPrice = unitPrice * quantity;
  const handleBooking = () => {
    setBooked(true);
  };

  return (
    <section className="event-details">
      <button onClick={onBack}>← Back to Events</button>

      <div className={`event-image ${event.color}`}>
        <span>{event.icon}</span>
      </div>

      <h1>{event.name}</h1>

      <p>📅 {event.date}</p>
      <p>📍 {event.location}</p>

      <h2>Ticket Price: {event.price}</h2>

<label>Ticket Quantity:</label>

<input
  type="number"
  min="1"
  value={quantity}
  disabled={booked}
  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
/>

<h2>Total Price: Rs. {totalPrice.toLocaleString('en-PK')}</h2>

      <p>{event.description}</p>

      <button onClick={handleBooking}>
        {booked ? 'Booking Confirmed ✓' : 'Book Now'}
      </button>

     {booked && (
  <div className="booking-success">
    <h3>🎉 Booking Confirmed!</h3>
    <p>Event: {event.name}</p>
    <p>Tickets: {quantity}</p>
    <p>Total Amount: Rs. {totalPrice.toLocaleString('en-PK')}</p>
    <p>Congratulations! Your booking is confirmed.</p>
  </div>
)}
    </section>
  );
}

export default EventDetails;
