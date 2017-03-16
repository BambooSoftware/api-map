'use strict';

const hapi = require('hapi');
const server = new hapi.Server();

const start = () => {

    server.connection({ port: 3000, host: 'localhost' });

    //Adds in support for the different end points
    require('./server/routes')(server);

    //Starts up the server and throw exceptions.
    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    });
};

start();
