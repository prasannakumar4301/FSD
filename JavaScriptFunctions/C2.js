//Global Variables and Local Variables
var username = "Prasanna Kumar"

function f1(){
    var pword = "admin"
    console.log(username, pword)
}
f1()

console.log(username)
//console.log(pword)

//passing default variables in functions
function f2(a = 10, b  = 20){
    console.log(a, b)
}
f2()
f2(100, 200)

//passing key and values in functions
function f3(a, b){
    console.log(a = 100, b = 200)
}
f3()