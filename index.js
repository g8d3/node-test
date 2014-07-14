var express    = require('express');
var flash      = require('connect-flash');
var session    = require('express-session');
var livereload = require('express-livereload');
var engines    = require('consolidate');

livereload(app);
var app = express();
app.use(session({secret: 'keyboard cat', saveUninitialized: true,
                 resave: true}))
app.use(flash());


app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', function(req, res){
  res.render('index.html', {flash: req.flash()});
});

app.route('/:path').
  all(function(req, res){
  req.flash('path', req.param('path'));
  res.redirect('/');
});

app.listen(3000);
console.log("Started!")
