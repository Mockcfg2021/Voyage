const express = require('express');
const app = express();
const port = 3000;
var admin = require("firebase-admin");

var serviceAccount = require("C:/Users/tanis/demo/start/backend/cfg-2021-team-29-firebase-adminsdk-wwl5c-9c48e5dabc.json");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://cfg-2021-team-29-default-rtdb.firebaseio.com"
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log("HI!!!!!!");
});