const express = require('express');
const submitted = express.Router(); //const app = express();

//submitted er moddhe route gula thakbe. submitted ke export krbo. app.js e import krbo.

submitted.post("/submitted", (req, res, next) => {
  console.log("Handling /submitted request:", req.url, req.method, req.body); //Handling /submitted request: /submitted POST { houseName: 'abcd' }
  res.send(`
       <h1>Home Registered successfully</h1>
    <a href="/">Go to Home</a>    <!-- link e click krle / e zabe -->
    `);
});


module.exports = submitted;