const express = require('express');

const app = express();

const userRouter = require('./user');


app.use(userRouter);  


    app.get("/add-home", (req, res, next) => {
      console.log("Handling /add-home request", req.url, req.method);   //Handling /add-home request /add-home GET
    res.send(
    `<h1> Register your home here: </h1 >
  <form action="/submitted" method="POST">   <!-- form fill krar por /add-home & POST method e zabe -->
    <input type="text" name="houseName" placeholder="Enter the name of your house" />
    <input type="submit" />
  </form>
    `);
});

app.use(express.urlencoded());    //submit form er body dkhay. req.body er uporei hte hbe

app.post("/submitted", (req, res, next) => {
  console.log("Handling /submitted request:", req.url, req.method, req.body); //Handling /submitted request: /submitted POST { houseName: 'abcd' }
    res.send(`
       <h1>Home Registered successfully</h1>
    <a href="/">Go to Home</a>    <!-- link e click krle / e zabe -->
    `);
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});