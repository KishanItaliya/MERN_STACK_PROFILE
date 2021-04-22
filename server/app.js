const dotenv = require("dotenv");
const express = require("express");
const app = express();

// dotenv config
dotenv.config({ path: "./config.env" });

// Database config
require("./db/connection");

// Middlewares
app.use(express.json());
app.use(require("./routes/auth"));

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log("Middleware");
  next();
};

// Routes
app.get("/about", middleware, (req, res) => {
  res.send("Hello, world");
});

app.listen(PORT, (req, res) => {
  console.log(`server is running at port ${PORT}`);
});
