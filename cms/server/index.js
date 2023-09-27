const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/user'); 
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/cms');
app.post('/login', (req,res)=>{
    const {email,pass} =req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.pass===pass){
                res.json("Success");
            }
            else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("User does not exist");
        }
    })
    .catch((err)=>console.log(err));
    
});

app.post('/register', (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

app.listen(3000, () => {
    console.log('server is running');
});
