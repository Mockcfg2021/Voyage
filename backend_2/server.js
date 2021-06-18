const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
var admin = require("firebase-admin");
admin.initializeApp();

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const conn = require("./firebase_connect");
const firebase = conn;
let db=admin.firestore();

app.listen(port,function(err,data){
    if(err)
        console.log(err);
    else
        console.log("connected");
});

app.get("/", (req, res) => {
    res.send("hi");
});

app.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    var user_id = null;

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
      const user = userCredential.user;
      user_id = user.uid;
      res.json({uid : user_id, err_msg : null});
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      res.json({uid : null, err_msg : errorMessage});
      // ..
    });

app.post("/details/:id", (req, res) => {
        let docRef=db.collection('Users').doc(req.params.id).set({
            email:req.body.user.email,
            age:req.body.user.age
        }).then(() => {
            res.json({uid : user_id, err_msg : null});
        })
        .catch((error) => {
            res.json({uid : null, err_msg : error});
        });
    });
    // if(user_id != null){
        // let docRef=db.collection('Users').doc(user_id).set({
        //     email:req.body.user.email,
        //     age:req.body.user.age
        // }).then(() => {
        //     res.json({uid : user_id, err_msg : null});
        // })
        // .catch((error) => {
        //     res.json({uid : null, err_msg : error});
        // });
    
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

app.put("/editUser/:uid", (req, res) => {
    db.collection('Users').doc(req.params.uid).update({
        email:req.body.user.email,
        age:req.body.user.age
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



