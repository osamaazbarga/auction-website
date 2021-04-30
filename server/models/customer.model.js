const mongoose=require('mongoose')
const validator=require('validator')
const userSchema=mongoose.model('user',{
    username: {
        type: String,
        required: true,
        trim: true
    },
    customerID:{
        type:Number,
        required:true,
        default:100000
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    isActive:{
        type:Boolean,
        default:true,
        required:true

    },
    payment:{
        paypal:{
            isActive:{
                type:Boolean,
                default:false,
            },
            email:{
                type: String,
                unique: true,
                trim: true,
                lowercase: true,
                validate(value) {
                    if (!validator.isEmail(value)) {
                        throw new Error('Email is invalid')
                    }
                }
            }

        }
        // credit:{
        //     isActive:{
        //         type:Boolean,
        //         default:false,
        //     },
        //     details:{
        //         creditnumber:{
        //             type: Number,
        //             unique: true,
        //         },
        //         owne
        //     }
        // }
    },
    // tokens: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }],
    avatar:{
        type:Buffer
    }
}, {
    timestamps: true

})

module.exports=userSchema