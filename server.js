//dependencies
var express = require("express");
var path = require("path");

//set up express app
var app = express();
var PORT = process.env.PORT || 3000;
var HOST = "0.0.0.0";

//set up express app to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up express to be able to use files in the public folder.
app.use(express.static(__dirname + "/app/public/"));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//starts up server
app.listen(PORT, HOST, function () {
    console.log("App is listening on PORT: " + PORT);
});