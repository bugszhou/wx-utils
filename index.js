if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/wx-lodash.js');
} else {
  module.exports = require('./dist/wx-lodash.min.js');
}
