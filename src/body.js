// External Module
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// app.use((req, res, next) => {
//   console.log("First Dummy Middleware", req.url, req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second Dummy Middleware", req.url, req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Third Middleware", req.url, req.method);
//   res.send("<h1>Welcome to Complete Coding</h1>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);  //Handling / for GET / GET
  res.send(`<h1>Welcome to Complete Coding</h1>`);
})

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);   //Handling /contact-us for GET /contact-us GET
  res.send(
    `<h1>Please give your details here</h1>
    <form action="/submitted" method="POST">
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="email" name="email" placeholder="Enter your Email" />
      <input type="Submit" />
    </form>
    `);
});

app.post("/submitted", (req, res, next) => {
  console.log("First handling", req.url, req.method, req.body); //First handling /submitted POST undefined
  next();
})

app.use(bodyParser.urlencoded());  //cmmnt krle undefined dkhabe

app.post("/submitted", (req, res, next) => {
  console.log("Handling /submitted for POST", req.url, req.method, req.body);
  // Handling / submitted for POST / submitted POST { name: 'hello', email: 'ethicalcyber@gmail.com' }
  res.send(`<h1>We will contact you shortly</h1>`);
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});