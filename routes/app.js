const express = require('express');
const app = express();
const HOMEPAGE = require('./homepage');
const ADDHOME = require('./add-home');
const SUBMITTED = require('./submitted');

app.use(express.urlencoded());    //submit form er body dkhay. req.body er upore hte hbe

app.use(HOMEPAGE);
app.use(ADDHOME);
app.use(SUBMITTED);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});