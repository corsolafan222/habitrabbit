
var data = require('../exerciseList.json');

exports.viewExercises = function(req,res){
  // console.log(data);
  var pts = { name: "lowerbody" }
  data.part.push(pts)
  console.log(data)
  res.render('exercises', data);
};
