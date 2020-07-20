const express = require('express');
const { Router, response } = require('express');

const Book = require('./models/Book');

const bookController = require('./controllers/bookController');


const routes = new Router();

routes.get('/', function(req, res){
    return res.json({ message: "ok"})
})

routes.post('/', bookController.store);
routes.get('/books', bookController.index);
routes.delete('/:id', bookController.delete);

module.exports = routes