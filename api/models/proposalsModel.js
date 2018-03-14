'use strict';

const Joi = require('joi');

module.exports = {
    add: Joi.object().keys({
        ContactName: Joi.string().min(3).required(),
        BusinessName: Joi.string().min(3).required(),
        BusinessType: Joi.string().min(2).required(),
        TotalCurrentFees: Joi.number().required(),
        TotalNewFees: Joi.number().required(),
    })
};