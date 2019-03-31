//dependencies
var express = require("express");
var path = require("path");


//set up express app
var app = express();

//set up express app to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/friends", function(req, res){
    return res.json(friends)
})

app.post("/api/friends", function(req, res){
    //compare answers from the request with those in "friends array"
})