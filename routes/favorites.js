var data = require('../exerciseList.json');

exports.viewFavorites = function(req,res) {

	res.render('favorites', data)
};

/*
exports.favExercise = function(req, res){
// console.log(req.body.id1)
data.exercises[req.body.id1].fav = !data.exercises[req.body.id1].fav;
res.send(req.body.id1)
};
*/