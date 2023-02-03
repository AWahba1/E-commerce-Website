const express = require('express');
const router = express.Router();

// import from product controller
const {phonesView,
    booksView,
    sportsView,
    galaxyView,
    iphoneView,
    leavesView,
    sunView,
    tennisView,
    boxingView, 
    searchProducts}=require('../controllers/productController');

// product routes
router.get('/phones', phonesView);
router.get('/books', booksView);
router.get('/sports', sportsView);
router.get('/galaxy', galaxyView);
router.get('/iphone', iphoneView);
router.get('/leaves', leavesView);
router.get('/sun', sunView);
router.get('/tennis', tennisView);
router.get('/boxing', boxingView);
router.get('/search', searchProducts);



module.exports=router;


