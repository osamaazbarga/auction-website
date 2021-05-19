const mongoose=require('mongoose')
const validator=require('validator')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const uploadSchema=new mongoose.Schema({
    filename:{
        type:String
    },
    contentType:{
        type:String
    },
    ImageBase64:{
        type:String,
    }
})


const productSchema=new mongoose.Schema({
    productID:{
        type:Number,
        unique:true,
        required:true,
        default:1000000
    },
    seq: {
        type: Number,
        default: 0,
        required:false
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
        type:String,
        required: true

    },
    // pic:{
    //     type:Buffer
    // },
    discription:{
        type:String,
        required:true
    },
    meta_data:[uploadSchema],
    // meta_data:{
    //     //type:[String]
    //     filename:{
    //         type:String
    //     },
    //     contentType:{
    //         type:String
    //     },
    //     ImageBase64:{
    //         type:String,
    //     }
                
            
        
        
    // },
    // created_at:{
    //     type: Date, 
    //     required: true, 
    //     default: Date.now
    // },
    // updatedAt:{
    //     type: Date,
    //     default: Date.now,
    //     required:false
    // },
    price:{
        type: Number,
        required:true,
        validate(value) {
            if (value < 0) {
                throw new Error('the price in unleggal')
            }
        }
    },
    priceAuction:{
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
        required:true

    },
    startdate:{
        type: Date, 
        required: true, 
        default: Date.now
    },
    finishdate:{
        type: Date, 
        required: true,
        default: Date.now
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
    // paymentway:[],
    country:{
        type:String,
        required:true,
        default:""
    },
    status:{
        type:String,
        required:true,
        default:'active',
        validator() {
            let difference = new Date(this.finishdate) - new Date();
            let timeLeft = {};
            if (difference > 0) {
                timeLeft = {
                d: Math.floor(difference / (1000 * 60 * 60 * 24)),
                h: Math.floor((difference / (1000 * 60 * 60)) % 24),
                m: Math.floor((difference / 1000 / 60) % 60),
                s: Math.floor((difference / 1000) % 60)
                };
            }
            if(timeLeft == null){
                this.status='notActive'
            }
        }
    }

},{ timestamps: true })
// productSchema.plugin(AutoIncrement,{inc_field:'productID'})



// productSchema.pre('save', async function(next) {
//     var doc = this;
//     console.log(doc);
//     await productSchema.findOneAndUpdate({productID: "productID"}, {$inc: { seq: 1} }, function(error, counter)   {
//         if(error)
//             return next(error);
//         doc.productID = counter.seq;
//         next();
//     });
// });



const product = mongoose.model('product', productSchema)
module.exports=product

