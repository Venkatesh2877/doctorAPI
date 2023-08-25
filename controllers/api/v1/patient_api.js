const Patients=require('../../../models/patient')
const Reports=require('../../../models/report')


//register a new patient
module.exports.register= async function(req,res){
    try{
        let exitPatient= await Patients.findOne({phoneNumber: req.body.phoneNumber});

        //return details of patient if found
        if(exitPatient){
            return res.json(200,{
                message:'Patient Exist and here are the details',
                data:{
                    patient:exitPatient
                }
            });
        }
        
        //else create a new patient
        let patient= await Patients.create(req.body);
        return res.json(200, {
            message:"New Patient Created and here are the details",
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


//create a report for the patient
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

//displlay all the report of the patients
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