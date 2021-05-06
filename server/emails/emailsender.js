const sgMail=require('@sendgrid/mail')

const senderAPI="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"

//sgMail.setApiKey(process.env.SENDGRID_API_KEY)
sgMail.setApiKey(senderAPI)



// sgMail.send({
//     to:'osamaazbarga@gmail.com',
//     from:'info@bd-wan.com',
//     subject:'Thanks for joining in ',
//     text:`Welcome to the app, Let me get along with the app`
// })

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'info@bd-wan.com',
        subject:'Thanks for joining in ',
        text:`Welcome to the app,${name} Let me get along with the app`,
        // html:''
    })
}

const sendCancellationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'info@bd-wan.com',
        subject:'Sorry to see you go!',
        text:`GoodBye ${name} ,Ihope to see you soon`,
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}



