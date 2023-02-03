const MongoClient = require('mongodb').MongoClient
require("dotenv").config();
const {DB_USER, DB_PASS, DB_NAME} = process.env;

 const uri =  `mongodb+srv://${DB_USER}:${DB_PASS}@e-commerce.k5bccfi.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
 let _db;

 const connectDB = async (callback) => {
     try {
         MongoClient.connect(uri, (err, client) => {
             _db = client.db(DB_NAME);
             return callback(err);
         })
     } catch (error) {
         callback(error);
     }
 }

 const getDB = () => _db;

 const disconnectDB = () => _db.close();

 module.exports = { connectDB, getDB, disconnectDB }