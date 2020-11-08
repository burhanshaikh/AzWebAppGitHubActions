'use strict';

const exp = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = exp();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
