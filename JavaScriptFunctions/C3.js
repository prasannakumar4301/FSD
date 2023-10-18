// nested functions
function f1(){
    console.log("f1 function")
    function f2(){
        console.log("f2 function")
    }
    f2()
}
f1()

//assigning functions to variables
var f = function f3(){
    console.log('f3 function')
}
f()

//arguments
var n = function names(){
    console.log(arguments)
    console.log(arguments[0])
}
n("NameOne")
n("NameOne", "NameOne")
n(10, 20, 30, 40, 50, 60)