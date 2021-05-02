var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/p7/', function (req, res, next) {
  console.log('Multiple Callback function');
  next()
}, function (req, res) {
  res.render('index',{title: 'This is second function'});
});

function first(req,res,next){
  console.log("This is first function");
  next();
}

function second(req,res,next){
  console.log("This is second function");
  next();
}

function third(req,res){
  res.render('index',{title:'Array functions'});
}

router.get('/array/',[first,second,third]);

module.exports = router;
