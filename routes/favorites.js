exports.viewFavorites = function(req,res) {
	var name = req.params.name;
	console.log("I hope this works");
	res.render('favorites', {
		'favoritesName' : name
	});
};