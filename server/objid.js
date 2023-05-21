const mongoose=require('mongoose')

const objidschema=new mongoose.Schema({
    objid:{
        type:String,
        require:true,
    }
    
})

const objid=new mongoose.model("objid",objidschema)

module.exports=objid;