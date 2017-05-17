var friendList = require('../data/friends.js');

var bodyParser = require('body-parser');
var path = require ('path');

//create routes
module.exports = function (app){

		app.get('/api/friends', function (req, res){
		res.json(friends);
		//res.json(friendList);
		});

		app.post('/api/friends', function (req, res){
			
			var bestMatch = {
				name:"",
				image: "",
				matchDifference:1000
				// 'name': 'none',
				// 'photo': 'none'

			};

		var userTotal = sum(req.body.scores);

		var friendTotal = 0;

		var closest = 50;

		for (var i = 0; i < friendList.length; i++){
			friendTotal = sum(friendList[i].scores);
			var difference = Math.abs(friendTotal - userTotal);
			if(difference <= closest){
				closest = difference;
				bestMatch.name = friendList[i].name;
				bestMatch.photo = friendList[i].photo;
			};
		};

		function sum (array){
			var total = 0;
			for (var n = 0; n < array.length; n++){
				total += parseInt(array[n]);
			}

			return total;
		}

		console.log(bestMatch);
		res.json(bestMatch);





	});
};