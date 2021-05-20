const express=require('express');
const sharp=require('sharp')
const router=express.Router();
//const productController=require('../controllers/product.controller')
require('../config/db')
const fs=require('fs')

const productsSchema=require('../models/products.model')

const multer=require('multer')
const path = require('path');



// let storage=multer.diskStorage({
//     // destination:function(req,file,cb){
//     //     cb(null,'upload')
//     // },
//     // filename:function(req,file,cb){
//     //     cb(null,file.filename+'-',Date.now()+path.extname(file.originalname))
//     // }
//     destination: "./public/images",
//     filename: function(req, file, cb){
//         cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
//     }
// })

let storage=multer.diskStorage({
    // destination:function(req,file,cb){
    //     cb(null,'upload')
    // },
    filename:function(req,file,cb){
        let ext=file.originalname.substr(file.originalname.lastIndexOf("."))
        cb(null,file.filename+'-'+Date.now()+ext)
    }
})
const store=multer({
    storage:storage
})
const upload=multer({
    //dest:'avatars',
    // dest:'images',
    storage:storage,
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('please upload an image'))
        }
        cb(undefined,true)
    }
})
router.get('/',(req,res)=>{
    productsSchema.find({}).then((products)=>{
        res.send(products)
    }).catch((e)=>{
        res.status(500).send()
    })
}).get('/:id',(req,res)=>{
    const id=req.params.id
    productsSchema.findOne({productID:id}).then((product)=>{
        console.log(product);
        if(!product){
            return res.status(404).send()
        }
        res.send(product)
    }).catch((e)=>{
        res.status(500).send()
    })
}).get('/productsbycustomerid/:id',(req,res)=>{

    const id=req.params.id
    productsSchema.find({customerID:id}).then((product)=>{
        console.log(product);
        if(!product){
            return res.status(404).send()
        }
        res.send(product)
    }).catch((e)=>{
        res.status(500).send()
    })
}).post('/addproduct',(req,res,next)=>{
    // const files=req.files
    let product=new productsSchema(req.body)
    console.log(product);
    // product.save().then(()=>{
    //     //console.log(user[0].userID);
    //     // res.status(201).send(product)
    //     console.log("product post",product);
    //     res.send(product)
    //     //const account=new AccountsSchema({userID:user.userID})
    //     //account.save()


    // }).catch((error)=>{
    //     res.status(400).send("error: "+error)
    // })

    // console.log(JSON.stringify(req.body.images));
    //console.log("file"+JSON.stringify(req.body.meta_data));
    // product.meta_data=req.files
    //console.log(req.files);
    // console.log(req.productinputs);
    // if(!files){
    //     const error=new Error("please choose files")
    //     return next(error)
    // }
    //console.log(product);

    //console.log(req.body.userID);
    // const product=new productsSchema(req.body)
    //productsSchema.findOneAndUpdate({ _id: product._id},{$inc:{ seq: 1}})


    productsSchema.findOne({}, {}, { sort: { _id : -1 } }, function(err, post) {
        if(post){
            product.seq=post.seq+1
            product.productID+=product.seq
            // product.finishdate=product.startdate
            product.finishdate=product.finishdate.setDate(product.startdate.getDate() + product.auctiondays)
            // console.log("product post1",product);
            
        }
        console.log("product post1",product);
        product.priceAuction=product.price
        product.save().then(()=>{
            //console.log(user[0].userID);
            // res.status(201).send(product)
            console.log("product post1",product);
            res.send(product)
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

}).put('/addproduct/:id',store.array('images',12),(req,res,next)=>{
    const id=req.params.id;
    console.log(req.params);
    //let images=[]
    const files=req.files
        console.log(files);
    productsSchema.findOne({productID:id},async(err, post)=> {
        const files=req.files
        console.log(files);
        //console.log(files);
        // for (let i = 0; i < files.length; i++) {
        //     const buffer= await sharp(files[i].path).resize({ width:250,height:250 }).png().toBuffer()
        //     // post.meta_data.concat({buffer})
        //     // post.meta_data.push(buffer)
            
            
        // }
        let images=files.map((file)=>{
            let img=fs.readFileSync(file.path)
            console.log(file);
            //console.log(img);
            return ecode_image= img.toString("base64")
        })
        // let images=files.map(async(file)=>{
        //     const buffer= await sharp(file.path).resize({ width:250,height:250 }).png().toBuffer()
        //     console.log(buffer);
        //     const ecode_image= buffer.toString("base64")
        //     // console.log(ecode_image);
        //     return ecode_image
        //     // return ecode_image= buffer
        // })
        let imagess=[]
        images.map((src,index)=>{
            let finalimg={
                filename:files[index].filename,
                contentType:files[index].mimetype,
                ImageBase64:src
            }
            imagess.push(finalimg)
            post.meta_data[index]=finalimg
        })
        //console.log(imagess);
        //post.meta_data=imagess


        //console.log(images);
        //const buffer= await sharp(files[0].path).resize({ width:250,height:250 }).png().toBuffer()
        //console.log(buffer);
        // console.log(files[0].path);
        //console.log("post"+post);
        //console.log(files);
        // post.meta_data=images
        //console.log(post);
        //console.log(images);
        //console.log(post);
        post.save().then(()=>{
            res.send("from put"+post)
            //res.json(images)
        })
    })
    
    // const files=req.files
    // console.log(files);
}).post('/updatepriceauctions/:id',(req,res)=>{
    console.log("osama");
    const id=req.params.id;
    console.log(req.body);
    console.log(id);
    productsSchema.findOne({productID:id},async(err, post)=> {
        if(post){
            post.priceAuction=req.body.priceAuction
        }
        
        console.log(post);
        post.save()
    })

    // res.send()
}).post('/updatestatus/:id',(req,res)=>{
    const id=req.params.id;
    console.log(req.body);
    console.log(id);
    productsSchema.findOne({productID:id},async(err, post)=> {
        if(post){
            if(post.status=='active'){
                post.status='notActive'
            }
            else{
                post.status='active'
            }
        }
        
        console.log(post);
        post.save()
    })

    // res.send()
})


module.exports = router;