const express = require('express');
const app = express();
const port = 3005;

app.get('/callback', (req, res) => {
    res.send('Temporary Redirect URL Page');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});