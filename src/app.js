const x = require('express');
const y = require('http');


const app = x();

app.use("/",(req, res, next) => {  // "/" default route dle justr first e jabe
  console.log("Came in first middleware", req.url, req.method);
   res.send("<p>Welcome to Complete Coding Nodejs series</p>");
  // res.send("<p>Welcome</p>"); dle porer middleware e res.send() dya zabe na, karon response already send hoye gese, tai next() dile porer middleware e res.send() dya jabe na

  // app.use("/", (req, res, next) => {
  //   console.log("Came in first middleware", req.url, req.method);
  //   res.send("<p>Welcome</p>");
  //   next();
  // });  

  // [Server will crash]

  next(); //next na dle second middleware e jabe na
  });


// Server running on address http://localhost:3002
// Came in first middleware / GET

app.use("/submit-details",(req, res, next) => {  // "/submit-details" route dle first,second 2 tai zabe
  console.log("Came in second middleware", req.url, req.method);
  // res.send("<p>Welcome to Complete Coding Nodejs series</p>");
  // next();
});


// Server running on address http://localhost:3002
// Came in first middleware / submit - details GET
// Came in second middleware / GET


// const server = y.createServer(app);
const PORT = 3002;
// server.listen(PORT, () => {
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});




// Key point: app.use() runs for every request your server receives.

//2️⃣ What is / favicon.ico ?

//   When you open a page in a browser, the browser automatically asks for a small icon for the tab.

// That URL is always / favicon.ico.

// You didn’t type / favicon.ico anywhere, but the browser does it by itself.

// 3️⃣ Why it shows in your console

// You open in browser: http://localhost:3002 → first request /

// Logs:

// Came in first middleware / GET
// Came in second middleware / GET


// Browser automatically requests favicon → second request / favicon.ico

// Logs:

// Came in first middleware / favicon.ico GET
// Came in second middleware / favicon.ico GET


// So you are seeing two requests: one for the page, one for the favicon.

// 4️⃣ How to fix / ignore / favicon.ico

// If you only want to log “real” page requests:

// app.use((req, res, next) => {
//   if (req.url === '/favicon.ico') return next(); // skip logging
//   console.log("Came in first middleware", req.url, req.method);
//   next();
// });


// Now the / favicon.ico request won’t appear in your console.