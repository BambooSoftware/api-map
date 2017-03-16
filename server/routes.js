'use strict';

let handler = require('./handler');

var registerRoutes = (server) => {

    const routes = [{
        path: '/',
        method: 'GET',
        handler: handler.helloWorld
    },
    {
        path: '/map/{levelId}',
        method: 'GET',
        handler: handler.getLevel
    },
    {
        path: '/user/{userId}',
        method: 'PUT',
        handler: handler.addUser
    },
    {
        path: '/user/{userId}',
        method: 'DELETE',
        handler: handler.deleteUser
    }];

    server.route(routes); //You can also assign these individually
};

module.exports = registerRoutes;
