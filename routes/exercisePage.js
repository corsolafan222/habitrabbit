
	var data = require('../exerciseList.json');
	
	/*function getArray(obj){
		const result =[];
		var i;
		for(i=0;i<data.exercises.length; i++){
			if (data.exercises[i].id == obj){
				result.push(data.exercises[i].name);
				result.push(data.exercises[i].description);
				result.push(data.exercises[i].time);
			}
			
		}

		return result;
	}*/

	exports.viewExPage = function(req,res){
		var exId = req.params.id;
		console.log("the exercise name is: " + data.exercises[exId].name +"\nDescription: "+data.exercises[exId].description);
		//console.log("data length: "+data.exercises.length);
		var exName = data.exercises[exId].name;
		var exDescription = data.exercises[exId].description;
		var exBodyPart = data.exercises[exId].bodyPart;
		var exEquipment = data.exercises[exId].equipment;
		var exImageURL = data.exercises[exId].imageURL;
		var exTime = data.exercises[exId].time;
		var newDescription = exDescription;
		var fav = data.exercises[exId].fav;
		//newDescription = newDescription.replace("/\n/g","<br>");
		newDescription = newDescription.replace("newline", "<br>");
		//console.log(newDescription);

		res.render('exercisePage',{
			fav : fav,
			name : exName,
			description : newDescription,
			bodyPart : exBodyPart, 
			equipment : exEquipment,
			time : exTime,
			equipment : exEquipment,
			imageURL : exImageURL

		});


		//const exercise = getArray(exId);
		//var name = result [0];
		//console.log(name);
		//res.render('exercisePage', {
			//'id' : exId
		//});
	}
	

	/*exports.viewData = function(req,res){
		console.log(data);
		res.render('exercisePage',data);
	};*/


	/*console.log("The exercise name is: " + name);
	res.render('exercisePage', {
		'exName' : name
	});*/
