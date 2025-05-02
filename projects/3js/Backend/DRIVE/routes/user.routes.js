const express = require("express")
const router = express.Router();
const mongoose = require("mongoose")
const userModel = require("../models/user.model")

router.get("/register", (req, res)=>{  //READ
      res.render("register")
})

router.post("/register",
      async (req, res)=>{  //CREATE            
      const {username, email, password} = req.body
      const user = await userModel.create({
            username,
            email,
            password
      })
      .then((user)=>{
            res.status(201).json({
                  message: "User created successfully",
                  user
            })
      })
})

module.exports = router