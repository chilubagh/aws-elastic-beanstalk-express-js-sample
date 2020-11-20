const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('my world of AWS is awesome!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);