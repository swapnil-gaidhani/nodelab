const express = require('express');
const cookieHandler = require('cookie-parser');
const port = 4000;

const app = express();
app.set("view engine", "ejs");
app.use(cookieHandler());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.render('homepage',{message: ""});
});

app.get('/login',(req,res)=>{
    const user = req.cookies['user'];
    if(user)
        res.render('securepage',{message: `Hi ${user}`});
    else
        res.render('login',{});
});

app.post('/login',(req,res)=>{
    const usrname = req.body.usrname;
    const passwd = req.body.passwd;
    const userdata = users.find((user)=> user.username===usrname && user.password===passwd);
    if (userdata){
        res.cookie('user', userdata.username, { maxAge: 900000, httpOnly: true });
        res.render('securepage',{message: `Hi ${userdata.fullname}`});
    }else {
        res.render('homepage',{message: "user not found"});
    }

        
});

app.get('/register',(req,res)=>{
    res.render('register',{});
});

app.post('/register',(req,res)=>{
    
});

app.get('/secure',(req,res)=>{
    const user = req.cookies['user'];
    if(user)
        res.render('securepage',{message: `Hi ${user}`});
    else
        res.redirect('/');
});

app.get('/logout',(req,res)=>{
    res.clearCookie('user');      
    res.redirect('/');
});

const users = [
    {id:1, fullname:'Amar Gupta', username:'amar', password:'amar@123'},
    {id:1, fullname:'Anish Gupta', username:'anish', password:'anish@123'},
    {id:1, fullname:'Mahesh Gupta', username:'mahesh', password:'mahesh@123'},
    {id:1, fullname:'Naresh Gupta', username:'naresh', password:'naresh@123'}
];

app.listen(port,()=>{
    console.log(`Auth Server running on http://localhost:${port}`);
});

