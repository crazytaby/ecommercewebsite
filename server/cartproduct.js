const mongoose = require('mongoose');

const cartproductSchema = new mongoose.Schema({
    imgurl:{
        type:String,
        require:true
    },
    productname:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    brand:{
        type:String,
        require:true
    }
});

const cartProduct = new mongoose.model("cart",cartproductSchema);

module.exports = cartProduct;