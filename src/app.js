const express = require('express');
const mongoose = require('mongoose');

const app = express();

const routes = require('./routes');

app.use(express.json());
app.use(routes);



mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/books").then(() => {
    console.log("Conectado ao Mongo DB")
}).catch((err) => {
    console.log("Problema com Mongo " + err)
}) 



app.listen(3333)