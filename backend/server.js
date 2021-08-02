require('dotenv').config();
const saltedMd5=require('salted-md5')
const path=require('path');
const multer=require('multer')
const upload=multer({storage: multer.memoryStorage()})
const fire = require("firebase");


const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const port = 5000;


var app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



const firebase = require("./firebase_connect");
const { getMaxListeners } = require('process');
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
    const name = req.body.userName;
    const role = req.body.role.toLowerCase();
    var user_id = null;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        user_id = user.uid;
        console.log("User Authenticated");
    })
    .then(() =>{
        let docRef=db.collection('users').doc(user_id).set({
          email: email,
          userName: name,
          number: req.body.number,
          role: role,
        })

        if(role.toLowerCase() == "teacher")
        {
          db.collection('users').doc(user_id).update({
            school : req.body.school,
            // city : req.body.city,
            points : 0,
            badges : 0,
            courses: {},
          })
        }
        else if(role.toLowerCase() == "leader")
        {
          db.collection('users').doc(user_id).update({
            school : req.body.school,
            // city : req.body.city,
          })
        }

        // .then(() => {
        //     res.json({uid : user_id, err_msg : null});
        // })
        // .catch((error) => {
        //     res.json({uid : null, err_msg : error});
        // });
    })
    .then(() => {
          res.json({uid : user_id, role : role, err_msg : null});
      })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      res.json({uid : null, role : null, err_msg : errorMessage});
      // ..
    });
  });

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    var uid = "";
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    db.collection('users').doc(user.uid).get().then((doc) => {  
    res.json({uid : user.uid, role : doc.data().role, err_msg : null});
    }).catch((error) => {
      res.json({uid : null, role : null, err_msg : error.message});
  });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    res.json({uid : null, role : null, err_msg : errorMessage});
  });
  
  
});

app.put("/editUser", (req, res) => {
  if(role.toLowerCase() == "teacher"){
    db.collection('users').doc(req.body.uid).update({
      userName: req.body.userName,
      number: req.body.number,
      school : req.body.school
      }).then(() => {
        res.json({msg : "Document successfully updated!", err : null});
    })
    .catch((error) => {
        // The document probably doesn't exist.
        res.json({msg : null, err : error});
    });
  }
  else if(role.toLowerCase() == "leader"){
    db.collection('users').doc(req.body.uid).update({      
        userName: req.body.userName,
        number: req.body.number,
        school: req.body.school
    }).then(() => {
      res.json({msg : "Document successfully updated!", err : null});
  })
  .catch((error) => {
      // The document probably doesn't exist.
      res.json({msg : null, err : error});
  });
  }
  else{
    db.collection('users').doc(req.body.uid).update({
        userName:req.body.userName,
        number:req.body.number
    }).then(() => {
      res.json({msg : "Document successfully updated!", err : null});
  })
  .catch((error) => {
      // The document probably doesn't exist.
      res.json({msg : null, err : error});
  });
  }
});

app.get("/forgotpass", (req, res) => {
firebase.auth().sendPasswordResetEmail(req.body.email)
  .then(() => {
    // Password reset email sent!
    // ..
    console.log("Success");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(error.message);
  });
})

app.get("/logout", (req, res) => {

    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("yes");
      }).catch((error) => {
        // An error happened.
        console.error(error);
      });
})

app.post('/upload',upload.single('file'),async(req,res)=>{
    console.log(req);
    const name = saltedMd5(req.file.originalname, 'SUPER-S@LT!')
    const fileName = name + path.extname(req.file.originalname)
    await app.locals.bucket.file(fileName).createWriteStream().end(req.file.buffer)
    res.send('done');
    })

app.get("/google/auth", (req, res) => {
    var provider = new fire.auth.GoogleAuthProvider();

    console.log("IN");
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
})

app.post("/resources/upload", (req, res) => {
  console.log(typeof req.body.source);
  db.collection('resources').doc(req.body.topic).set({
    resource: req.body.source
  })
  .then(() => {
    res.json({msg : "Uploaded!", err : null});
})
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    res.json({msg : null, err : errorMessage});
    // ..
  });
});

app.get("/resources",(req,res)=>{
  db.collection('resources').get().then((data) => {
    const temp = []
    // console.log(data);
    const response = data.forEach((doc) => {
    // console.log(doc.id);
    temp.push({topic : doc.id,resource : doc.data()['resource']})
   })
  //  console.log(temp);
   res.json({courses:temp});
}).catch((error) => {
  res.json({courses : [], err_msg : error.message});
});
});

app.get("/leaderboard/:id", (req, res) => {
  let id = req.params.id;
  let i = 0;
  let rank = 0;
  let leader = [];
  db.collection("users").orderBy("points", "desc").get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      leader.push([doc.data().userName, doc.data().points]);
      i = i+1;
      if(doc.id == id){
        rank = i;
      }
    })
    
    let n = Math.min(10, leader.length);
    topLeader = leader.slice(0, n);
      res.json({leader : topLeader, err : null, rank : rank});
  
  })
  .catch((error) => {
    console.log(error);
  });
});

app.get("/leaderboard", (req, res) => {
  let leader = [];
  db.collection("users").orderBy("points", "desc").get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      leader.push([doc.data().userName, doc.data().points]);
    })
    
    let n = Math.min(10, leader.length);
    topLeader = leader.slice(0, n);
      res.json({leader : topLeader, err : null});
  
  })
  .catch((error) => {
    console.log(error);
  });
});


app.get("/profile/:id", (req, res) => {
  db.collection('users').doc(req.params.id).get().then((doc)=>{
    res.json({user: doc.data(), err : null});
}).catch((err) => {
  res.json({user: null, err: err.message});
});
});

app.post("/teachers",(req,res)=>{
  var school;
  db.collection('users').doc(req.body.uid).get().then((doc)=>{
    school = doc.data().school;
    console.log(school);
    db.collection('users').where('school', '==', school).where('role','==','teacher')
    .get().then((data)=>{
      var teachers= [];
      data.forEach(doc =>
      {
          teachers.push({
            uid: doc.id,
            userName: doc.data().userName,
            email: doc.data().email,
            points: doc.data().points,
            number: doc.data().number,
            badge: doc.data().badge,
            courses: doc.data().courses,
          });
      });
      res.json({teachers : teachers, err_msg : error.message});
    });
  }).catch((error) => {
    res.json({teachers :[], err_msg : error.message});
});
});

app.get("/teachersforngo",(req,res)=>{
  db.collection('users').where('role','==','teacher')
  .get().then((data)=>{
    var teachers= [];
    data.forEach(doc =>
    {
        teachers.push({
          uid: doc.id,
          userName: doc.data().userName,
          email: doc.data().email,
          points: doc.data().points,
          number: doc.data().number,
          badge: doc.data().badge,
          courses: doc.data().courses,
        });
    });
    res.json({teachers : teachers, err_msg : error.message});
  })
  .catch((error) => {
    res.json({teachers :[], err_msg : error.message});
});
});

app.post("/feedback",(req, res)=>{
  const newFeedback = {
  for_teacher : req.body.userfor,
  by : req.body.by,
  feedback : req.body.feedback,
  byrole : req.body.role,
  hidden : req.body.hidden,
  timestamp : new Date(),
}
  db.collection('feedback').add(newFeedback)
  .then(() => {
    res.json({msg : "Feedback added", err_msg : null});
})
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    res.json({msg : null, err : errorMessage});
    // ..
  });
});

app.get("/showfeedbackngo/:id", (req, res) => {
  let id = req.params.id;
  var feedbacks= [];
  console.log(id);
  db.collection("feedback").where('for_teacher', '==', id).limit(3).get()
  .then((data)=>{    
    console.log(data);
    data.forEach(doc =>
    { console.log("P");
      console.log(doc);
        feedbacks.push({
          feedback: doc.data().feedback,
          by: doc.data().byrole,
        });
      
    });
    console.log(feedbacks);
    res.json({feedbacks: feedbacks, err: null});
}).catch((err) => {
    res.json({feedbacks: null, by: null, err: err.message});
})
});
app.post("/updatePoints", (req,res)=>{
  var uid = req.body.uid;
  var course = req.body.course;
  var points = req.body.points;
  var prevpoints;
  var newval;
  var prev;
  var obj;
  db.collection('users').doc(uid).get().then(doc => {
     prev = (doc.data().courses[course]==undefined) ? 0 : doc.data().courses[course];
     newval = Math.max(prev,points);
     prevpoints = doc.data().points;
     obj = doc.get("courses");
     obj[course] = newval;
  })
  .then(()=>{
    db.collection('users').doc(uid).set({
      points : (prevpoints -prev + newval),
      courses : obj,
    },{merge : true})
    .then(()=>{
      res.json({err_msg : null});
    })
  })
  .catch((error) => {
    res.json({err_msg : error.message});
  });
});

app.get("/showfeedback/:id", (req, res) => {
  let id = req.params.id;
  var feedbacks= [];
  db.collection("feedback").where('for_teacher', '==', id).where('hidden','==','false').get()
  .then((data)=>{    
    data.forEach(doc =>
    {
        feedbacks.push({
          feedback: doc.data().feedback,
          by: doc.data().byrole,
        });
      
    });
    res.json({feedbacks: feedbacks, err: null});
}).catch((err) => {
    res.json({feedbacks: null, by: null, err: err.message});
})
});

app.get("/updatebadge", (req, res) => {
  db.collection('users').get()
  .then((data)=>{    
    data.forEach(docc =>
    {
      let level = 0;
      let points = docc.data().points;
      
      if(points >= 20)
        level = 1;
      else if(points >= 40)
        level = 2;
      else if(points >= 60)
        level = 3;
      else if(points >= 80)
        level = 4;
      else if(points > 100)
        level = 5;
      db.collection('users').doc(docc.id).update({
        badge: level
      }).then(() => {
        res.json({msg : "Document successfully updated!", err : null});
    })
    .catch((error) => {
        // The document probably doesn't exist.
        res.json({msg : null, err : error});
    });
    })
  })
})

// app.post("/signup",function(req){
//     //insert
//     const UsersRef = firebase.database().ref('users/');
//     const user_id = UsersRef.push().key;
//     let username = req.body.username;
//     console.log(req.body);
//     firebase.database().ref("users/"+user_id).set({
//         gender: req.body.gender,
//         username:req.body.username,
//         mail: req.body.mail,   
//     });
//     // console.log(UsersRef);
//     //retrieve
//     var starCountRef = firebase.database().ref('users/' + 'SMopd2FsfEMl2b3k5vb1wXpu6Sz2');
//     starCountRef.on('value', (snapshot) => {
//         console.log(snapshot.key);
//     const data = snapshot.val();
//     console.log(data);
//     });
//     // callback(null,{"statuscode":200,"message":"user inserted"});
//     return username;
// })

// exports.api = functions.region('asia-east2').https.onRequest(app);