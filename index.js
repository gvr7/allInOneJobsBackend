const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
const Schema = require("./model.js")
const app = express()

app.use(express.json())
app.use(cors())


try{
app.listen(process.env.PORT || 2000,() => console.log('Server connected...'))
mongoose.connect("mongodb+srv://venkatesh:venkatesh@cluster0.eyze3ag.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("db connected"))
  }catch(err){
  console.log(err)
}

try{
  app.post("/jobs",async(req,res) => {
  const {imageUrl,branches,title,category,description,link,lastDate,experience,company} =await req.body
  const newData =await new Schema({imageUrl,branches,title,category,description,link,lastDate,experience,company})
  await newData.save()
  res.send("success")
})
}catch(err){
  console.log(err)
}

try{
  app.get("/jobs",async(req,res) => {
    const allData = await Schema.find()
    return res.json(allData)
})
}catch(err){
  console.log(err)
}

try{
  app.get("/jobs/:id",async(req,res) => {
    const Data = await Schema.findById(req.params.id)
    return res.json(Data)
})
}catch(err){
  console.log(err)
}
app.get("/",(req,res)=>{
  res.send("hello")
})
