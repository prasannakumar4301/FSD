// else if and switch case 
var userSalary = 10000
if(userSalary == 10000){
    console.log("UserSalary is ", userSalary)
}else if(userSalary == 20000){
    console.log("UserSalary is ", userSalary)
}else if(userSalary == 30000){
    console.log("UserSalary is ", userSalary)
}else if(userSalary == 40000){
    console.log("UserSalary is ", userSalary)
}else if(userSalary == 50000){
    console.log("UserSalary is ", userSalary)
}else{
    console.log("UserSalary is not validated", userSalary)
}

var userSalary = 50000
switch(userSalary){
    case 10000 : console.log("UserSalary is", userSalary)
    break
    case 20000 : console.log("UserSalary is", userSalary)
    break
    case 30000 : console.log("UserSalary is", userSalary)
    break
    case 40000 : console.log("UserSalary is", userSalary)
    break
    case 50000 : console.log("UserSalary is", userSalary)
    break
    default : console.log("UserSalary is Not Validated", userSalary)
}