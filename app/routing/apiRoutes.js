// ===============================================================================
// LOAD DATA
// Linking our routes to a series of "data" sources.
// data source holds array of information on firends etc.
// ===============================================================================

var friendsProfiles = require("../data/friends");

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the friends)
  // ---------------------------------------------------------------------------
var matchingFriend = [];

  app.get("/api/friends", function(req, res) {
    res.json(friendsProfiles);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // Note the code here. Our "server" will respond to requests and let users know the closest match.

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    matchingFriend = [];
    var userScores = req.body.scores.map(function(num){
    	return parseInt(num);
    });

    var valueDiffereneArray = [];
    var userScores = req.body.scores; 

    for( var i=0;friendsProfiles.length >i;i++){
        var selectedFriendScores = friendsProfiles[i].scores; 
        var totalDiff =0;
        for( var j=0;selectedFriendScores.length >j; j++){
            totalDiff = totalDiff+ parseInt(Math.abs(userScores[j]-selectedFriendScores[j]));
        }
        valueDiffereneArray.push(totalDiff);

    }
    console.log(valueDiffereneArray);
    console.log('smallest value -->'+Math.min.apply(Math,valueDiffereneArray));

     var leastDifference = Math.min.apply(Math,valueDiffereneArray);
     
     //get the matching friend details 
     var matchingFriend = friendsProfiles[valueDiffereneArray.indexOf(leastDifference)];

    res.json(matchingFriend);
    
  });

};