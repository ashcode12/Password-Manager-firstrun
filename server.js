const express = require('express');
const app = express();
const PORT = 3000;

// Define a test route directly in server.js
app.get('/api', (req, res) => {
    res.send('Welcome to the Password Manager API');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
