const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log(req.url, req.method);
//   next();
// });

app.get('/', (req, res, next) => {
  console.log("Handling home page request", req.url, req.method);
  res.send(
    `<h1> Welcome to airbnb </h1>
    <a href="/add-home">Add Home</a>  <!-- link e click krle /add-home e zabe -->
    `);
});


    app.get("/add-home", (req, res, next) => {
      console.log("Handling /add-home request", req.url, req.method);
    res.send(
    `<h1> Register your home here: </h1 >
  <form action="/submitted" method="POST">   <!-- form fill krar por /add-home & POST method e zabe -->
    <input type="text" name="houseName" placeholder="Enter the name of your house" />
    <input type="submit" />
  </form>
    `);
});

app.post("/submitted", (req, res, next) => {
  console.log("Handling /submitted request", req.url, req.method);
    res.send(`
       <h1>Home Registered successfully</h1>
    <a href="/">Go to Home</a>    <!-- link e click krle / e zabe -->
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});