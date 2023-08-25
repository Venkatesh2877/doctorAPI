const express=require('express');
const router=express.Router();
const doctorApi= require('../../../controllers/api/v1/doctor_api');



router.post('/register', doctorApi.register);
router.get('/login', doctorApi.login);

module.exports= router;