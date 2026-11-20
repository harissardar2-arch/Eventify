
function EventCard({ event, onViewDetails }) {
  return (
    <div className="event-card">
      <div className={`event-image ${event.color}`}>
        <span>{event.icon}</span>
      </div>

      <div className="event-info">
        <h3>{event.name}</h3>
        <p>📅 {event.date}</p>
        <p>📍 {event.location}</p>

        <div className="event-bottom">
          <strong>{event.price}</strong>
          <button onClick={() => onViewDetails(event)}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
