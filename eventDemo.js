const eventemitter = require("node:events");
const logger = new eventemitter();

logger.on("login",(req) => {
    if(req.username == 'admin' && req.password == "queen@123")
        console.log("Login successful");
    else
        console.log("Try again!!!");
});
logger.emit("login",{username:'admin',password:'queen@123'});
