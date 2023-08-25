const express=require('express');
const router=express.Router();
const passport=require('passport');
const patientApi= require('../../../controllers/api/v1/patient_api');

router.post('/register',passport.authenticate('jwt',{session:false}), patientApi.register);


module.exports= router;
