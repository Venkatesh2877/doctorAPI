const Patients=require('../../../models/patient')

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