var express = require('express')
var router = express.Router()

var Message = require('../models/message')

router.get('/', function(req, res, next) {
    Message.find()
    .exec(function(err, messages) {
        if (err) {
            return res.status(500).json({
                title: 'An Error occurred while trying to retrieve data (messages) from database',
                error: err
            })
        }
        res.status(200).json({
            message: 'Success',
            obj: messages
        })
    })
})

router.post('/', function(req, res, next) {
    var message = new Message({
        content: req.body.content, 
    })
    console.log(message)
    message.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An Error occurred while trying to save data (a message) to database',
                error: err
            })
        }
        res.status(201).json({
            message: "Message was saved",
            obj: result
        })

    } )
})

module.exports = router