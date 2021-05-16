const mongoose=require('mongoose')
const validator=require('validator')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const auctionSchema=new mongoose.Schema({
    productID:{
        type:Number,
        required:true,
    },
    customerID:{
        type:Number,
        required:true,
    },
    paymentamount:{
        type:Number,
        required:true,
    }

}, {
    timestamps: true

})

const auctions = mongoose.model('auctions', auctionSchema)
module.exports=auctions