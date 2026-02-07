const express = require('express');
const homePage = express.Router(); 
const path = require('path');  
//homePage er moddhe route gula thakbe. homePage ke export krbo. app.js e import krbo. 

homePage.get('/', (req, res, next) => {
  console.log("Handling home page request", req.url, req.method);  //Handling home page request / GET
  // res.send(
  //   `<h1> Welcome to airbnb </h1>
  //   <a href="/add-home">Add Home</a>  <!-- link e click krle /add-home e zabe -->
  //   `);

res.sendFile(path.join(__dirname, '../views/home.html'));  

//   1️⃣ res.sendFile(...)
//   res = response object(Express gives this)
//   sendFile = tells Express:
// “Send this file to the user’s browser”
// So basically:
// “Hey browser, show this HTML file.”


//   3️⃣ path.join(__dirname, '../views/home.html')
//   path.join() safely creates a correct file path
//   '../views/home.html' means:
// .. → go one folder back
// then go into views
// then open home.html

});


module.exports = homePage;