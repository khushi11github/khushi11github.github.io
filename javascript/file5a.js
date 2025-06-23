function greet(student) {
    console.log(`Hello ${student}`);
}
greet("John"); // This will log "Hello John"

function add(a,b){
    return a + b; // This function returns the sum of a and b
}
console.log(add(4,5)); // This will log 9

function add2(){
    console.log(arguments); // This will log the arguments passed to the function
    console.log(arguments.length); // This will log the arguments passed to the function
}
add2(4,5,6,7,3,4); // This will log the arguments passed to the function

console.log(typeof greet); // This will log "function" because greet is a function
console.log(greet.length); // This will log the number of parameters the function expects, which is 1 in this case
console.log(add2.length); // This will log the number of parameters the function expects, which is 0 in this case