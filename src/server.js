const express = require('express');
const app = express();
const PORT = 3000;

// Import routes from the routes folder
const routes = require('./routes/index');
app.use('/api', routes);  // All routes will start with /api

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

