const express = require("express");
const collection = require("./mongo");
const app = express();
const cors = require("cors");
const port = 8000;
const product=require("./product");
const cartproduct=require("./cartproduct.js");
const clothproduct=require("./cloths.js")

// // const clothing = require('./cloths')

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


app.get("/products/electronics/mobiles",  async(req, res) => {
   res.send(await product.find({category:"Mobile"}))
});


app.get("/products/electronics/laptops",  async(req, res) => {
   res.send(await product.find({category:"Laptop"}))
});

app.get("/products/clothings/mens",  async(req, res) => {
   res.send(await clothproduct.find({category:"Men"}))
});


app.get("/products/clothings/womens",  async(req, res) => {
   res.send(await clothproduct.find({category:"Women"}))
});


app.get("/products/electronics/:category/:id",  async(req, res) => {
  
  const category=req.params.category
  const firstLetter = category.charAt(0).toUpperCase();
  const remainingLetters =category.slice(1);
  const finalCategory = firstLetter + remainingLetters.substring(0,remainingLetters.length-1);
  const productId=req.params.id
  res.send(await product.findOne({_id:productId,category:finalCategory}));

});
app.get("/products/clothings/:category/:id",  async(req, res) => {
  
  const category=req.params.category
  console.log(category  )
  const firstLetter = category.charAt(0).toUpperCase();
  const remainingLetters =category.slice(1);
  const finalCategory = firstLetter + remainingLetters.substring(0,remainingLetters.length-1);
  console.log(finalCategory)
  const productId=req.params.id
  res.send(await clothproduct.findOne({_id:productId,category:finalCategory}));
  console.log(res.send)

});

app.get('/getCartData',async(req,res)=>{
    res.send(await cartproduct.find());
})


app.post('/takeCartData',async(req,res)=>{ 
  const cartData = await req.body;
  const {imgurl,productname,price,increasedprice,brand} = cartData;
  let data = {imgurl,productname,price,increasedprice,brand};
  console.log(data)
  await cartproduct.insertMany([data]);
})

app.post('/deleteCartData',async (req,res)=>{
  const CartData = await req.body;
  const {id,name} = CartData;
  try {
      cartproduct.deleteOne({"_id":id}).then((res)=>{
          console.log(res);
      });
  } catch (error) {
      console.log(error);
  }
})




app.listen({ port }, () => {
  console.log("server is running on port", port);
});
