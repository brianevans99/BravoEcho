const express = require('express')
const path = require('path')
const app = express()
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const dataRoutes = express.Router();
const PORT = process.env.PORT || 4000

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`))
