const path = require('path')

module.exports = {
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['styles'] = path.join(__dirname, 'styles')
    config.resolve.alias['modules'] = path.join(__dirname, 'modules')
    config.resolve.alias['utils'] = path.join(__dirname, 'utils')
    return config
  },
}
