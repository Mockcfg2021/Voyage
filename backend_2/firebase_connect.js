const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const app = firebase.initializeApp({
    apiKey: "AIzaSyDGBFLQF3afGH17DWYdRn7i5qHGh_9pg2o",
    authDomain: "cfg-2021-team-29.firebaseapp.com",
    databaseURL: "https://cfg-2021-team-29-default-rtdb.firebaseio.com",
    projectId: "cfg-2021-team-29",
    storageBucket: "cfg-2021-team-29.appspot.com",
    messagingSenderId: "631598963206",
    appId: "1:631598963206:web:b24c3b144c21863ec7c187",
    measurementId: "G-7ZNVKK9972"
})

module.exports  = app;