const express=require('express');
const router=express.Router();
const passport=require('passport');
const reportApi= require('../../../controllers/api/v1/report_api');



router.use('/doctors', require('./doctors'));
router.use('/patients', require('./patients'));
router.get('/reports/:status',passport.authenticate('jwt',{session:false}),reportApi.allStatusReport); //authentication need as only doctor can view all reports


module.exports= router;