const express = require('express');
const app = express();
const HOMEPAGE = require('./homepage');
const ADDHOME = require('./add-home');
const SUBMITTED = require('./submitted');

app.use(express.urlencoded());    //submit form er body dkhay. req.body er upore hte hbe

app.use(HOMEPAGE);
app.use(ADDHOME);
app.use(SUBMITTED);


// 404 handler (should be placed after all other routes)
app.use((req, res, next) => {
  res.status(404).send('<h1>404 - Your page is not found on airbnb</h1>');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});