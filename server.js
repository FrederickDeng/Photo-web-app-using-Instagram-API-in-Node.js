// grab all the package
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

ig.use({
    client_id: 'bf481134f9074a77acf4f7f45b2ae48c',
    client_secret: 'a4ce35ac14cf4ab9b0ac156404134d09'
});

app.get('/', function(req, res){
    ig.media_popular(function(err, medias, remaining, limit){
        if (err) console.log("media_popular error");
        res.render('pages/index', { grams: medias });
    });
});

app.listen(8080, function(error){
    if (error) {
        console.log("Error");
    } else {
        console.log("Listening on port 8080");
    }
});
