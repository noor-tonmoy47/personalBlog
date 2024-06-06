const demo = require('../model/demo');

const getAllBlogs = (req, res)=>{
    res.render('../public/index.ejs', {data: demo});
}

module.exports = {getAllBlogs};