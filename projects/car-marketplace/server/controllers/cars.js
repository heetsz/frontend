const car = require("../models/cars");

const getCars =  async (req, res) => {               //GET
      const allcars = await car.find();
      return res.status(200).json(allcars);
};

const getCar = async (req, res) => {           //GET
      const singlecar = await car.findById(req.params.id);
      return res.status(200).json(singlecar);
};

const addCars =  async(req, res) => {                 //POST
      const {name, model, year, price} = req.body;  
      const newCar = await car.create({name, model, year, price});
      return res.status(201).json(newCar);
};

const updateCars = async (req, res) => {                   //PUT
      const {name, model, year, price} = req.body;
      const updatedCar = await car.findByIdAndUpdate(req.params.id, {name, model, year, price}, {new: true}); // not checking if car is present or not (try, catch)
      return res.status(200).json(updatedCar);
};

const deleteCars =  (req, res) => {
      res.send("Welcome to the Cars API");
};




module.exports = {getCars,getCar, addCars, updateCars, deleteCars};