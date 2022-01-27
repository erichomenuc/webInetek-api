const express = require('express');
const Devs = require('../models/developments');

const router = express.Router();



router.get('/developments', (req,res)=> {
    Devs.find()
    .then((development)=> {
        res.send(development);
    })
    .catch((err)=>res.send(err));
});




router.post('/development', (req, res) => {
    console.log(req.body)

    const development = new Devs(req.body);
    development.save()
        .then(() => {
            res.send(development);
        })
        .catch((err) => {
            res.status(500).send(err);
        });

   
});

router.get('/development/:id', (req, res) => {
    const { id } = req.params;
    Devs.findById(id)
   .then((development)=>{
       res.send(development);
   })
   .catch((err)=> {
       res.send(err);
   });
});

router.delete('/development/:id', (req, res) => {
    const { id } = req.params;
    Devs.findByIdAndDelete(id)
   .then((development)=>{
       res.send(development);
   })
   .catch((err)=> {
       res.send(err);
   });
});




module.exports = router;