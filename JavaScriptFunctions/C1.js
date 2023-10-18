var username = "Prasanna Kumar"
var password = "admin"
console.log(username, password)
console.log(username, password)
console.log(username, password)
console.log(username, password)

// function without arguments
function userDetails(){
    console.log("userDetails function invoked")
}

userDetails()

// functions with arguments
function userDetails1(uName, pWord){
    console.log("User Name is " + uName, "Password is " + pWord)
}

userDetails1("Sai Kiran", 'admin')
userDetails1("Sai kumar", 'admin')
userDetails1("Sai Ram", 'admin')
userDetails1("Sai Krishna", 'admin')

//functions with return keyword
function userDetails2(uName, pWord){
    return "User Name is" + uName, "Password is" + pWord
}
console.log(userDetails2("Vamsi", 'admin'))

