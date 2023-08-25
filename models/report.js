const mongoose= require('mongoose');

const reportSchema= new mongoose.Schema({
    DoctorID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Doctors'
    },
    PatientID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Patients'
    },
    Status:{
        type: String,
        required: true,
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine',
            'Positive-Admit']
    },
    Date:{
        type:Date,
        default:Date.now(),
        required:true
    }
},{
    timestamps:true
});

const Reports= mongoose.model('Reports', reportSchema);

module.exports=Reports;
