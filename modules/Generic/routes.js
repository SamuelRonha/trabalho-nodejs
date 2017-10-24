const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
mongoose.Promise = Promise

const Controller = require('./controller')

router.get('/', (req, res, next) => {
        // var obj = req.query.name;
        // if(req.query.name){
        //
        // }
        if (req.query.name == undefined && req.query.title == undefined)
            return Controller.find(req, res)
        return Controller.findByName(req, res)
    }
)


router.get('/:id', (req, res, next) =>
    Controller.findOne(req, res)
)

router.get(':name?', (req, res, next) =>
    Controller.findByName(req, res)
)

router.get('/:id/populate', (req, res, next) =>
    Controller.populate(req, res)
)

router.post('/', (req, res, next) =>
    Controller.create(req, res)
)

router.put('/:id', (req, res, next) =>
    Controller.update(req, res)
)

router.delete('/:id', (req, res, next) =>
    Controller.remove(req, res)
)


module.exports = router
