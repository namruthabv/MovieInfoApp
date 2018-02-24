var express = require('express');

var app = express();
var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
 
app.get('/', routes.home);

app.get('/star_wars_episode/:episode_no?', routes.single_movie);

app.get('*', routes.error_msg);

app.listen('3000', function(){
    console.log("server is listening to port 3000");
})