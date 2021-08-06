const PostHelper = require('../helpers/postHelper')
const PostValidator = require('../validators/postValidator')

class PostController {
    async getPosts(req,res){
        try {
            await PostValidator.getPostsValidators(req.query);
            let result = await PostHelper.getPosts(req.query);
            res.send({code:1,status:200,message:"Get post successfully",data:JSON.parse(result)})
        } catch (error) {
            console.log('ERROR',error);
            res.send({code:0,status:200,message:error})
        }
    }
} 

module.exports = new PostController()