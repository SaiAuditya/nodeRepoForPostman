const express = require('express');
const app = express();
const postRoutes = require('./routes/posts');
const filesRoute = require('./routes/files');

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.use("/api/posts",postRoutes);
app.use("/api/files",filesRoute);
module.exports = app;
