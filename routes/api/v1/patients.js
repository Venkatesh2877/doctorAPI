const express=require('express');
const router=express.Router();
const passport=require('passport');
const patientApi= require('../../../controllers/api/v1/patient_api');



router.post('/register',passport.authenticate('jwt',{session:false}), patientApi.register); //authentication need as only doctor can register a patient

router.post('/:id/create_report',passport.authenticate('jwt',{session:false}), patientApi.createReport); //authentication need as only doctor can create reports

router.get('/:id/all_reports',passport.authenticate('jwt',{session:false}), patientApi.allReport);  //authentication need as only doctor can view all reports


module.exports= router;
