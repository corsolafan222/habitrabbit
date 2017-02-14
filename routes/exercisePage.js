
	var data = require('../exerciseList.json');

	exports.viewExPage = function(req,res){
		console.log(data);
		res.render('exercisePage');
	};
	
	/*console.log("The exercise name is: " + name);
	res.render('exercisePage', {
		'exName' : name
	});*/
