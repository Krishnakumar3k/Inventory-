const mongoose = require("mongoose");
let officeSchema = new mongoose.Schema({

    systemId:{
        type:String,
        required:true
    },
    systemName:{
        type:String,
        required:true
    },
    ownedBy:{
        type:String,
        required:true
    },
   
    assignTo:{
        type:String,
        required: true,

    }
})

let office =  mongoose.model('office',officeSchema)

module.exports = office;