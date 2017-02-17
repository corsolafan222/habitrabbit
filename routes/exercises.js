
var dat = require('../exerciseList.json');

function getExercises(obj){
		var result =[];
		var i;
		for(i=0;i<dat.exercises.length; i++){
			if (dat.exercises[i].bodyPart == obj){
				result.push(dat.exercises[i].id);
			}
		}

		return result;
}

exports.viewExercises = function(req,res){
  // console.log(data);
  //var pts = { name: "head"}
  var name = req.params.name;
  var list = getExercises(name);

  //data.part.push(pts)
  console.log(list);
  res.render('exercises', {
  		exId : list,
  		body : name
  });
  res.render('exercises', dat);

  console.log(dat.exercises[0].bodyPart);
  //res.render('exercises', data);
};

