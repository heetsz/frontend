require('dotenv').config();
const PORT = process.env.PORT ;
const express = require('express');
const connectionDB = require("./config/connectionDB");
const cors = require("cors");

connectionDB();

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/cars", require("./routes/cars"));
app.use("/users", require("./routes/users"));
app.use('/chat', require('./routes/chat'));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});