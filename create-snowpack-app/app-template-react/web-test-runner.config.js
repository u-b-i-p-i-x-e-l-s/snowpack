const { importMapsPlugin } = require('@web/dev-server-import-maps')

// NODE_ENV=test - Needed by "@snowpack/web-test-runner-plugin"
process.env.NODE_ENV = 'test';

module.exports = {
  plugins: [
    importMapsPlugin({
      inject: {
        importMap: {
          imports: {
            './src/foobar.js':
              './src/mocks/foobar.mock.js',
            'mathjs':
              './src/mocks/mathjs.mock.js'
          }
        }
      }
    }),
    require('@snowpack/web-test-runner-plugin')()
  ],
};
