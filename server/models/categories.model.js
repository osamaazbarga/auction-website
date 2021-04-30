const mongoose = require('mongoose');
const categorySchema=mongoose.model('category',{
    categoryID:{
        type:Number,
        default:10,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

module.exports=categorySchema