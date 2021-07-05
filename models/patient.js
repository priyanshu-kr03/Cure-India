const mongoose=require('mongoose');
const patientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    doc:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"doctor"
        }
      
    ],
    bookedat:[
        {
            type:Date
            
        }
      
    ]
}
,{timestamps : true})
const patient=mongoose.model('patient',patientSchema);

module.exports=patient;
