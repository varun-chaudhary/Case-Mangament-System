const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user'); 
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/cms');

app.post('/register', (req, res) => {
    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

app.listen(3000, () => {
    console.log('server is running');
});
