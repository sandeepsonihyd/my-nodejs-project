// app.js
const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello, this is my web application!');
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
