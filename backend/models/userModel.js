const mongoose=require('mongoose');


const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  occupation:String,
  resumePath: String,
}));

module.exports=User