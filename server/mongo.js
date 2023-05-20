const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/taby")
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("database failed to connect",err);
  });

const newSchema = new mongoose.Schema({
  username: {
    type: String,
     required: true,
  },
  email: {
    type: String,
     required: true,
  },
  phone: {
    type: String,
     required: true,
  },
  subject: {
    type: String,
     required: true,
  },
  message: {
    type: String,
     required: true,
  },
});
const collection = new mongoose.model("collection", newSchema);
module.exports = collection;
