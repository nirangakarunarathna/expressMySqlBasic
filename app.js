//Get express as a variable
const express = require("express");

//get express variable as a function and assign to a variable
const app = express();

//Get the web Server port. If doesn't exist a port in the server ,will get the manual define port number
const port = process.env.PORT || 3000;

//import the Routers
const student = require("./routers/student");
const user = require("./routers/user");

//Add middlewares - For all routers
// app.use(testMiddleware);

//redirect to this API url to particular router file
app.use("/api/student", testMiddleware, student);
app.use("/api/user", user);

//Middleware
function testMiddleware(req, res, next) {
  console.log("Middleware is executed");
  next();
}

//listening to the port number
app.listen(port, () => {
  console.log(`App is running on port : ${port}`);
});
