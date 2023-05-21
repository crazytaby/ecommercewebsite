const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    imgurl:{
        type:String,
        require:true,
    },
    productname:{
        type:String,
        require:true,
    },
    ratings:{
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true,
    },
    increasedprice:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true,
    },
    quantity:{
        type:String,
        require:true,
    },
    brand:{
        type:String,
        require:true,
    },
    ram:{
        type:String,
        require:true,
    },
    storage:{
        type:String,
        require:true,
    },
    frontcamera:{
        type:String,
        require:true,
    },
    backcamera:{
        type:String,
        require:true,
    },
    battery:{
        type:String,
        require:true,
    },
    processor:{
        type:String,
        require:true,
    },
    display:{
        type:String,
        require:true,
    },
    
})

const product=new mongoose.model("electronic",ProductSchema)

module.exports=product;