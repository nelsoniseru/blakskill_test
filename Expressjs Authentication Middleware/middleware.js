
const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const {
    STATUS_CODE_SERVER_ERROR,
    STATUS_CODE_UNAUTHORIZED,
    api_key_error_msg,
    invalid_key_msg
  } = require('./utils/constant')
module.exports = function (req, res, next) {
    // Extract the API key from the 'x-api-key' header
    const apiKey = req.headers['x-api-key'];

    // Check if the API key is missing
    if (!apiKey) {
        // Return a 401 Unauthorized response with an error message
        return res.status(STATUS_CODE_UNAUTHORIZED).json({ error:api_key_error_msg});
    }

    // Read the list of valid keys from the file
    fs.readFile(VALID_KEYS_PATH, 'utf8', (err, data) => {
        if (err) return res.sendStatus(STATUS_CODE_SERVER_ERROR);
        

        // Split the data into an array of valid keys
        const validKeys = data.split('\n').filter(key => key.trim() !== '');

        // Check if the provided API key is valid
        if (validKeys.includes(apiKey)) return next();
            // If the API key is invalid, return a 401 Unauthorized response
           return res.status(STATUS_CODE_UNAUTHORIZED).json({ error:invalid_key_msg});
        
    });
};
