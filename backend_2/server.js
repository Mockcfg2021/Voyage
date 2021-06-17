const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const conn = require("./firebase_connect");


app.listen(port,function(err,data){
    if(err)
        console.log(err);
    else
        console.log("connected");
});

app.post("/signup",function(req){
    //insert
    const UsersRef = conn.database().ref('Users/');
    const user_id = UsersRef.push().key;
    let username = req.body.username;
    console.log(req.body);
    conn.database().ref("Users/"+user_id).set({
        gender: req.body.gender,
        username:req.body.username,
        mail: req.body.mail,   
    });
    // console.log(UsersRef);
    //retrieve
    var starCountRef = conn.database().ref('Users/' + 'SMopd2FsfEMl2b3k5vb1wXpu6Sz2');
    starCountRef.on('value', (snapshot) => {
        console.log(snapshot.key);
    const data = snapshot.val();
    console.log(data);
    });
    // callback(null,{"statuscode":200,"message":"user inserted"});
    return username;
})



