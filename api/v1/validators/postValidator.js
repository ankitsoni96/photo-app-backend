const joi = require('joi')

class PostValidator {
    async getPostsValidators(body){
        let schema = joi.object().keys({
            tags:joi.string().optional(),
            format:joi.string().required(),
            language:joi.string().required()
        })
        let value = await schema.validate(body);
        if(value.error){
            throw value.error.details[0].message
        }else{
            return value;
        }
}
}

module.exports = new PostValidator()