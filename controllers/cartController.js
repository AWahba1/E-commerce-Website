const mongoUtil = require('../mongoUtil');

const getCart= async (req, res)=> {
      const {username}=req.session;
      const user=await mongoUtil.getDB().collection('Users').findOne({username});
      const userCart=user.cart;
      const msg=userCart.length==0?"Cart is empty":"";
      res.render('cart',{msg,list:userCart});
 }



  const addTennis= async (req, res) =>{
    const addedSuccessfully=await addToCart(req.session.username,"Tennis Racket");
    const message=addedSuccessfully?"Item Added Successfully":"Item is Already in Cart";
    res.render('tennis', { message});
  
    }
  
  const addBoxing=async (req, res)=> {
    const addedSuccessfully=await addToCart(req.session.username,"Boxing Bag");
    const message=addedSuccessfully?"Item Added Successfully":"Item is Already in Cart";
    res.render('boxing', { message});
  }
  
  const addGalaxy= async  (req, res)=> {
    const addedSuccessfully=await addToCart(req.session.username,"Galaxy S21 Ultra");
    const message=addedSuccessfully?"Item Added Successfully":"Item is Already in Cart";
    res.render('galaxy', { message});
  }
  
  const addIphone=async (req, res) =>{
    const addedSuccessfully=await addToCart(req.session.username,"iPhone 13 Pro");
    const message=addedSuccessfully?"Item Added Successfully":"Item is Already in Cart";
    res.render('iphone', { message });
  } 

  const addSun=async(req, res) =>{
    const addedSuccessfully=await addToCart(req.session.username,"Sun and Her Flowers");
    const message=addedSuccessfully?"Item Added Successfully":"Item is Already in Cart";
    res.render('sun', { message });
  }
  
  const addLeaves= async (req, res)=> {
    const addedSuccessfully=await addToCart(req.session.username,"Leaves of Grass");
    const message=addedSuccessfully?"Item Added Successfully":"Item is Already in Cart";
    res.render('leaves', { message});
  }

  async function addToCart(username,item) {
    const user=await mongoUtil.getDB().collection('Users').findOne({username});
    const userCart=user.cart;

    if (!userCart.includes(item)) {
      userCart.push(item);
      await mongoUtil.getDB().collection('Users').updateOne({ username}, { $set: { cart: userCart } });
      return true;
    }
    else {
      return false;
    }
  
  }

  module.exports={
    getCart,
    addTennis,
    addBoxing,
    addGalaxy,
    addIphone,
    addSun,
    addLeaves
  }

