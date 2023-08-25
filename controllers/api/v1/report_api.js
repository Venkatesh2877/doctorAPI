const Reports=require('../../../models/report')


//return all the reports with specific status
module.exports.allStatusReport= async function(req,res){
     try{
        let allStatusReports= await Reports.find({Status: req.params.status});

        return res.json(200, {
            message:`all the reports of all the patients filtered by a specific status - ${req.params.status}`,
            data:{
                reports:allStatusReports
            }
        });
    }catch(err){
        console.log(err);
        return res.json(500, {
            message:`Patient Register error ${err}`
        })
    }
}
