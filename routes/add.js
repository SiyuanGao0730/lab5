var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var newName = req.query.name;
	var newDes = req.query.description;
	var newOne = {
		"name": newName,
		"description": newDes,
		"imageURL": "http://lorempixel.com/500/500/people"
	};

	data.friends.push(newOne);
	
	console.log(newOne);
	res.render('index', data);
 }