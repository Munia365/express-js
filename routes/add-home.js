const express = require('express');
const addHome = express.Router();

//addHome er moddhe route gula thakbe. addHome ke export krbo. app.js e import krbo.

addHome.get("/add-home", (req, res, next) => {
  console.log("Handling /add-home request", req.url, req.method);   //Handling /add-home request /add-home GET
  res.send(
    `<h1> Register your home here: </h1 >
  <form action="/submitted" method="POST">   <!-- form fill krar por /add-home & POST method e zabe -->
    <input type="text" name="houseName" placeholder="Enter the name of your house" />
    <input type="submit" />
  </form>
    `);
});


module.exports = addHome;