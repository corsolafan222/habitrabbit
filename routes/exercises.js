/*JSON files for the different body parts. We display different exercises based on 
the url parameters that we find using req.query 
http://sailsjs.com/documentation/reference/request-req/req-query 
*/

var data = require('../exerciseList.json');
var dataHead = require('../exerciseHead.json');
var dataUpperBody = require('../exerciseUpperBody.json');
var dataLowerBody = require('../exerciseLowerBody.json');
var dataLegs = require('../exerciseLegs.json');


/*If the user clicks a body part on the home page, it will set
pickedbody based on the url. If they go through the nav bar, it will
default to showing all exercises. Should we make it so that it
keeps the most recent entry? */
exports.viewExercises = function(req,res){
	var pickedbody = req.query.bodyPart;
	console.log(pickedbody);
	if (pickedbody == "head") {
		res.render('exercises', dataHead);
	}
	else if (pickedbody == "upperbody") {
		res.render('exercises',dataUpperBody);
	}
	else if (pickedbody == "lowerbody") {
		res.render('exercises',dataLowerBody);
	}
	else if (pickedbody == "legs") {
		res.render('exercises',dataLegs);
	}
	else {
		res.render('exercises', data);
	}
};