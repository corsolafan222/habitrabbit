exports.viewExercises = function(req,res) {
	var name = req.params.name;
	console.log("The exercise name is: " + name);
	res.render('exercises', {
      'exercises': [
      { 'name': 'WristExercise',
        //'image': 'lorempixel.people.1.jpeg',
        'id': 'filler1'
      },
      { 'name': 'ArmExercise',
        //'image': 'lorempixel.city.1.jpeg',
        'id': 'filler2'
      },
      { 'name': 'ElbowExercise',
        //'image': 'lorempixel.technics.1.jpeg',
        'id': 'filler3'
      }
    ]  
});
}