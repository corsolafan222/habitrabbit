
	var data = require('../exerciseList.json');

	exports.viewExPage = function(req,res){
		var name = req.params.name;
		console.log("the exercise name is: " + name);
		res.render('exercisePage', {
			'exName' : name
		});
	}
	
	exports.viewData = function(req,res){
		console.log(data);
		res.render('exercisePage',data);
	};
	/*console.log("The exercise name is: " + name);
	res.render('exercisePage', {
		'exName' : name
	});*/
