const express = require("express");
const userRouter = require("./routes/users");

// Our app
const app = express();

// Listening on the browser
app.listen(5000);

// Setting up our HTML engine
app.set("view engine", "ejs");

// Creating the index route
app.get("/", (req, res, next) => {
  console.log("Woza");
  //   res.sendStatus(100);
  // res.download("server.js");
  // res.send("Woza to you too!!!");

  // Chaining to the response
  // res.status(500).send("Hallo!");
  // res.send("Hallo!");
  // Sending json
  // res.status(500).json({ message: "Hallo" });
  // res.json({ message: "Hallo" });
  // res.send("Hallo!");

  // One express route can only handle one response data method e.g. send, json, render etc

  // Sending HTML to client
  // res.render("index");

  // We can also pass variables from the server
  res.render("index", {
    audience: "Jesh",
    audience1: "Mbogi",
    audience2: "Devs",
  });
});

// Users routes
// Users list
// app.get("/users", (req, res) => {
//   res.send("Users List: []");
// });

// // Create new user route
// app.get("/users/new", (req, res) => {
//   // I just learned by myself that you can create HTML elements using the send method like the input below
//   res.send("Create New User: <input />");
// });

app.use("/users", userRouter);
