// Types of statements
// Selection statements: if, else, else if, switch
// Iteration statements: for, while, do-while
// Transfer Statements: break, continue

// unreachable code / dead code 
if(true){
    console.log("if condition")
}else{
    console.log("else condition")
}

if(false){
    console.log("if condition")
}else{
    console.log("else condition")
}

userName = "Admin"
userPassword = "Admins"

if(userName == "Admin" && userPassword == "Admin"){
    console.log("login success")
}else{
    console.log("login failure")
}

var userSalary = 10000
if(userSalary < 40000){
    console.log("Tax deduct")
}else{
    console.log("No tax deduct")
}