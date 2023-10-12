// for, while, do-while loops 
// if we konw the iteration in advance we use for loop
// if we don't know the iteration in advance we use while ioop
// if we want the iteration only one time we use do while

for(var i = 0; i < 10; i++){
    console.log(i)
}

var i = 0
while(i < 10){
    console.log(i)
    i++
}

var i = 0
do{
    console.log(i)
    // i++ 
    i+=1
}while(i < 10)