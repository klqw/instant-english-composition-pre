'use strict';
const selectHandler = require('./select-handler');
const randomHandler = require('./random-handler');

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
      break;
  }
}

module.exports = {
  route: route
};
