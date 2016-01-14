var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a useful resource');
});
router.get('/edit/:id', function(req, res, next) {
  res.send('Edit Product');
});
router.get('/add', function(req, res, next) {
  res.send('Add Product');
});
module.exports = router;