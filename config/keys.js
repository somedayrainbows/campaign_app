if (process.env.NODE_ENV === 'production') {
  module.exports = rqeuire('./prod')
} else {
  module.exports = require('./dev')
}
