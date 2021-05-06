const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const path = require('path');
const cusomersRoute = require('./server/routes/customer.routes')
const categoriesRoute = require('./server/routes/category.routes')
const productsRoute = require('./server/routes/product.routes')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
const port = 8000;

app.use(cors());
app.get('/api/getUser', (req,res)=>{
    const user = 'Evgeni';
    res.json(user);
})

app.use('/api/products',productsRoute);
app.use('/api/categories',categoriesRoute);
app.use('/api/customers',cusomersRoute);





if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
    

    // Express serve up index.html file if it doesn't recognize route
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
app.listen(process.env.PORT || port , () =>{
    console.log(`Server started on port ${port}`)
});
