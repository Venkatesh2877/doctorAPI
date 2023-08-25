const Doctors= require('../../../models/doctor');
var jwt = require('jsonwebtoken');

//register a new doctor with username and password
module.exports.register=async function(req,res){
    try{
        //check if username already exits
        var usernameExist=await Doctors.findOne({username: req.body.username});
        if(usernameExist){
            return res.json(422, {
                message:'UserName exist'
            });
        }

        //create a new user
        var doctor= await Doctors.create(req.body);
    
        return res.json(200,{
            message:'New Doctor User Created',
        })
    }catch(err){
        console.log(err);
        return res.json(500, {
            message:`Doctor Register error ${err}`
        });
    }
    
}

//login the registered doctor
module.exports.login=async function(req,res){
    try{
        var doctor= await  Doctors.findOne({username: req.body.username});
        //if username doesn't exit
        if(!doctor){
            return res.json('422', {
                message: ' User Name doesnot exits'
            });
        }
        //password mis-match
        if(doctor.password!=req.body.password){
            return res.json('422', {
                message: ' Username/Password mis-match'
            });
        }

        return res.json('200', {
            message: 'Log in successfull. Keep the token safe',
            data:{
                token: jwt.sign(doctor.toJSON(),'doctorApi',{expiresIn: '600000'})// return  jwt for the doctor
            }
        })
    }catch(err){
        return res.json(500, {
            message:`log in error ${err}`
        }) 
    }
}