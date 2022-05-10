import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB",{
    useNewUrlParser : true,
    useUnifiedTopology : true
},()=>{
    console.log("DB connected")
})

// creating schema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User = new mongoose.model("User",userSchema)

// Routes
app.post("/login",(req,res)=>{
    res.send("My API login")
})

app.post("/register",(req,res)=>{
   const {name,email,password}= req.body
   User.findOne({email:email},(err,user)=>{
       if(user){
           res.send({message:"User already registered"})
           console.log("user already registered")
       }
       else{
        const user = new User({
            name,
            email,
            password
        })
        user.save(err=>{
            if(err){
                res.send(err)
            }
            else{
                res.send({message:"Successfully Registered"})
                console.log("success")
            }
        })
       }
   })
  
})

app.listen(9002,()=>{
    console.log("BE started at port 9002")
})