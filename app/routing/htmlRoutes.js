//dependencies
var express = require("express");
var path = require("path");

//set up express app
var app = express();

//set up express app to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../survey.html"));
});