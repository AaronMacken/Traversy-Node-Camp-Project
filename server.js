const express = require("express");
const dotenv = require("dotenv");
const app = express();
// load env vars
dotenv.config({ path: "./config/config.env" });

// Make the logger middleware available within our routes, created in middleware/logger.js
// const logger = require("./middleware/logger");
// app.use(logger);
const morgan = require("morgan");

// dev logging middleware (only run in dev environment)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// this allows us to separate our routes from the server.js file
const bootcamps = require("./routes/bootcamps"); // import route files (route.get | route.put ect.)
app.use("/api/v1/bootcamps", bootcamps); // mount routers - prefix bootcamp routes with the first param

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`)
);
