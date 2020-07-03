const bcrypt = require('bcryptjs');

const hash = (password) => {
  return bcrypt.hashSync(password, 10);
}

const verify = (password, hashed) => {
  return bcrypt.compareSync(password, hashed);
}

module.exports = {
  hash,
  verify
};