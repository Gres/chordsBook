'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session'),
    book = require('./controllers/book');
var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

    // Server API Routes
    app.get('/api/awesomeThings', api.awesomeThings);

    app.post('/api/users', users.create);
    app.put('/api/users', users.changePassword);
    app.get('/api/users/me', users.me);
    app.get('/api/users/:id', users.show);


    app.get('/api/book', book.getAll);
    app.post('/api/book', book.create);
    app.put('/api/book/:id', book.edit);
    app.get('/api/book/:id', book.get);

    app.post('/api/session', session.login);
    app.del('/api/session', session.logout);

    // All other routes to use Angular routing in app/scripts/app.js
    app.get('/partials/*', index.partials);
    app.get('/*', middleware.setUserCookie, index.index);
};