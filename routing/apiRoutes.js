//getting npm packages ready to be used
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//setting up router for implementation
const router = express.Router();

//setting up the packages to be used by express 
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.text());
router.use(bodyParser.json({ type: "application/vnd.api+json" }));

//array of possible matches
const friends = [{
	name: "John",
	photo: "https://www.gv.com/img/team-large/john-lyman.jpg",
	scores:[
		1,
		2,
		4,
		5,
		4,
		3,
		2,
		2,
		1,
		1	
		],
	grade: "D"
}, 
{
	name: "Elen",
	photo: "http://img06.deviantart.net/e7fe/i/2014/365/f/6/lara_croft_underworld_3_by_elen_mart-d8bzhfp.jpg",
	scores:[
		1,
		1,
		4,
		3,
		1,
		3,
		2,
		2,
		1,
		1	
		],
	grade: "B"
},
{
	name: "Maria",
	photo: "http://static.boredpanda.com/blog/wp-content/uploads/2016/08/woman-pilot-yoga-maria-pettersson11.jpg",
	scores:[
		1,
		1,
		4,
		3,
		3,
		3,
		2,
		2,
		1,
		1	
		],
	grade: "A"
}
	
]

//route to friends API
router.get("/api/friends", function(request, response){
		response.json(friends);

});

//adds new friend to array, matches user with best match
router.post("/api/new_friends", function(req, res){
	friends.push(req.body)

	for (var j = 0; j < friends.length; j++){
	if (friends[j].grade === req.body.grade[0]){
		res.send(friends[j])
		console.log(req.body.grade[0])
	}
}
	
});

//exporting file to be used on the server.js file    
module.exports = router;