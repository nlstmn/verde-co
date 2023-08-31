const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '~': 'src/components',
    '@feat': 'src/features',
    '@page': 'src/pages',
    '@img': 'src/images',
    '@svg': 'src/images/svg',
  })(config)

  return config
}
