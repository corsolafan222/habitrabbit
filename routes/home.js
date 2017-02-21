var data = require('../exerciseList.json');

exports.viewHome = function(req,res) {
	var name = req.params.name;
	res.render('home', data);
};