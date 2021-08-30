const express = require("express");
const app = express();
const {createConnection} = require('mysql');
const mySql = require('mysql');
const pool = createConnection({
    host:"localhost",
    user:"root",
    password: "naborly18@",
    insecureAuth : true,
    connectionLimit: 10
});

var cors = require("cors");
pool.connect((err)=>{
    if (err) {
        return console.error('error: ' + err.message);
      } 
      console.log('Connected to the MySQL server.');
});
app.use(cors());
app.get("/api",(req,res)=>{
   console.log("get");
   res.json(
       {message : "this is hello"});
});

app.get('/fetchAll',(req,res)=>{
    pool.query(`Select * from naborly_listings.listings`,(error,response)=>{
        if(error) return res.json("Please keep calm and relax!");
       res.json(response);
    });
});

app.get('/fetchAllById',(req,res)=>{
    const id = req.query.id;
    let selectQuery = 'Select * from naborly_listings.listings where id = ?';    
    let query = mySql.format(selectQuery,[id]);
    pool.query(query,(error,response)=>{
        if(error) return res.json("Please keep calm and relax!");
       res.json(response);
    });
});

app.get('/unmount',(req,res)=>{
    pool.end();
});

app.listen(3001, ()=>{
    console.log("may node be with you");
});