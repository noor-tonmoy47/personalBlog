const express = require('express');

const blogRoutes = require('./routes/blogRoutes');
const app = express();


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use('/blogs',blogRoutes);

module.exports = app;