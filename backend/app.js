const express = require('express');
const app = express();
const port = 3000;
var admin = require("firebase-admin");

var serviceAccount = require("C:/Users/tanis/demo/start/backend/cfg-2021-team-29-firebase-adminsdk-wwl5c-9c48e5dabc.json");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://cfg-2021-team-29-default-rtdb.firebaseio.com"
});

app.use(express.json());
app.use(express.static('public'));

const database = admin.database();
const UsersRef = database.ref('/Users');

app.get('/', (req, res) => {
    res.send('hello');
});

app.post('/save', (req, res) => {
    const user_id = UsersRef.push().key;
    UsersRef.child(user_id).set({
        gender : req.body.gender,
        gender : req.body.gender,
        username : req.body.username
    });
});

app.put('/update', (req, res) => {
    UsersRef.child(req.body.user_id).update({
        age : req.body.age
    });
});

app.delete('/delete', (req, res) => {
    UsersRef.child(req.body.user_id).remove();
})

app.listen(port, () => {
    console.log("HI!!!!!!");
});