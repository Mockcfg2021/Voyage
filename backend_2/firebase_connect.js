const firebase = require("firebase");

const app = firebase.initializeApp({
    apiKey: "AIzaSyDGBFLQF3afGH17DWYdRn7i5qHGh_9pg2o",
    authDomain: "cfg-2021-team-29.firebaseapp.com",
    databaseURL: "https://cfg-2021-team-29-default-rtdb.firebaseio.com",

})

module.exports  = app;