var express = require('express');
var router = express.Router();
var bcrypr = require('bcryptjs')

var User = require('../models/user')

router.post('/', function (req, res, next) {
    let user = new User({
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      email: bcrypr.hashSync(req.body.email, 10),
      password: req.body.password
    })
    user.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An Error occurred',
          error: err
        })
      }
      res.status(201).json({
        message: 'User created',
        obj: result
      })
    })
});

module.exports = router;
