const lib = require('./lib.js');
const library = require('./library.js');
function myfunc(){
    console.log("print");
}
lib.lib1();
library.func2();

var a = [1,2,3,4,5];
var b = [...a];
b.pop();
console.log(a);
