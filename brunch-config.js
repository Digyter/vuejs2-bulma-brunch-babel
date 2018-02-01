// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
    on: ['sass', 'postcss-brunch'],
    sass: {
      module: true
    },
    babel: {
      'presets': ['env'],
      'comments': false
    },
    vue: {
      extractCSS: true,
      out: './public/app.css'
    }
};

exports.server = {
  port: 3333,
  stripSlashes: true
};
