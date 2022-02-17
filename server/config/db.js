const mongoose=require('mongoose')

const dotenv=require('dotenv')
dotenv.config()


const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}


mongoose.connect(process.env.MONGO_URI,connectionParams).then( () => {
    console.log('Connected to database ')
})
.catch( (err) => {
    console.log(process.env.MONGO_URI)
    console.log(url)

    console.error(`Error connecting to the database. \n${err}`);
})


