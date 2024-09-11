const EventEmitter = require("node:events");

class Greet extends EventEmitter{
    getGreet(){
       this.on("Greet",(req)=>{
        console.log("Good Afternoon!!! ",req.username," How are you?");
       });
    }

    sendGreet(){
        this.emit("Greet",{username:"Aman"});
    }
}

//const greet = new Greet();
module.exports = Greet; 
