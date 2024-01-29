const express = require('express');
const app = express();

const { products } = require('./data')

app.get('/', (req, res) => {
    // res.json(products);
    res.send('<h1>Home page</h1> <a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    // get the specific item data form products
    const newProducts = products.map((product) => {
        const { id, name, image} = product;
        return (
            id, name, image 
        )
    })
    res.json(products);
})

// get the data base on the id
app.get('/api/products/:productID', (req, res) => {
    // console.log(req)
    // console.log(req.params)
    const { productID } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID))
    // check if the singleProduct is does not exist
    if(!singleProduct){
        return res.status(404).send('Product does not exist')
    }
    // console.log(singleProduct)
    return res.json(singleProduct);
})

app.get('/api/prodcuts/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('Hello world')
})

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const { search, limit } = req.query;
    let sortedProducts = [...products]

    // search and limit; http://localhost:5000/api/v1/query?search=a&limit=2 chech how many item name with start of letter "a" and set the limit base on your preference

    // search; http://localhost:5000/api/v1/query?search=a it will display the item name with start of "a"
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    // limit; http://localhost:5000/api/v1/query?limit=2 it will display the "2" items only
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    // if the search does not match
    if(sortedProducts.length < 1){
        // res.status(200).send('no product match your search')
        return res.status(200).json({success: true, data: []})
    }

    res.status(200).json(sortedProducts)
})

app.listen(5000, () => {        
    console.log('server listening on port 5000...')
})

