const express=require('express');
const multer=require('multer')
const sharp=require('sharp')
const router=express.Router();
const customerController=require('../controllers/customer.controller')
require('../config/db')
const customerSchema=require('../models/customer.model')
const {sendWelcomeEmail,sendCancellationEmail}=require('../emails/emailsender')
const auth = require('../middleware/auth')

router.get('/', async (req, res) => {
    customerSchema.find({}).then((users)=>{
        res.send(users)
    }).catch((e)=>{
        res.status(500).send()
    })
})

router.post('/', async (req, res) => {
    const user = new customerSchema(req.body)
    
    customerSchema.findOne({}, {}, { sort: { _id : -1 } }, function(err, post) {
        if(post){
            // category.seq=post.seq+1
            user.customerID=post.customerID+1
            console.log(user);
            //console.log(category);
        }

        user.save().then(async()=>{
            //console.log(user[0].userID);
            // res.status(201).send(product)
            sendWelcomeEmail(user.email,user.username)
            const token = await user.generateAuthToken()
            console.log(token);
            res.status(201).send({ user, token })
            //const account=new AccountsSchema({userID:user.userID})
            //account.save()
    
    
        }).catch((error)=>{
            res.status(200).send({error:"the account is register"})
        })
    });

    // try {
    //     await user.save()
        
    //     sendWelcomeEmail(user.email,user.username)
    //     const token = await user.generateAuthToken()
    //     console.log(token);
    //     res.status(201).send({ user, token })
    // } catch (e) {
    //     res.status(400).send(e)
    // }
})

router.post('/login', async (req, res) => {
    console.log(req.body);
    try {
        const user = await customerSchema.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        if(user.isActive==false){
            return res.send({ error: 'one or more from the information is uncorrent' })
        }
        //res.cookie('jwt',token, { httpOnly: true, secure: true, maxAge: 3600000 })
        //res.redirect('/me')

        return res.send({ user, token })
    } catch (e) {
        return res.send({ error: 'one or more from the information is uncorrent' })
    }
})

router.get('/me', auth, async (req, res) => {
    res.send(req.user)
})

router.post('/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send("logout")
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['username', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    if(req.body.isActive==false){
        return res.status(400).send({ error: 'the user is not active' })
    }

    try {
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/me', auth, async (req, res) => {
    try {
        req.user.isActive=false
        
        await req.user.save()
        sendCancellationEmail(req.user.email,req.user.name)
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

const upload=multer({
    //dest:'avatars',
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

router.post('/me/avatar',auth,upload.single('avatar'),async(req,res)=>{
    const buffer=await sharp(req.file.buffer).resize({ width:250,height:250 }).png().toBuffer()
    req.user.avatar=buffer
    await req.user.save()
    res.send()
},(error,req,res,next)=>{
    res.status(400).send({error:error.message})
})

router.delete('/me/avatar',auth,async(req,res)=>{
    req.user.avatar=undefined
    await req.user.save()
    res.send()
})

router.get('/:id/avatar',async (req,res)=>{
    try {
        const user=await User.findById(req.params.id)
        if(!user||!user.avatar){
            throw new Error()
        }
        res.set('Content-Type','image/png')
        res.send(user.avatar)
        
    } catch (e) {
        res.status(404).send()
        
    }
})





module.exports = router;