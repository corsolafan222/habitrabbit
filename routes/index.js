
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
      'pages': [
      { 'name': 'page1',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'filler1'
      },
      { 'name': 'page2',
        'image': 'lorempixel.city.1.jpeg',
        'id': 'filler2'
      },
      { 'name': 'page3',
        'image': 'lorempixel.technics.1.jpeg',
        'id': 'filler3'
      }
    ]  
});
}