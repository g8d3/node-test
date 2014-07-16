var debug      = require('debug')('myapp');
var express    = require('express');
var session    = require('express-session');
var engines    = require('consolidate');
debug('with colors');

var app = express();
app.use(session({secret: 'keyboard cat', saveUninitialized: true,
                 resave: true}))


app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('*',function(req, res){
  require('fs').readFile('views/index.html', 'utf8', function(err, data){
    if(err) throw err;
    res.send(data);
  })
  // res.sendfile('views/index.html');
});

app.listen(3000);
debug("Started!");
