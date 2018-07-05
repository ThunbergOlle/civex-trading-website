// Module required to run this server.
const express = require('express');
const path = require('path');
const expressValidator = require('express-validator');
const mongodb = require('mongodb').MongoClient;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const signale = require('signale');
signale.success("Modules required. Now proceeding to run the script...");

// Modules section (Made by me.)
// And also important json files
const items = require('./data/items.json');


// Other variables
var app = express();
const port = 3000;
var visits = 0;

// Setting up app and settings for view enigne and more....
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'../src/statics')));
app.set('views', path.join(__dirname, '../src/pages'));
app.use(cookieParser());
app.use(session({
    secret: 'password',
    name: 'steamlogin',
    resave: true,
    saveUninitialized: true
}));

signale.success("App is fully setup!");

mongodb.connect('mongodb://127.0.0.1/civex', function(err, db){
    if(err) throw err;
    var dbo = db.db("trades");
    signale.success("Connected to database without errors!");
    app.get('/', (req, res) => {
        res.render('index', {
            items: items
        });
        visits += 1;
    });
});
app.listen(port, function(){
    signale.success('Listening to port: ' + port);
});