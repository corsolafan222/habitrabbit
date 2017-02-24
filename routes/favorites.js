var data = require('../exerciseList.json');

exports.viewFavorites = function(req,res) {

		res.render('favorites', data)
	};