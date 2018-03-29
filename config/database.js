const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  uri: 'mongodb://vinod:1995@ds111608.mlab.com:11608/quiz', // Databse URI and database name
  secret: crypto, // Cryto-created secret
 
}