//Get express as a variable
const express = require("express");

//get express variable as a function and assign to a variable
const app = express();

const config = require("./common/config.json");
const bodyParser = require("body-parser");

const port = process.env.PORT || config.port;

// middle wares
app.use(bodyParser.json());

//import the Controllers
const store = require("./controllers/storeController");

app.use("/api/store", store);

//listening to the port number
app.listen(port, () => {
  console.log(`App is running on port : ${port}`);
});
