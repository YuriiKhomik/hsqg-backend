const express = require("express");
const cors = require("cors");
require("dotenv").config();

const quotesRouter = require("./routes/api/quotes");

const app = express();

app.use(cors());

app.use("/api/quotes", quotesRouter);

module.exports = app;
