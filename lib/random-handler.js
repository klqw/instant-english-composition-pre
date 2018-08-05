'use strict';
const pug = require('pug');
const Sentence = require('./sentence');
const flag = 'random';

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      Sentence.findAll().then((sentences) => {
        res.end(pug.renderFile('./views/random.pug', {
          sentences: sentences,
          flag: flag
        }));
      });
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
