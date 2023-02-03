const express = require('express');
const router = express.Router();

const{getCart,addLeaves,addSun,addIphone,addGalaxy,addBoxing,addTennis}=require('../controllers/cartController');

// add to cart routes
router.get('/', getCart);
router.post('/tennis', addTennis);
router.post('/boxing', addBoxing);
router.post('/galaxy', addGalaxy);
router.post('/iphone', addIphone);
router.post('/sun', addSun);
router.post('/leaves', addLeaves);

module.exports=router;