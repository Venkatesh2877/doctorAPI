const mongoose= require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/doctor_API');

const db=mongoose.connection;

db.on('error',console.log.bind(console,"error connecting to mongodb"));

db.once('open', function(){
    console.log('connected to mongodb');
})

module.exports=db;