//dependencies
var friendsData = require("../data/friends")


module.exports = function (app) {



    app.get("/api/friends", function (req, res) {
        return res.json(friendsData)
    })

    app.post("/api/friends", function (req, res) {
        //compare answers from the request with those in "friends array"
    })

}