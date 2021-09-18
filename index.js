const express = require('express');
const app = express();
const { User } = require('./models');

app.use(express.json());

app.get('/users', (req, res) => {
  User.findAll().then((users) => {
    res.status(200).json(users);
  });
});

app.post('/users', (req, res) => {
  User.create({
    Username: req.body.Username,
    Password: req.body.Password,
  }).then((user) => {
    res.status(201).json(user);
  }).catch((err) => {
    res.status(422).json("Can't create user");
  });
});

function onRun(){
  console.log("Server is running on http://localhost:3000");
}

app.listen(3000, onRun);