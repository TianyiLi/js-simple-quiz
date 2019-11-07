const pg = require('./package.json')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'https://tianyili.github.io/' + pg.name : ''
}
