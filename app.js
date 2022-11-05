const express=require('express')
// const errorMiddlware=require('../bx-store/middleware/error')

const router = require('./routes/router')
// require('dotenv').config()

// const cookie=require('cookie-parser')
const app=express()
// app.use(cookie())

app.use(express.json())
const PORT=process.env.PORT||3000

app.use('/',router)
app.listen(PORT,()=>{
    console.log(`PORT NUMBER ${PORT} Listining!...`);
})     