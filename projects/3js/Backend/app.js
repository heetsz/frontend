const http = require("http")

const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.use((req, res, next)=>{
      console.log("security aage badho")
      res.send("yeh middle ware hai")
      return next()
})

app.get('/', (req, res)=>{
      res.render('1');
})

 

app.listen(3000)

// const server = http.createServer((req, res)=>{
//       res.end(req.url )  
// })
// server.listen(3000, ()=>{
//       console.log("Mai Chal rha hu");
// })