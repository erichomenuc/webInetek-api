const express = require('express');
const Product = require('../models/developments');

const router = express.Router();



router.get('/developments', (req,res)=> {
    Product.find()
    .then((products)=> {
        res.send(products);
    })
    .catch((err)=>res.send(err));
});




router.post('/development', (req, res) => {
    console.log(req.body)

    const product = new Product(req.body);
    product.save()
        .then(() => {
            res.send(product);
        })
        .catch((err) => {
            res.status(500).send(err);
        });

   
});

router.get('/development/:id', (req, res) => {
    const { id } = req.params;
   Product.findById(id)
   .then((product)=>{
       res.send(product);
   })
   .catch((err)=> {
       res.send(err);
   });
});

router.delete('/development/:id', (req, res) => {
    const { id } = req.params;
   Product.findByIdAndDelete(id)
   .then((product)=>{
       res.send(product);
   })
   .catch((err)=> {
       res.send(err);
   });
});




module.exports = router;