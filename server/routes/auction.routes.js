const express=require('express');
const router=express.Router();
// const productController=require('../controllers/product.controller')
const customerSchema=require('../models/customer.model')
const productSchema=require('../models/products.model')
const auctionSchema=require('../models/auctions.model')


require('../config/db')


router.get('/',(req,res)=>{
    auctionSchema.find({}).then((auctions)=>{
        res.send(auctions)
    }).catch((e)=>{
        res.status(500).send()
    })
})

router.get('/byproduct/:id',(req, res) => {
    const id=req.params.id
    auctionSchema.findOne({productID:id}).then((product)=>{
        console.log(product);
        if(!product){
            return res.status(404).send()
        }
        res.send(product)
    }).catch((e)=>{
        res.status(500).send()
    })
})

router.get('/bycustomer/:id',(req, res) => {
    const id=req.params.id
    auctionSchema.findOne({customerID:id}).then((customer)=>{
        console.log(customer);
        if(!customer){
            return res.status(404).send()
        }
        res.send(customer)
    }).catch((e)=>{
        res.status(500).send()
    })
})

router.post('/',(req, res) => {

    const {auction}=req.body;
    auctionSchema.findOne({}, {}, { sort: { _id : -1 } }, function(err, post) {
        if(post){
            if(post.paymentamount>=auction.paymentamount){
                res.send({error:"the amount is less than the minimum"})
            }
        }
        const newauction = new auctionSchema(req.body)
        newauction.save().then(()=>{
            console.log("product post1",newauction);
            res.send(newauction)
        }).catch((error)=>{
            res.status(400).send("error: "+error)
        })
    })

})

module.exports = router;