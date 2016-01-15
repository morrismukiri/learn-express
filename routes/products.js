var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;

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
                        )
                }

            })
        }

    })
    // res.send('respond with a useful resource');
});
router.get('/edit/:id', function (req, res, next) {

    res.send('Edit Product');
});
router.get('/add', function (req, res, next) {
    res.send('Add Product');
});
module.exports = router;