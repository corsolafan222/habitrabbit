
var data = require('../exerciseList.json');
var pickedbody;

exports.viewExercises = function(req,res){
    //console.log(data);
  	//var pickedbody = { name: "head"}
	//data.part.push(pickedbody)
  //console.log(data)
  console.log(data.fav);
  var ex = data.exercises;
  var favorite = data.fav;
  res.render('exercises', {
			exercises : ex,
			fav : favorite,

		});
};

function pushFav(obj){
	data.fav.push(obj);
	return data.fav;
};

