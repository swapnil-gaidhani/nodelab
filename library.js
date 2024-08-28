function lib1(){
    console.log("This is library function call");
}
function lib2(){
    console.log("This is second library function call");
}

module.exports.lib1=lib1;

module.exports.func2=lib2;