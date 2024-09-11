const fs = require('fs');
// this is sample text
//const files = fs.readdirSync("./");
/*fs.readdir('../../',function(err,files){
    if(err)
        console.log(err);
    else
        console.log(files);
});*/
console.log(fs.mkdirSync('./temp'));
//console.log(files);
