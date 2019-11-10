const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const dataRoutes = express.Router();
const PORT = 4000;


app.listen(PORT, function() {
    console.log(`server is listening on port ${PORT}`);
});