var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnExpress';
// router.all(function (req, res, next) {
//     var url = 'mongodb://localhost:27017/learnExpress';
//     mongodb.connect(url, function (err, db) {
//         if (err) {
//             console.log(err);
//         } else {
//             req.collection = db.collection('products');
//             next();
//         }
//     });
    
// });
/* GET users listing. */
router.get('/', function (req, res, next) {
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

});
router.get('/edit/:id', function (req, res, next) {

    res.send('Edit Product');
});
router.get('/add', function (req, res, next) {
    res.render('products/add', {
        title: "Add Product"
    });
});
router.post('/add', function (req, res, next) {
    //Very bad idea. Move this to middleware
    mongodb.connect(url, function (err, db) {
        if (err) {
            console.log(err);
        } else {
            var collection = db.collection('products');
            collection.insert({ name: req.body.name, price: req.body.price });
            res.redirect(303,'/products');
        }
    });


    // res.render('products/index', { title: 'Products', message: 'Product Added' });
});
module.exports = router;