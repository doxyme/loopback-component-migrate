module.exports = {
  up: function(app, next) {
    const QUERY = '';
    app.dataSources.main.connector.query(QUERY, next);
  },
  down: function(app, next) {
    next();
  }
};
