const express = require("express")
const userRouter = require("./routes/user.routes")
const dotenv = require("dotenv")
const connectToDB = require("./config/db")
dotenv.config()

connectToDB()


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("view engine" , "ejs")

app.use("/user", userRouter )

app.listen(3000, ()=>{
      console.log("Running on 3000 ... ")
})