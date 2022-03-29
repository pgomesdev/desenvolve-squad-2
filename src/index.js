require("dotenv").config();

const express = require("express");

const routes = require("./routes");

const port = parseInt(process.env.NODE_PORT, 10) || 3000;

const app = express();

// routes
app.use(routes);

// server initialization
app.listen(port, () => console.log(`Server running on port ${port}`));
