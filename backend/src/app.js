const express = require('express');
const pkg = require('../package.json');
const app = express();
const productsRouter = require('./routes/product.router');

// settings
app.set('pkg', pkg)

// middlewares
app.use(express.json())

// routes
app.get('/', (req, res) =>{
    res.json({
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        author: app.get('pkg').author,
        version: app.get('pkg').version
    })
})

app.use('/api/products', productsRouter)

module.exports = app;
