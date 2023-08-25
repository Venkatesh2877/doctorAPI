const express= require('express');
const app=express();
const port=1000;
const db=require('./config/mongoose')

const passport= require('passport');
const passportJWT= require('./config/passport-jwt-strategy');

app.use(express.urlencoded());

app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('error in setting up the server');
    }

    console.log(`Sever setup sucessfull in port: ${port}`);
})