'use strict';

//Example of an empty request
module.exports.helloWorld = (request, reply) => {
    return reply('Hello world. ');
};

//Responding in JSON vs a string
module.exports.getLevel = (request, reply) => {
    console.log('requested level: ' + request.params.levelId);
    var answer = {'levelId': request.params.levelId };
    return reply(answer);
};

module.exports.addUser = (request, reply) => {
    return reply('Requested to add user: ' + request.params.userId );
};

module.exports.deleteUser = (request, reply) => {
    return reply('Requested to delete user: ' + request.params.userId );
};
