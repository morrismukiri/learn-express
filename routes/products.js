var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
// var bodyParser = require('body-parser');
// var multer = require('multer'); // v1.0.5
// var upload = multer(); // for parsing multipart/form-data

/* GET users listing. */
router.get('/', function (req, res, next) {
    var url = 'mongodb://localhost:27017/learnExpress';
    mongodb.connect(url, function (err, db) {
        if (err) {
            console.log(err);
        } else {
            var collection = db.collection('products');
            collection.find({}).toArray(function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    res.render('products/index',
                        {
                            products: results
                        }
                        );
                }

            });
        }

    });
    // res.send('respond with a useful resource');
});
router.get('/edit/:id', function (req, res, next) {

    res.send('Edit Product');
});
router.get('/add', function (req, res, next) {
    res.render('products/add',{
        title:"Add Product"
    });
});
router.post('/add', function (req, res, next) {
    console.log('-------');
    // console.log(req);
    var name = req.body.name;
    res.json(req.body);
    console.log(name);
    // res.render('products/add');
});
module.exports = router;