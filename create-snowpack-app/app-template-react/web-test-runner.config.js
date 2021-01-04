const { importMapsPlugin } = require('@web/dev-server-import-maps')

// NODE_ENV=test - Needed by "@snowpack/web-test-runner-plugin"
process.env.NODE_ENV = 'test';

module.exports = {
  plugins: [
    importMapsPlugin({
      inject: {
        importMap: {
          imports: {
            './_dist_/foobar.js':
              './_dist_/mocks/foobar.mock.js',
            './web_modules/mathjs.js':
              './_dist_/mocks/mathjs.mock.js'
          }
        }
      }
    }),
    require('@snowpack/web-test-runner-plugin')()
  ],
};
