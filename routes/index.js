
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
      'exercisePage': [
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