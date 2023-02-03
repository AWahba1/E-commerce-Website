const mongoUtil = require('../mongoUtil');
const bcrypt = require('bcrypt');

const registerView= (req, res)=> {
    res.render('registration', { message: "" });
  }

const loginView=(req, res) =>{
    res.render('login', { error: "" });
  }

const register = async (req,res)=> {
  const {username, password}=req.body;
  if (username.length == 0 || password.length == 0) {
    res.render('registration', { message: "Username and password cannot be left empty."});
  }
  else{
    const matchingUsers = await mongoUtil.getDB().collection('Users').findOne({username});
    if (matchingUsers) {
      res.render('registration', { message: "Username is already used. Please choose another one" }); 
    }
    else {
      // Hash the password
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);

      const user = { username, password:hash, cart: [] };
      await mongoUtil.getDB().collection('Users').insertOne(user);
      res.redirect('/');
      
    }
  }
    
  }

 
  
const login=async (req, res)=> {
    const{username, password} = req.body;

    // decrypt the given password
    const user = await mongoUtil.getDB().collection('Users').findOne({username});
    const isMatching=await bcrypt.compare(password, user?.password??'');
    if (!user || !isMatching)
    {
      req.session.success = false;
      res.render('login', { error: "Invalid username or password"});
    }
    else 
    {
      req.session.success = true;
      req.session.username=username;
      res.redirect('home');
    }
  }

module.exports={
    registerView,
    loginView,
    register,
    login
};
  