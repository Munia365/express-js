const express = require('express');
const userRouter = express.Router(); //const app = express();

//userRouter er moddhe route gula thakbe. userRouter ke export krbo. app.js e import krbo. app.use("/users", userRouter) diye use krbo. mane /users/ e zabe

userRouter.get('/', (req, res, next) => {
  console.log("Handling home page request", req.url, req.method);  //Handling home page request / GET
  res.send(
    `<h1> Welcome to airbnb </h1>
    <a href="/add-home">Add Home</a>  <!-- link e click krle /add-home e zabe -->
    `);
});


module.exports = userRouter;