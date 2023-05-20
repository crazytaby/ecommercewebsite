const express = require("express");
const collection = require("./mongo");
const app = express();
const cors = require("cors");
const port = 8000;

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
  console.log(data)
  try {
    await collection.insertMany([data]);
    res.send("Message sent successfully!");
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).send("An error occurred while saving the message.");
  }
});

app.listen({ port }, () => {
  console.log("server is running on port", port);
});
