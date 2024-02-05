const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;
const {
    STATUS_CODE_SERVER_ERROR
  } = require('./utils/constant')

module.exports = function (req, res) {
  const apiKey = shortid.generate();

  fs.appendFile(VALID_KEYS_PATH, apiKey + LINE_ENDING, 'utf8', (err) => {
      if (err) {
          res.sendStatus(STATUS_CODE_SERVER_ERROR); 
      } else {
          res.json({ apiKey });
      }
  });
};

