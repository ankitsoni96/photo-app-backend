const express = require('express');
const app = express()
const config = require('./api/utils/config')
const postRoutes = require('./routes/v1Routes')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

app.set('view engine', 'ejs');

app.use('/api/v1',postRoutes);

app.listen(config.PORT,()=>{
        console.log(`Server is running on http://${config.HOST}:${config.PORT}`);
})