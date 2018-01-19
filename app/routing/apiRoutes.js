// My modules
var friends = require('../data/friends');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {

        return res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        // Empty object to push to
        var bestMatch = {
            name: "",
            photo: "",
            difference: 100
        };

        var userInfo = req.body;
        var userScore = userInfo.scores

        var totalDif = 0;

        for (var i = 0; i < friends.length; i++) {

            for (var k = 0; k < friends[i].scores[k]; k++) {

                totalDif += parseInt(userScore[k]) - parseInt(friends[i].scores[k]);

                if (totalDif <= bestMatch.difference) {

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.difference = totalDif;
                }
            }
        }

        friends.push(userInfo);

        res.json(bestMatch);

    });
}