module.exports = (function(){
    if(process.env.NODE_ENV == 'production'){
        return {
            HOST:'localhost',
            PORT:'8443'
        }
    }else if(process.env.NODE_ENV == 'staging'){
        return {
            HOST:'localhost',
            PORT:'8443'
        }
    }else{
        return {
            HOST:'localhost',
            PORT:'8443'
        }
    }
})()