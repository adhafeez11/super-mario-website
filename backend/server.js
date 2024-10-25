const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '..'))); // Serve static files from the root

// API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Let the adventure begin!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
