//dependencies
var express = require("express");
var path = require("path");

//set up express app
var app = express();
var PORT = process.env.PORT || 3000;

//set up express app to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());






//starts up server
app.listen(PORT, function () {
    console.log("App is listening on PORT: " + PORT);
});