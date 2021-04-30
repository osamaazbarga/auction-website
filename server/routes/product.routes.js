const express=require('express');
const router=express.Router();
const productController=require('../controllers/product.controller')
require('../config/db')
const productsSchema=require('../models/products.model')

router.get('/',(req,res)=>{
    productsSchema.find({}).then((products)=>{
        res.send(products)
    }).catch((e)=>{
        res.status(500).send()
    })
}).post('/',(req,res)=>{
    //console.log(req.body.userID);
    const product=new productsSchema(req.body)
    product.save().then(()=>{
        //console.log(user[0].userID);
        res.status(201).send(product)
        //const account=new AccountsSchema({userID:user.userID})
        //account.save()


    }).catch((error)=>{
        res.status(400).send("error: "+error)
    })

})
module.exports = router;