const express = require('express');
const  router = express.Router();
const all = require('../common');

const jwt = require('jsonwebtoken');



const users = [
  {
    username: 'john@gmail.com',
    password: 'admin',
    role: 'admin'
  }, {
    username: 'pradeep@gmail.com',
    password: 'admin',
    role: 'admin'
  }
]

router.post('/login', (req, res) => {
  console.log('req')
  const { username, password } = req.body;
  const user = users.find(u => { return u.username === username && u.password === password });
  if (user) {
      const token = jwt.sign({ username: user.username, role: user.role }, all.accessTokenSecret);
      res.json({token});
  } else {
      res.send('Username or password incorrect');
    }
  });
  router.post('/logout', (req, res) => {
    console.log('logout')
    res.send("Logout successful");
  });



  module.exports = router;
