var express = require('express');
var router = express.Router();
// var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('index');
});
// router.get('/', function (req, res, next) {
//     res.render('node');
// });

// router.post('/', function (req, res, next) {
    
//     var user = new User({
//         firstName: 'litel',
//         lastName: 'josif',
//         password: 'super-secret',
//         email: req.body.email,
//     })
    
//     user.save()
//     console.log('saved', user)
    
//     res.redirect('/')
// });

module.exports = router;
