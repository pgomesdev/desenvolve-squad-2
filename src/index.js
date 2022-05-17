const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const express = require("express");

const routes = require("./routes");

const port = parseInt(process.env.NODE_PORT, 10) || 3000;

const app = express();

app.use(express.json())

// routes
app.use(routes);

// server initialization
app.listen(port, () => console.log(`Server running on port ${port}`));
