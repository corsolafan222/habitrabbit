

/*JSON files for the different body parts. We display different exercises based on 
the url parameters that we find using req.query 
http://sailsjs.com/documentation/reference/request-req/req-query 
*/

var data = require('../exerciseList.json');

//JSON.parse... copies an array of exerciseList.json that we can manipulate
var dataHead = (JSON.parse(JSON.stringify(data)));
//.splice deletes the unneeded exercises, splice(starting#, #todelete)
dataHead.exercises.splice(7,4);
dataHead.exercises.splice(4,1);
dataHead.exercises.splice(0,3);

//exercises 3,5,6
var dataUpperBody = (JSON.parse(JSON.stringify(data)));;
dataUpperBody.exercises.splice(5,6);
dataUpperBody.exercises.splice(3,1);
dataUpperBody.exercises.splice(0,1);
//.exercises[1,2,4];
var dataLowerBody = (JSON.parse(JSON.stringify(data)));;
dataLowerBody.exercises.splice(1,8);
//.exercises[0,9,10];
var dataLegs = (JSON.parse(JSON.stringify(data)));;
dataLegs.exercises.splice(9,2);
dataLegs.exercises.splice(0,7);
//.exercises[7,8];

/*If the user clicks a body part on the home page, it will set
pickedbody based on the url. If they go through the nav bar, it will
default to showing all exercises. Should we make it so that it
keeps the most recent entry? */
exports.viewExercises = function(req,res){
	var data = require('../exerciseList.json');
	var pickedbody = req.query.bodyPart;
	console.log(pickedbody);
	//Depending on which bpart is clicked, send different arrays
	if (pickedbody == "head") {
		res.render('exercisesB', dataHead);
	}
	else if (pickedbody == "upperbody") {
		res.render('exercisesB',dataUpperBody);
	}
	else if (pickedbody == "lowerbody") {
		res.render('exercisesB',dataLowerBody);
	}
	else if (pickedbody == "legs") {
		res.render('exercisesB',dataLegs);
	}
	else {
		// data.exercises[1].fav = true
		res.render('exercisesB', data);
	}
};

exports.favExercise = function(req, res){
	// console.log(req.body.id1)
	data.exercises[req.body.id1].fav = !data.exercises[req.body.id1].fav;
	res.send(req.body.id1)
}