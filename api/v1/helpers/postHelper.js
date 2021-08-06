const request = require('request');
const promise = require('bluebird')
class PostHelper {
    async getPosts(body){
        return new promise((resolve,reject)=>{
            let url = `https://www.flickr.com/services/feeds/photos_public.gne?format=${body.format}&lang=${body.language}&nojsoncallback=1`
            if(body.tags){
              url = url + `&tags=${body.tags}`
            }
            request(url, function (error, res, body) {
                if (!error && res.statusCode == 200) {
                  resolve(body);
                } else {
                  reject('Something went wrong');
                }
              });
        })
    }
}

module.exports = new PostHelper()