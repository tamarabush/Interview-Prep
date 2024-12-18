//Practice 1 - Create HelloWorld Function:

function createHelloWorld(){
    return function() {
        return "Hello World"; 
    }
};


//Practice 2 - Create Counter:

function createCounter (n) {
    let count = n
    return function() {
        return count++;
    };
};


//Practice 3 - Reverse String:

//Dataset:
const str = "Hello World"

//Solution:
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString(str)); //output = dlroW olleH