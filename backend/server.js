
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Eventify Backend is Running!');
});

app.get('/api/events', (req, res) => {
  res.json({
    message: 'Eventify Events API Working!',
    events: [
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
        location: 'Karachi, Pakistan',
        price: 'Rs. 1,000',
        color: 'art',
        description: 'Explore beautiful artwork and creative designs.'
      },
      {
        id: 4,
        icon: '⚽',
        name: 'Football Championship',
        category: 'Sports',
        date: 'December 28, 2026',
        location: 'Lahore, Pakistan',
        price: 'Rs. 2,000',
        color: 'sports',
        description: 'Enjoy an exciting football championship.'
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Eventify server running on http://localhost:${PORT}`);
});
