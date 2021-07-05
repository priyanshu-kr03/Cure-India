const mongoose=require('mongoose');
const doctSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fees:{
        type:Number
     //   required:true
    },
    specialisation:{
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
    // Slots:
    //     {
    //         type:Date
    //     }
    // ,
    rogi:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"patient"
        }
    ]
},{
    timestamps:true
})
const doctor=mongoose.model('doctor',doctSchema);

doctor.deleteMany().then(function(){
    console.log("Data deleted"); // Success
}).catch(function(error){
    console.log(error); // Failure
});

module.exports=doctor;