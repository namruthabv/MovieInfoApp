
var movieJSON = require('../movies.json');
//var images = require('../public/images');

//home
exports.home = function(req, res){
    //res.send('This is a server response on the home page');
    var movies  = movieJSON.movies;
    res.render('home', {
        title : "Star war movies",
        movies : movies
    });
};

//single movie
exports.single_movie =  function(req,res){
    var episode_no = req.params.episode_no;
    res.send("Displaying star war episodes of " + episode_no);
};

//not found
exports.error_msg = function(req,res){
    res.send("This is not the page you are looking for");
};
