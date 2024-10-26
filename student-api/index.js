const express = require('express');
const api = express();
const port = 5001;

api.use(express.json());

api.get('/students',(req,res)=>{
    res.json(students);
})

api.get('/students/:id',(req,res)=>{
    const id = Number(req.params.id);
    const record = students.find((student)=> student.id === id);

    if(record){
        res.json(record);
    }else{
        res.status(404).send("Student Record Not Found!");
    }
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



const students=[
    {id: 1, name: "Anil", age: 23, program: "B.Sc.IT", sem: "II"},
    {id: 2, name: "Anikesh", age: 22, program: "BCA", sem: "III"},
    {id: 3, name: "Anirudh", age: 24, program: "MCA", sem: "I"},
    {id: 4, name: "Anil Sharma", age: 21, program: "B.Tech", sem: "IV"},
    {id: 5, name: "Anil Gupta", age: 22, program: "B.Com", sem: "V"},
];