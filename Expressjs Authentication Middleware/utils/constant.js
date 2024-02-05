// status code
const STATUS_CODE_CREATED = 201;
const STATUS_CODE_OK = 200;
const STATUS_CODE_NOT_FOUND = 404;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_METHOD_NOT_ALLOWED = 405;
const STATUS_CODE_SERVER_ERROR = 500;
const STATUS_CODE_UNAUTHORIZED = 401;
// message
const api_key_error_msg = 'API Key is missing'
const invalid_key_msg = 'Invalid API Key'

module.exports = {
  STATUS_CODE_CREATED ,
  STATUS_CODE_OK,
  STATUS_CODE_NOT_FOUND,
  STATUS_CODE_BAD_REQUEST,
  STATUS_CODE_SERVER_ERROR,
  STATUS_CODE_METHOD_NOT_ALLOWED,
  STATUS_CODE_UNAUTHORIZED,
  api_key_error_msg,
  invalid_key_msg
};
