//Make a copy of this file and name it as firebase_connect.js. Also enter your configrations 
const firebase = require("firebase");
require("firebase/firestore");

const app = firebase.initializeApp({
  //Enter your configrations here
})

module.exports  = app;