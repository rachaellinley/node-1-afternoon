const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const app = express();
const port = 3001;


console.log(getProducts)
app.get('/api/products', getProducts);
console.log('/api/product/:id', getProduct)
app.get('/api/product/:id', getProduct);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

