'use strict';
const selectHandler = require('./select-handler');
const randomHandler = require('./random-handler');
const util = require('./handler-util');

function route(req, res) {
  switch (req.url) {
    case '/':
      res.end('hi');
      break;
    case '/select':
      selectHandler.handle(req, res);
      break;
    case '/random':
      randomHandler.handle(req, res);
      break;
    default:
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route: route
};
