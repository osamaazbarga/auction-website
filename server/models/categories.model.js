const mongoose = require('mongoose');
const categorySchema=new mongoose.Schema({
    categoryID:{
        type:Number,
        default:10,
    },
    title: {
        type: String,
        required: true,
        unique:true
    },
   img: {
        type: String,
        required: true
    },
    isActive:{
        type:Boolean,
        default:true
    }
})


const category= mongoose.model('category', categorySchema)
module.exports=category