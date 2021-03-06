var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a useful resource');
  res.render('users/index');
});
router.get('/login', function(req, res, next) {
  res.render('users/login');
});
router.post('/login', function(req, res, next) {
  res.render('users/login');
});
router.get('/signup', function(req, res, next) {
  res.render('users/signup');
});
router.post('/signup', function(req, res, next) {
  res.render('users/signup');
});

module.exports = router;
