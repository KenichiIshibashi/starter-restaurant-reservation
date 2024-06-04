const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const asyncErrorBoundary = require("./errors/asyncErrorBoundary");
const methodNotAllowed = require("./errors/errorHandler");
const errorHandler = require("./errors/methodNotAllowed");
const notFound = require("./errors/notFound");
const reservationsRouter = require("./reservations/reservations.router");
const tablesRouter = require("./tables/tables.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/reservations", reservationsRouter);
app.use("tables", tablesRouter);

app.use(asyncErrorBoundary);
app.use(methodNotAllowed);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
