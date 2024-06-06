const demo = require('../model/demo');

const getAllBlogs = (req, res)=>{
    res.render('index', {data: demo});
}

module.exports = {getAllBlogs};