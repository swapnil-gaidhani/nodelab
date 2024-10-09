const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('views', (__dirname + "/views"));
app.set('view engine', 'ejs');

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


app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
});