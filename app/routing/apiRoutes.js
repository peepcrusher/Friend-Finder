//dependencies
var friendsData = require("../data/friends")


module.exports = function (app) {



    app.get("/api/friends", function (req, res) {
        return res.json(friendsData)
    })

    app.post("/api/friends", function (req, res) {
        //compare answers from the request with those in "friends array"
        var user = req.body;
        var userAnswers = {
            question1 = parseInt(user.question1),
            question2 = parseInt(user.question2),
            question3 = parseInt(user.question3),
            question4 = parseInt(user.question4),
            question5 = parseInt(user.question5),
            question6 = parseInt(user.question6),
            question7 = parseInt(user.question7),
            question8 = parseInt(user.question8),
            question9 = parseInt(user.question9),
            question10 = parseInt(user.question10),

        }

        for (var i = 0; i < friendsData.length; i++) {

        }

        console.log(req.body);
    })

}