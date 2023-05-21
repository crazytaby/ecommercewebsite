const express = require("express");
const collection = require("./mongo");
const app = express();
const cors = require("cors");
const port = 8000;
const product=require("./product")
const objectid=require('./objid')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/contact-us",  (req, res) => {
        res.json({
        msg:"hii"
    })
});

app.post("/contact-us", async (req, res) => {
  const usermsg  = req.body;
  const {username,email,phone,subject,message}=usermsg
  const data = {
    username: username,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  };
  try {
    await collection.insertMany([data]);
    res.send("Message sent successfully!");
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).send("An error occurred while saving the message.");
  }
});

//api  to get data from database
// app.get("/products/electronics",  async(req, res) => {
//    res.send(await product.find())
// });

app.get("/products/electronics/mobiles",  async(req, res) => {
   res.send(await product.find({category:"Mobile"}))
});


app.get("/products/electronics/laptops",  async(req, res) => {
   res.send(await product.find({category:"Laptop"}))
});


app.get("/products/electronics/:category/:id",  async(req, res) => {
  
  const category=req.params.category
  const firstLetter = category.charAt(0).toUpperCase();
  const remainingLetters =category.slice(1);
  const finalCategory = firstLetter + remainingLetters.substring(0,remainingLetters.length-1);
  const productId=req.params.id
  res.send(await product.findOne({_id:productId,category:finalCategory}));

});


app.post("/takedata",cors(),async(req,res)=>{
  const productDetails = await req.body;
  const {imgurl,productname,ratings,price,increasedprice,category,desc,quantity,brand,ram,storage,frontcamera,backcamera,battery,processor,display} = productDetails;
  let data = {imgurl,productname,ratings,price,increasedprice,category,desc,quantity,brand,ram,storage,frontcamera,backcamera,battery,processor,display};
  // console.log(data)
  await product.insertMany([data]);
})





app.listen({ port }, () => {
  console.log("server is running on port", port);
});
