
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
      'exercises': [
      { 'name': 'wrist-exercise',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'filler1'
      },
      { 'name': 'leg-exercise',
        'image': 'lorempixel.city.1.jpeg',
        'id': 'filler2'
      },
      { 'name': 'neck-exercise',
        'image': 'lorempixel.technics.1.jpeg',
        'id': 'filler3'
      }
    ]  
});
}