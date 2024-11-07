const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;
const cors = require('cors');
require('./config/dbDonnection')
app.use(cors())
app.get("/", (req,res)=>{
  res.send("API Working");
})
const users = require('./routes/users');
app.use('/api', users);
app.listen(PORT, ()=>{
  console.log("Server running on port:", PORT)
});
