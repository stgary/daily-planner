const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('./config');

module.exports = {
  makeJwt,
}

function makeJwt({ id, username, name, email }) {
  const payload = {
      subject: id,
      username,
      email,
      name,
  };
  const config = {
      jwtSecret: JWT_SECRET,
  };
  const options = {
      expiresIn: "24 hours",
  };

  return jwt.sign(payload, config.jwtSecret, options);
}