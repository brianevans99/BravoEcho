const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dataRoutes = express.Router();
const PORT = 4000;

let Data = require('./model');


app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/bravoecho', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log('MongoDB database connection established');
})

dataRoutes.route('/api').get(function(req, res) {
    Data.find(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

dataRoutes.route('/api/:id')
.get(function(req, res) {
    let id = req.params.id;
    Data.findById(id, function(err, data) {
        res.json(data);
    });
});

dataRoutes.route('/api/add')
.post(function(req, res) {
    let data = new Data(req.body);
    data.save()
    .then(data => {
        res.status(200).json({'data': 'data added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new data failed');
    });
});

dataRoutes.route('/api/update/:id')
.delete(function(req, res) {
    Data.findById(req.params.id, function(err, data) {
        if (!data)
        res.status(404).send('data is not found');
        else 

        data.remove()
        .then(data => {
            res.json('Data updated');
        })
            .catch(err => {
                res.status(400).send('No data to delete');

        });
    });
})
.patch(function(req, res) {
    Data.findById(req.params.id, function(err, data) {
        if (!data)
        res.status(404).send('data is not found');
        else data.data_ticker = req.body.data_ticker;

        data.save()
        .then(data => {
            res.json('Data updated');
        })
            .catch(err => {
                res.status(400).send('update not possible');

        });
    });
});

app.use('/btg', dataRoutes);

app.listen(PORT, function() {
    console.log(`server is listening on port ${PORT}`);
});