const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName : {
        type:String,
        required:[true,"Enter product name"],
        trim : true
    },
    originalPrice : {
        type:Number,
    },
    discountPrice : {
        type:Number,
    },
    productDescription : {
        type:String,
    },
    productQuantity : {
        type:Number,
    },
    productCategory : {
        type:String,
    },
    productBrand : {
        type:String,
    },
    productRating : {
        type:Number,
        default:0
    },
    productImage : {
        type:String,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

module.exports = mongoose.model('Product',productSchema)