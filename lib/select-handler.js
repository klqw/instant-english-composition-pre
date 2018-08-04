'use strict';
const pug = require('pug');
const flag = 'select';

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      res.end(pug.renderFile('./views/select.pug', {flag: flag}));
      break;
    case 'POST':
      break;
    default:
      break;
  }
}

module.exports = {
  handle: handle
};
