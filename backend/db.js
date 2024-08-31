const mongoose=require('mongoose');

const connection= mongoose.connect(process.env.MONGO ,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log('connected')

}).catch((err)=>{
  console.log(`${err.message}`)
});

module.exports=connection