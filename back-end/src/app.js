const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler"); // Handles general errors
const notFound = require("./errors/notFound"); // Handles 404 not found errors
const reservationsRouter = require("./reservations/reservations.router");
const tablesRouter = require("./tables/tables.router");

const app = express();

// Middleware for CORS and parsing JSON
app.use(cors());
app.use(express.json());

// Routes
app.use("/reservations", reservationsRouter);
app.use("/tables", tablesRouter);

// Handle 404 for unmatched routes
app.use(notFound);

// General error handling middleware
app.use(errorHandler);

module.exports = app;
