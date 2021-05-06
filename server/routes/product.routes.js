const express=require('express');
const router=express.Router();
//const productController=require('../controllers/product.controller')
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
    //productsSchema.findOneAndUpdate({ _id: product._id},{$inc:{ seq: 1}})
    productsSchema.findOne({}, {}, { sort: { _id : -1 } }, function(err, post) {
        if(post){
            product.seq=post.seq+1
            product.productID+=product.seq
            console.log(product);
        }
        product.save().then(()=>{
            //console.log(user[0].userID);
            // res.status(201).send(product)
            res.send('hi post')
            //const account=new AccountsSchema({userID:user.userID})
            //account.save()
    
    
        }).catch((error)=>{
            res.status(400).send("error: "+error)
        })
        
    });
    
    // product.save().then(()=>{
    //     //console.log(user[0].userID);
    //     // res.status(201).send(product)
    //     res.send('hi post')
    //     //const account=new AccountsSchema({userID:user.userID})
    //     //account.save()


    // }).catch((error)=>{
    //     res.status(400).send("error: "+error)
    // })

})
module.exports = router;