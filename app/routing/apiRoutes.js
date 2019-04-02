//dependencies
var friendsData = require("../data/friends")


module.exports = function (app) {


//get request to display Json data for our list of friends
    app.get("/api/friends", function (req, res) {
        return res.json(friendsData)
    })

    app.post("/api/friends", function (req, res) {
        //compare answers from the request with those in "friends array"
        var bestFriend;
        var photo;
        var leastDifference; 
        var user = req.body;
        //all the answers the user gave put into 
        var userAnswers = {
            question1: parseInt(user.question1),
            question2: parseInt(user.question2),
            question3: parseInt(user.question3),
            question4: parseInt(user.question4),
            question5: parseInt(user.question5),
            question6: parseInt(user.question6),
            question7: parseInt(user.question7),
            question8: parseInt(user.question8),
            question9: parseInt(user.question9),
            question10: parseInt(user.question10),

        }

        //go through the friends array, grab their answers, and compare them to the user's answers
        for (var i = 0; i < friendsData.length; i++) {

            //compare answers for all questions
            var q1 = Math.abs(userAnswers.question1 - parseInt(friendsData[i].question1))
            var q2 = Math.abs(userAnswers.question2 - parseInt(friendsData[i].question2))
            var q3 = Math.abs(userAnswers.question3 - parseInt(friendsData[i].question3))
            var q4 = Math.abs(userAnswers.question4 - parseInt(friendsData[i].question4))
            var q5 = Math.abs(userAnswers.question5 - parseInt(friendsData[i].question5))
            var q6 = Math.abs(userAnswers.question6 - parseInt(friendsData[i].question6))
            var q7 = Math.abs(userAnswers.question7 - parseInt(friendsData[i].question7))
            var q8 = Math.abs(userAnswers.question8 - parseInt(friendsData[i].question8))
            var q9 = Math.abs(userAnswers.question9 - parseInt(friendsData[i].question9))
            var q10 = Math.abs(userAnswers.question10 - parseInt(friendsData[i].question10))

            //calculate the difference for all questions
            var difference = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10

            //logic for determining if friendsData[i] is currently the best match.
            if (difference < leastDifference)
            leastDifference = differnece;
            bestFriend = friendsData[i].name;
            photo = friendsData[i].photo;
            
        }
        //object to store the best match
        var newBestFriend = {
            name: bestFriend,
            photo: photo
        }
        //push the user into the friendsData for future people to match with
        friendsData.push(user)

        //return the best match
        return res.json(newBestFriend);
        
    })

}