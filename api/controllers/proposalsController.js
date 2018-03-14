'use strict';
const Joi = require('joi');

var schema = require('../models/proposalsModel');

exports.add = function(req, res) {
    console.log('--> Received /add API call');

    Joi.validate(req.body, schema.add, function (err, value) { 
        if (err === null) {
            console.log('<-- Response provided');

            res.send(req.body)
        } else {
            console.log('<-- Body validation error');
            res.status(400).send({
                statusCode: 400,
                name: "VALIDATION ERROR",
                message: err
            });
        }
    });
  };