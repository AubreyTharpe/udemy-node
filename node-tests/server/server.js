const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    var users = [{name: 'Aubrey', age: 25}, {name: 'Andrew', age: 25}, {name: 'Jen', age: 26}];
    res.send(users);
});

app.listen(3000);

module.exports.app = app;