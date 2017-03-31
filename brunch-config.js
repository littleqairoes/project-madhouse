// See http://brunch.io for documentation.
const stylesheets = {joinTo: {'app.css': 'app/styles.css'}};
const javascripts = {joinTo: {'app.js': [
  /^app\/scripts/
]}};
const config = require('./config/app');

exports.files = {
  javascripts: javascripts,
  stylesheets: stylesheets
};

exports.conventions = {
  ignored: [/\/_/, /vendor\/(node|j?ruby-.+|bundle)\//, /^app\/bower_components/, /^app\/project_components/]
};

exports.plugins = {
  copycat: {
    "bower_components": ["app/bower_components"],
    "project_components": ["app/project_components"],
    "page_components": ["app/page_components"],
    verbose: false,
    onlyChanged: true
  },
  sass: {
    mode: 'native',
    options: {
      includePaths: ['project_components']
    },
    debug: 'comments',
    precision: 8,
    allowCache: true
  },
  static: {
    processors: [
      require('html-brunch-static')({
        processors: [
          require('./additional_plugins/sass-brunch-static')(),
          require('./additional_plugins/json-brunch-static')(),
          require('./additional_plugins/js-brunch-static')()
        ],
        defaultContext: config[config.builds.dev],
        handlebars: {
          enableProcessor: true,
          helpers: {
            wrapper: function(index, wrap, options) {
              if(!(index%wrap)) {
                return options.fn(this);
              }
              return options.inverse(this);
            }
          }
        }
      })
    ]
  }
}
