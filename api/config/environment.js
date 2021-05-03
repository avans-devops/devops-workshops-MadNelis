if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const username = process.env.username || '';
const password = process.env.password || '';
const host = process.env.DB || 'localhost';
const port = process.env.port || '27017';
const database = process.env.database || 'Connections';
const params = process.env.params || '';
const secret = process.env.secret || 'MyMassiveSecret';

let uri = 'mongodb://';
if (username && password) {
  uri += `${username}:${password}@`;
}

uri += `${host}:${port}/${database}${params}`;

module.exports = {
  mongodb: { uri },
  secret,
};