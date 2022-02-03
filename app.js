const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is the text that I wanted even more!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
