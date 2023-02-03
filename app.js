
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const mongoUtil = require('./mongoUtil');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


const {SESSION_SECRET,PORT}=process.env;

app.use(session({
  secret: SESSION_SECRET,
  saveUninitialized:true,
  resave: false
}));

app.listen(PORT || 5000,async ()=>{
  console.log("Server started on port",PORT || 5000);
  mongoUtil.connectDB(async (err)=>{
    if(err) throw err;
    console.log("Connected to Database Successfully");
  })
});

const authRouter=require('./routes/authRoute');
const homeRouter=require('./routes/homeRoute');
const cartRouter=require('./routes/cartRoute');
const productsRouter=require('./routes/productRoute');

app.use('/', authRouter);

// session middleware
app.use((req, res, next) => {
  if (!req.session.success) {
    res.redirect('/');
  } else {
    next();
  }
});

app.use('/cart', cartRouter);
app.use('/products', productsRouter);
app.use('/home', homeRouter);



