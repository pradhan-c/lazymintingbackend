const express = require('express');
const mongoose =require('mongoose');
var cors = require('cors')
const app = express();
const voucherData = require('./models/lazymint');
const lazymint = require('./models/lazymint');
require('dotenv').config();
app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://pradhan:pradhan123@lazy.0shcj.mongodb.net/lazyminting?retryWrites=true&w=majority", {
   useNewUrlParser : true,
});

app.post("https://lazy-minting.herokuapp.com/insert", async (req,res) =>{
    const tokenId =req.body.voucher.tokenId;
    const uri = req.body.voucher.uri;
    const minPrice =req.body.voucher.minPrice;
    const signature =req.body.voucher.signature;
    const image = req.body.image;
    const name =req.body.voucher.name;
    const description =req.body.voucher.description;
    const price = req.body.price;
    const listed =req.body.listed;
    const account =req.body.account;
   
    const data = new lazymint({
        tokenId:tokenId,
        uri:uri,
        minPrice:minPrice,
        signature:signature,
        image:image,
        name:name,
        description:description,
        price : price ,
        listed : listed ,
        account : account


    })
    try{
       await data.save();
    }catch(error){
        console.log(error);
    }
});

app.put("https://lazy-minting.herokuapp.com/update", async (req,res) =>{
    const id =req.body.id;
    const listed = req.body.listed;
    const account = req.body.account;
    try{
       await lazymint.findById(id, (error,updated) =>{
            updated.listed = listed;
            updated.account=account;
            updated.save();
            res.send("Update");
       })
    }catch(error){
        console.log(error);
    }
});

app.get("https://lazy-minting.herokuapp.com/read",async(req,res) => {
    lazymint.find({ listed : true},(err,result)=>{
        if(err){
            res.send(err);  
        } else {
            res.send(result);
        }
         
    })
})






app.get("https://lazy-minting.herokuapp.com/data",async(req,res) => {
     const data = await lazymint.findOne().sort({tokenId : -1 });
     if(data){
         res.send(data);
     }
   
})





app.listen(process.env.PORT || 3001,()=> {

    console.log("Server running  on port 3001!");
});