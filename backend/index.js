const express = require('express');
const {MongoClient, ObjectId} = require('mongodb')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
const mongodbConnect = require('./config/config');
const Signup = require('./api/Signup');
const moongoose = require('mongoose');
const { default: mongoose } = require('mongoose');
const Signin = require('./api/Signin');
var multer = require('multer');
var fs = require('fs');
var path =  require('path');
app.use(cors());
app.use(express.json())

app.use(bodyParser.json())

const url = process.env.URL;

moongoose.connect(url);
app.post('/Signup', Signup);

app.post('/Signin', Signin);

app.get('/token',(req, res, next) => {
    const token = req.token
    if (!token) return res.status(403).send('Token is required');
    jwt.verify(token, '123456', (err, decoded) => {
      if (err) return res.status(401).send('Invalid token');
      req.email = decoded.email;
      
      next();
    });
  });

app.post('/role', async(req, res) =>{
  let email = req.body.email;
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("users");
  await collection.find({email: email}).toArray().then(result=>{
    console.log(result);
     res.send(result);
   })
})
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '/images/'); // Change this to your desired directory
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
 
var upload = multer({storage: storage});
app.post('/Student', upload.single('file'), (req, res)=>{
  let {file, name, email, phone, subject, Class, gender, address, password}= req.body;
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("Students");
  let obj = {
    name: name,
    email: email,
    address: address,
    gender: gender,
    subject: subject,
    Class: Class,
    password: password,
    phone: phone,
    img: fs.readFileSync(path.join(__dirname + '/images/' + req.file.filename))
   
  }
 collection.insertOne(obj).then(result =>{
    if(result){
      collection.find().toArray().then(result1 =>{
        res.send({
          "message": "updated",
           "data": result1
          
        });
     
     })
    

    }
    else{
      res.send("error");
    }
 })


})
app.post('/Students', (req, res)=>{
  
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("Students");
  
 collection.find().toArray().then(result =>{
     
      res.send(result);

     
 })

})
app.post('/filter', (req, res)=>{
  let data = req.body.data;
  console.log(data)
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("Students");
  
 collection.find({gender: data}).toArray().then(result =>{
      
      res.send(result);
      console.log(result)
    

     
 })

})
app.post('/filter1', (req, res)=>{
  let data = req.body.data;
  console.log(data)
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("Students");
  
 collection.find({Class: data}).toArray().then(result =>{
      
      res.send(result);
      console.log(result)
    

     
 })

})
app.post('/filter2', (req, res)=>{
  let data = req.body.data;
  console.log(data)
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("Students");
  
 collection.find({$or:[{email: data}, {name: data}]}).toArray().then(result =>{
      
      res.send(result);
    
    

     
 })

})

app.post('/profile', (req, res)=>{
  let id = req.body.id;
  const objectid = new ObjectId(id);
  
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("Students");
  
 collection.find({_id: objectid}).toArray().then(result =>{
     
      res.send(result);
     
     
 })

})


app.post('/Teacher', upload.single('file'), (req, res)=>{
  let {file, name, email, phone, subject, Class, gender, address, password}= req.body;
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("Teachers");
  let obj = {
    name: name,
    email: email,
    address: address,
    gender: gender,
    subject: subject,
    Class: Class,
    password: password,
    phone: phone,
    img: fs.readFileSync(path.join(__dirname + '/images/' + req.file.filename))
   
  }
 collection.insertOne(obj).then(result =>{
    if(result){
      collection.find().toArray().then(result1 =>{
        res.send({
          "message": "updated",
           "data": result1
          
        });
     
     })
    

    }
    else{
      res.send("error");
    }
 })


})
app.post('/Teachers', (req, res)=>{
  
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("Teachers");
  
 collection.find().toArray().then(result =>{
     
      res.send(result);

     
 })

})
app.post('/t_filter', (req, res)=>{
  let data = req.body.data;
  console.log(data)
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("Teachers");
  
 collection.find({gender: data}).toArray().then(result =>{
      
      res.send(result);
      console.log(result)
    

     
 })

})
app.post('/t_filter1', (req, res)=>{
  let data = req.body.data;
  console.log(data)
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("Teachers");
  
 collection.find({Class: data}).toArray().then(result =>{
      
      res.send(result);
      console.log(result)
    

     
 })

})
app.post('/t_filter2', (req, res)=>{
  let data = req.body.data;
  console.log(data)
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("Teachers");
  
 collection.find({$or:[{email: data}, {name: data}]}).toArray().then(result =>{
      
      res.send(result);
    
    

     
 })

})

app.post('/t_profile', (req, res)=>{
  let id = req.body.id;
  const objectid = new ObjectId(id);
  
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("Teachers");
  
 collection.find({_id: objectid}).toArray().then(result =>{
     
      res.send(result);
     
     
 })

})

app.post('/courses', (req, res)=>{
  let {name, price, detail} = req.body;
  console.log(req.body.name);
  console.log(name);
  
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("courses");
  let obj = {
    name: name,
    price: price,
    detail: detail
  }
  collection.insertOne(obj).then(result=>{
    if(result){
      res.send("updated");
    }
  })
 

})
app.post('/courses1', (req, res)=>{
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("courses");
  collection.find().toArray().then(result =>{
    res.send(result);
    console.log(result);
  })
})

app.post('/module_submit', (req, res)=>{
  let {id, name} = req.body;
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("modules");
  let obj = {
    topic_id: id,
    name: name
  }
  collection.insertOne(obj).then(result =>{
    
    if(result){
      collection.find({name: name}).toArray().then(result =>{
        if(result){
          res.send({"success": "updated", "data": result });
        }

      })
    }
  })

})
app.post('/topic_submit', upload.single('file'), (req, res)=>{
  let {title, topic_id, type} = req.body;

  let obj = {
    name: title,
    topic_id: topic_id,
    type: type,
    file: fs.readFileSync(path.join(__dirname + '/images/' + req.file.filename))
    
  }
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("videos");
  collection.insertOne(obj).then(result =>{
    if(result){
      res.send("updated");
     
    }
   
  });



})
app.post('/modules', (req, res)=>{

const client = new MongoClient(url);
const db = client.db("School_Management");
const collection = db.collection("modules");
collection.find({topic_id: "66faf32dc0b649c2a5bf8bc0"}).toArray().then(result =>{
  res.send(result);
})
  
})
app.post('/topics', (req, res)=>{
  let {name} = req.body;
  console.log(name)
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("videos");

  collection.find({topic_id: name}).toArray().then(result=>{
    res.send(result);
   

  })


})
app.post('/video', (req, res)=>{
  let {id} = req.body;
  console.log(id)
  let objectid = new ObjectId(id);
  const client = new MongoClient(url);
  const db = client.db("School_Management");
  const collection = db.collection("videos");

  collection.find({_id: objectid}).toArray().then(result=>{
    res.send(result);
   
  })


})
app.get('/', (req, res)=>{
    res.send("<h1>hello</h1>")
})
app.listen(5000);