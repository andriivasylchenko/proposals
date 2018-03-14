'use strict';
module.exports = function(app) {
  var proposals = require('../controllers/proposalsController');

  app.route('/add')
    .post(proposals.add);
};