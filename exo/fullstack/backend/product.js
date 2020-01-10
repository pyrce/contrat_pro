const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/Product');
mongoose.connect('mongodb://localhost:27017/dev',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use(bodyParser.json());

  app.post('/api/products', (req, res, next) => {
    delete req.body._id;
    const product = new Product({
      ...req.body
    });
    console.log(req.body)
    product.save()
      .then((product) => res.status(201).json({ product}))
      .catch(error => res.status(400).json({ error }));
  });

app.get('/api/products/:id', (req, res, next) => {
   
    Product.findOne({ _id: req.params.id })
      .then(Product => res.status(200).json({product: Product}))
      .catch(error => res.status(404).json({ error }));
  });
  app.put('/api/products/:id', (req, res, next) => {
    Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then((product) => res.status(200).json({ product}))
      .catch(error => res.status(400).json({ error }));
  });
  app.delete('/api/products/:id', (req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Deleted!' }))
      .catch(error => res.status(400).json({ error }));
  });
  app.use("/api/products",(req,res)=>{

    Product.find()
    .then(products => res.status(200).json({products}))
    .catch(error => res.status(400).json({ error }));
});
  module.exports = app;