
var data = require('../exerciseList.json');
var pickedbody;

exports.viewExercises = function(req,res){
    //console.log(data);
  	//var pickedbody = { name: "head"}
	//data.part.push(pickedbody)
  //console.log(data)
  res.render('exercises', data);
};

