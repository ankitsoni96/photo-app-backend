const express = require('express')
const route = express.Router()
const postController = require('../api/v1/controllers/postController')
route.get('/test',(req,res)=>{
    res.send({message:"Working"});
});

route.get('/getPosts',postController.getPosts);

module.exports = route