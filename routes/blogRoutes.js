const express = require('express');

const blogRoutes = express.Router();

const {getAllBlogs} = require('../controller/articleController');

blogRoutes.route('/').get(getAllBlogs);

module.exports = blogRoutes;