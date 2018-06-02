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
            message: 'Message was saved',
            obj: result
        })

    } )
})

router.patch('/:id', function(req, res, next) {
    Message.findById(req.params.id, function(err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An Error occurred while trying to retrive data (a message) to update',
                error: err
            })
        }
        if (!message) {
            return res.status(500).json({
                title: 'No message found!',
                error: {message: 'Message not found'}
            })
        }
        message.content = req.body.content
        message.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An Error occurred while trying to save data (a message) to database',
                    error: err
                })
            }
            res.status(200).json({
                message: 'Message was updated',
                obj: result
            })
        })
    })
})

module.exports = router