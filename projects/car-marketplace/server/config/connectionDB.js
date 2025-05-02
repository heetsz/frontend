const mongoose = require("mongoose");

const dbname = process.env.MONGO_URI.split("/")[3]; 
const connectionDB = async () => {
      await mongoose.connect(process.env.MONGO_URI)    
      .then(() => console.log(`MongoDB connected to ${dbname}`))
      .catch(err => console.log(err));
}

module.exports = connectionDB;