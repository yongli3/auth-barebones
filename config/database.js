const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
  secret: crypto,
  uri: 'mongodb://localhost:27017/test_db'
}
