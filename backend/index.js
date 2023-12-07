  const express = require("express");
  const app = express();

  const bodyParser = require('body-parser');
  app.use(bodyParser.json()); // Parse JSON-encoded bodies
  app.use(bodyParser.urlencoded({ extended: true }));


  const port = 4000;

  const cors = require("cors");
  require("dotenv").config();

  app.use(cors());

  const dbConnect = require("./connection/Database");
  dbConnect();

  const router = require("../backend/Routes/userRoutes");
  app.use("/api/v1", router);

  app.get('/', (req, res) => {
    res.send('Hello, this is the backend server!');
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });