const DB = require('./models/db');
const userRoute = require('./routes/user')

const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.listen(3000,() =>{
    console.log('server started at port : 3000');
});

app.use('/api/user',userRoute)