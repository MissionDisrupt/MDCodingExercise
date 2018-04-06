// See http://brunch.io for documentation.
exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {joinTo: 'app.css'}
};


exports.plugins = {
  browserSync: {
    port: 3333,
    server: "public"
  }
};
