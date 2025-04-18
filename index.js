const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = require('./database');

const productsRouter = require('./routes/products');

const app = express();
// middlewares
app.use(cors()); // enable cross origins resources sharing (--> only works for websites)
app.use(express.json());
// if off, a frontend must be on the same domain to access your api
// backend is hosted on example.com
// then frotend is hosted on xyz.example.com to access or example.com/xyz.html
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout');


app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);


app.use('/api/products', productsRouter);




app.get("/", (req,res)=>{
    res.json({
        "message":"Welcomem to the API"
    })
})

// we can specify the PORT in the .env file
// PORT => virtual port, usually meant for networking
// IP Address => identifies a computer on the network
// PORT => identifies which PROGRAM (aka process) is reciving or sending data
const PORT = process.env.PORT || 3000; // default port is 3000
// when we do deployment, we need to set the PORT to 80 or 443
// OR different hosting services might have different requirements for PORTS
app.listen(PORT, () =>{
    console.log("Server is running at PORT " + PORT )
})