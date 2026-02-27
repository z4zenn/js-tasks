// Task 22
let timeLeft=10;
console.log(" time is ticking...");
const timerId=setInterval(()=>{
    console.log(timeLeft);
    timeLeft--;
    if(timeLeft<0)
    clearInterval(timerId);
    console.log("Time's Up my nigga");
},1000);



// let timeLeft = 10;
// console.log("time is ticking...");

// const timerId = setInterval(() => {
//   console.log(timeLeft);
//   timeLeft--;

//   if (timeLeft < 0) {
//     clearInterval(timerId);
//     console.log("Time's up!");
//   }
// }, 1000);