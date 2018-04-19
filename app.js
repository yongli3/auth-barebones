// app entry point
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

// Connect to database
mongoose.Promise = global.Promise;
mongoose.connect(config.uri);

// On connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database " + config.uri);
});

// On error
mongoose.connection.on("error", (err) => {
  console.log("Database error: " + err);
});

const app = express();
const users = require("./routes/users");
const records = require("./routes/records");

// PORT number
const port = 3000;

// CORS middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Body Parser middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

// Users
app.use("/users", users);
app.use("/records", records);

// Index route
app.get("/", (req, res) => {
  console.log("requet to /");
  res.send("Invalid");
});

// Make sure everything else will be redirect to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start server
app.listen(port, () => {
  console.log("Server started on port " + port);
});


