const express=require('express');
const router=express.Router();
const productController=require('../controllers/product.controller')
const categorySchema=require('../models/categories.model')
require('../config/db')

router.get('/',(req,res)=>{
    categorySchema.find({}).then((categories)=>{
        res.send(categories)
    }).catch((e)=>{
        res.status(500).send()
    })
}).get('/:id',(req,res)=>{
    const id=req.params.id
    categorySchema.findOne({categoryID:id}).then((category)=>{
        res.send(category)
    }).catch((e)=>{
        res.status(500).send()
    })
}).post('/',(req,res)=>{
    //console.log(req.body.userID);
    const category=new categorySchema(req.body)
    // console.log(req.body);

    //productsSchema.findOneAndUpdate({ _id: product._id},{$inc:{ seq: 1}})
    categorySchema.findOne({}, {}, { sort: { _id : -1 } }, function(err, post) {
        console.log("post out"+post);
        if(post){
            // category.seq=post.seq+1
            category.categoryID=post.categoryID+1
            console.log("post in"+post);
            //console.log(category);
        }
        category.save().then(()=>{
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