// const express = require('express');
// const router = express.Router();
// const Product = require('../models/productModel');

// router.get('/getallproducts', async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
// });

// router.post("/getproductbyid",(req,res) => {
//     Product.find({_id : req.body.productid}, (err, docs) =>{
//         if(!err){
//             res.send(docs[0])
//         }else{
//             return res.status(400).json({message : "Something went wrong"});
//         }
//     } )
// })

// module.exports = router;


const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.get('/getallproducts', async (req, res) => {
    const products = await Product.find({});
    res.json(products); 
});


router.post("/getproductbyid", async (req, res) => {
    try {
      const product = await Product.findById(req.body.productid);
      res.send(product);
    } catch (err) {
      return res.status(400).json({ message: "Something went wrong", error: err });
    }
  });
  

module.exports = router;
