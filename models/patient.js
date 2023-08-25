const mongoose= require('mongoose');

const patientSchema= new mongoose.Schema({
    phoneNumber:{
        type: String,
        required: true
    }
},{
    timestamps:true
});

const Patients= mongoose.model('Patients', patientSchema);

module.exports=Patients;
