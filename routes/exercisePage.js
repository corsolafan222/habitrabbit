exports.viewExPage = function(req,res) {
	var name = req.params.name;
	console.log("The exercise name is: " + name);
	res.render('exercisePage', {
		'exName' : name
	});
};