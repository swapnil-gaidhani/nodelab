const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('views', (__dirname + "/views"));
app.set('view engine', 'ejs');

profile_data = [
    {
        name:"Anil",
        contact: "+91874876733",
        email: "anil@gmail.com",
        qualification:[
            {class: "10th", board: "CBSE", year: 2011},
            {class: "12th", board: "CBSE", year: 2013}
        ],
        hobbies:["cricket","music","reading"]
    },
    {
        name:"Anil",
        contact: "+91874876733",
        email: "anil@gmail.com",
        qualification:[
            {class: "10th", board: "CBSE", year: 2011},
            {class: "12th", board: "CBSE", year: 2013}
        ],
        hobbies:["cricket","music","reading"]
    },
    {
        name:"Anil",
        contact: "+91874876733",
        email: "anil@gmail.com",
        qualification:[
            {class: "10th", board: "CBSE", year: 2011},
            {class: "12th", board: "CBSE", year: 2013}
        ],
        hobbies:["cricket","music","reading"]
    }
];













app.get('/',(req,res)=>{
    const names=['Amit','Aman','Anikesh','Ajay','Arun','Arjun','Abhijit','Akhil','Anmol','Ankit'];
    let data=[];
    for (let i = 0; i<10; i++){
        data.push({id:`${i+1}`,name: names[i],jourseyNo:`${i+1}${i}`,completionTime:Number(Math.random().toFixed(2))+10})
    }
    console.log(data);
    res.render('home',{rows: data});    
});
app.get('/aboutus', (req,res)=>{
    res.send('Hi this is aboutus page');
})

app.get('/profile/:n',(req,res)=>{
    res.send(`Value you send to the page is : ${req.params.n}`);
})


app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
});