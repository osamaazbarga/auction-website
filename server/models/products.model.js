const mongoose=require('mongoose')
const validator=require('validator')
const productSchema=mongoose.model('product',{
    productID:{
        type:Number,
        unique:true,
        required:true,
        default:1000000
    },
    customerID:{
        type:Number,
        required:true,
    },
    title:{
        type: String,
        required: true,
        trim: true
    },
    category:{
        type:Number,
        required: true

    },
    pic:[],
    discription:{
        type:String,
        required:true
    },
    created_at:{
        type: Date, 
        required: true, 
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now,
        required:false
    },
    price:{
        type: Number,
        required:true,
        validate(value) {
            if (value < 0) {
                throw new Error('the price in unleggal')
            }
        }
    },
    auctiondays:{
        type:Number,
        required:true,
    },
    startdate:{
        type: Date, 
        required: true, 
        default: Date.now
    },
    finishdate:{
        type: Date, 
        required: true,
    },
    condition:{
        type:String,
        required:true
    },
    shippingprice:{
        type: Number,
        required:false,
        validate(value) {
            if (value < 0) {
                throw new Error('the price in unleggal')
            }
        }
    },
    shippingwith:{
        type: String,
        required:false,
    },
    paymentway:[],
    country:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:'active'
    }

})

module.exports=productSchema