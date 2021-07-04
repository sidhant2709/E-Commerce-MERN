const express = require("express");
const app = express();

const errorMiddleWare = require("./middlewares/errors");

app.use(express.json());

//Import all the routes

const products = require("./routes/product");

app.use("/api/v1", products);

//Middleware to handle error
app.use(errorMiddleWare);

module.exports = app;
