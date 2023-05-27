const mongoose = require('mongoose');

const clothingproductSchema = new mongoose.Schema({
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
    stylecode:{
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
    cloth:{
        type:String,
        require:true,
    },
    occasion:{
        type:String,
        require:true,
    },
    salespackage:{
        type:String,
        require:true,
    },
    pattern:{
        type:String,
        require:true,
    },
    fabric:{
        type:String,
        require:true,
    },
    fabriccare:{
        type:String,
        require:true,
    },
});

const clothProduct = new mongoose.model("clothings",clothingproductSchema);

module.exports = clothProduct;