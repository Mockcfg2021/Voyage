
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;


var app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const firebase = require("./firebase_connect");
const db = firebase.firestore();



app.listen(port,function(err,data){
    if(err)
        console.log(err);
    else
        console.log("connected");
});

app.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    var user_id = null;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        user_id = user.uid;
    })
    .then(() =>{
      console.log(user_id);
        let docRef=db.collection('Users').doc(user_id).set({
          email:req.body.email,
          age:req.body.age
        })
        .then(() => {
            res.json({uid : user_id, err_msg : null});
        })
        .catch((error) => {
            res.json({uid : null, err_msg : error});
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      res.json({uid : null, err_msg : errorMessage});
      // ..
    });
  });


app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    res.json({uid : user.uid, err_msg : null});
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    res.json({uid : null, err_msg : errorMessage});
  });
});

app.put("/editUser", (req, res) => {
    db.collection('Users').doc(req.body.uid).update({
        email:req.body.email,
        age:req.body.age
      }).then(() => {
        res.json({msg : "Document successfully updated!", err : null});
    })
    .catch((error) => {
        // The document probably doesn't exist.
        res.json({msg : null, err : error});
    });
});

app.get("/logout", (req, res) => {

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("yes");
      }).catch((error) => {
        // An error happened.
        console.error(error);
      });
})

app.post("/signup",function(req){
    //insert
    const UsersRef = firebase.database().ref('Users/');
    const user_id = UsersRef.push().key;
    let username = req.body.username;
    console.log(req.body);
    firebase.database().ref("Users/"+user_id).set({
        gender: req.body.gender,
        username:req.body.username,
        mail: req.body.mail,   
    });
    // console.log(UsersRef);
    //retrieve
    var starCountRef = firebase.database().ref('Users/' + 'SMopd2FsfEMl2b3k5vb1wXpu6Sz2');
    starCountRef.on('value', (snapshot) => {
        console.log(snapshot.key);
    const data = snapshot.val();
    console.log(data);
    });
    // callback(null,{"statuscode":200,"message":"user inserted"});
    return username;
})

// exports.api = functions.region('asia-east2').https.onRequest(app);


