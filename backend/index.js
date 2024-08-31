const express = require('express');
const cors =require('cors');
const path =require('path');
require('dotenv').config();
const connection = require('./db');
const router=require('./routes/userRoutes');
const app = express();
app.use(cors());
const __Dirname=path.resolve();

app.use('/api',router);


app.use(express.static(path.join(__Dirname, '/frontend/build')))

app.get("*",(req,res)=>{
  res.sendFile(path.join(__Dirname, "frontend","build","index.html"))
})


app.listen(5000, async() => {
  await connection
  console.log('Server is running on port 5000');
});
