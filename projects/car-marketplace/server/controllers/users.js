const { sendMail } = require("../helpers/sendmail");
const users = require("../models/users");  //

const getUsers =  async (req, res) => {               //GET
      const allusers = await users.find();
      return res.status(200).json(allusers);
};


const adduser =  async(req, res) => {                 //POST
      const {name, email, image} = req.body;  
      sendMail(
          email, 
          "Welcome to Cars Marketplace", 
          "Hello, welcome to our car marketplace!", 
          `
          <div style="font-family: Arial, sans-serif; border: 1px solid #ddd; border-radius: 8px; padding: 16px; max-width: 400px;">
              <img src="${image}" alt="Profile Picture" style="width: 100%; height: auto; border-radius: 8px;">
              <h1 style="color: blue; font-size: 24px; margin-top: 16px;">Hello ${name}</h1>
              <p style="font-size: 16px; color: gray;">Welcome to our car marketplace. We are excited to have you!</p>
              <p style="font-size: 14px; color: #555;">Your email: ${email}</p>
          </div>
          `
      );
      const newuser = await users.create({name, email, image});
      return res.status(201).json(newuser);
};

const getUser =  async (req, res) => {               //GET
      const singleuser = await users.findById(req.params.id);
      return res.status(200).json(singleuser);
};



module.exports = {getUsers, adduser, getUser};
