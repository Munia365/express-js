const express = require('express');
const homePage = express.Router(); //const app = express();

//homePage er moddhe route gula thakbe. homePage ke export krbo. app.js e import krbo. 

homePage.get('/', (req, res, next) => {
  console.log("Handling home page request", req.url, req.method);  //Handling home page request / GET
  res.send(
    `<h1> Welcome to airbnb </h1>
    <a href="/add-home">Add Home</a>  <!-- link e click krle /add-home e zabe -->
    `);
});


module.exports = homePage;