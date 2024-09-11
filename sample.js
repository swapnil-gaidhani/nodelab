const os = require('os');
let computerMemory = os.totalmem();
let type = os.type();
console.log("Your computer has: ",computerMemory/(1024*1024*1024),'GB RAM');
console.log("Your OS type: ",type);
console.log("OS version: ",os.version());
console.log("OS platform:",os.platform());
console.log("CPUs: ",os.cpus().length);
console.log("CPU architecture: ", os.machine());