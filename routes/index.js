const express = require('express');

// Import our modular routers for /notes
const notesRouter = require('./notes.js');

// TODO: import your diagnostics route
const diagRouter = require('./diagnostics.js');
const app = express();

app.use('/notes', notesRouter);

// TODO: Initialize diagnostics route

module.exports = app;
