Task 1

var a=1;
var b=2;
BY XOR OPERATION
a = a^b;
b = a^b;
a = a^b;
BY ADDITION SUBTRACTION
a = a+b;
b = a-b;
a = a-b;
console.log(a);
console.log(b);

TASK 2   
function revString(str){
    let rev="";
for(i=str.length-1;i>=0;i--){
    rev = rev + str[i];
}
console.log(rev);
}
revString("HELLO");

TASK 3
function checkPallin(str){
let rev="";
for(i=str.length-1;i>=0;i--){
rev+=str[i];
}
if (rev===str) {
    console.log("PALLINDROME");
} else {
    console.log("NOT A PALLINDROME");
}
}
checkPallin("uno");

TASK 4
function fizzbuzz(){
    for (let i = 1; i <= 100; i++) {
     if (i%3==0) {
        console.log( i,"FIZZ");}
    if (i%5==0) {
        console.log(i,"BUZZ");}
    if (i%3==0 && i%5==0) {
        console.log(i,"FIZZBUZZ");}
     if(i%3!==0 && i%5!==0){
        console.log(i);
    }
}}
fizzbuzz();

TASK 5
function arraySum(arr){
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];   
    }
    console.log(sum);
}
let arr=[1,2,3,4,5,6,7,8,9];
arraySum(arr);

TASK 6
function retrunEven(arr){
    let evenarr=[];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2==0){
            evenarr += arr[i];
        } 
    }
    console.log(evenarr);
}
let arr=[1,2,3,4,5,6,7,8,9,10];
retrunEven(arr);

TASK 7
function madMax(arr){
    let max=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]>max)
            max=arr[i];
    }
    console.log(max);
}
let arr=[1,2,34,5,6,7,8,9,0];
madMax(arr);

TASK 8
function celToFar(c){
  let temp= (c * 9/5) + 32;
  console.log(temp);
}
celToFar(38);

TASK 9
function greetTime(n){
    if(n >= 6 && n < 12){
        console.log("GOOD MORNING");
    } else if(n >= 12 && n < 16){
        console.log("GOOD AFTERNOON");
    } else if(n >= 16 && n < 20){
        console.log("GOOD EVENING");
    } else if(n >= 20 && n < 24){
        console.log("GOOD NIGHT");
    } else if(n >= 0 && n < 6){
        console.log("AFTER MIDNIGHT");
    } else {
        console.log("INVALID HOUR");
    }
}

greetTime(32);

TASK 10

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // base case
  }
  return n * factorial(n - 1); // recursive call
}

console.log(factorial(3));

