const a = require('express');  //whole express library are stored in a variable a.
const submitted = a.Router(); //express er Router() function k call korsi .
const path = require('path'); 

//submitted er moddhe route gula thakbe. submitted ke export krbo. app.js e import krbo.

submitted.post("/submitted", (req, res, next) => {
  console.log("Handling /submitted request:", req.url, req.method, req.body); //Handling /submitted request: /submitted POST { houseName: 'abcd' }
  
  // res.send(`
  //      <h1>Home Registered successfully</h1>
  //   <a href="/">Go to Home</a>    <!-- link e click krle / e zabe -->
  //   `);

res.sendFile(path.join(__dirname, '../views/submitted.html'));  

});


module.exports = submitted;