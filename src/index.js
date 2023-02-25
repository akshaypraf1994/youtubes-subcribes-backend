const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");
const connectDatabase = require("./database/db.js");
const port = process.env.PORT || 3000;

connectDatabase();

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`));
