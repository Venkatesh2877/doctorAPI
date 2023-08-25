const Patients=require('../../../models/patient')
const Reports=require('../../../models/report')

module.exports.register= async function(req,res){
    try{
        let exitPatient= await Patients.findOne({phoneNumber: req.body.phoneNumber});
        if(exitPatient){
            return res.json(200,{
                message:'Patient Exist and here are the details',
                data:{
                    patient:exitPatient
                }
            });
        }
        
        let patient= await Patients.create(req.body);
        return res.json(200, {
            message:"New Patient Created",
            data:{
                patient:patient
            }
        });
    }catch(err){
        console.log(err);
        return res.json(500, {
            message:`Patient Register error ${err}`
        })
    }
}

module.exports.createReport=async function(req,res){
    try{
        let report= await Reports.create({
            DoctorID:req.user._id,
            PatientID:req.params.id,
            Status: req.body.status
        });    
        return res.json(200, {
            message:"New report Created",
            data:{
                report:report
            }
        });
    }catch(err){
        console.log(err);
        return res.json(500, {
            message:`Create report error ${err}`
        })
    }
}

module.exports.allReport= async function(req,res){
    try{
        let allReportOfPatient= await Reports.find({
            PatientID:req.params.id,
        });    
        return res.json(200, {
            message:`All report of ${req.params.id}`,
            data:{
                report:allReportOfPatient
            }
        });
    }catch(err){
        console.log(err);
        return res.json(500, {
            message:`Create report error ${err}`
        })
    }  
}