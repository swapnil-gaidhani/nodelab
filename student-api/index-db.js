const express = require('express');
const mysql = require('mysql');
//Create MYSQL Connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "studentdata"
  });

// Test Connection
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

const api = express();
const port = 5001;

api.use(express.json());

api.get('/students',(req,res)=>{
    
    con.query("SELECT * FROM students", (err, result, fields) =>{
            if (err) throw err;
            res.json(result);        
          });
    con.end();
    
})

api.get('/students/:id',(req,res)=>{
    const id = Number(req.params.id);
    const query = `select * from students WHERE ID=${id}`;
    con.query(query, (err, result, fields) =>{
        if (err) throw err;
        res.json(result);        
      });
    con.end();
})

api.post('/students',(req,res)=>{
    const newStudentId = students.length + 1;
    const newStudent={
        id: newStudentId,
        name: req.body.name,
        age: req.body.age,
        program: req.body.program,
        sem: req.body.sem
    }
    students.push(newStudent);
    res.status(200).send(newStudent);
});

api.put('/students/:id',(req,res)=>{
    const id = Number(req.params.id);
    const record = students.find((student)=> student.id === id);

    if(record){
        record.name = req.body.name;
        record.age = req.body.age;
        record.program = req.body.program;
        record.sem = req.body.sem;
        res.status(200).send("Record updated successfully");
    }else{
        res.status(404).send("Student Record Not Found!");
    }
});

api.delete('/students/:id',(req,res)=>{
    const id = Number(req.params.id);
    const indexNumber = students.findIndex((student)=> student.id === id);
    if(indexNumber){
        students.splice(indexNumber,1);
        res.status(200).send("Record Deleted Successfuly!");
    }else{
        res.status(404).send("Student Record Not Found!");
    }
});

api.listen(port,()=>{
    console.log(`API Server is running on http://localhost:${port}.`);    
});



