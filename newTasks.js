//Task 14

// function removeDups(arr) {
//     if (arr == 0) {
//         console.log(" empty array!");
//     } else {
//         let newarr = [];
//         let currentNumber;
//         for (i = 0; i < arr.length; i++) {
//             currentNumber=arr[i] ;
//             if (!newarr.includes(currentNumber)) {
//                 newarr.push(currentNumber);
//             }
//         }
//         console.log(newarr);
//     }
// };
//     let arr = [1,2,3,3,4,5,6,7,7,8,9];
//     removeDups(arr);

//Task 15

// let userArray=[
//     { id: 101, name: "zen"},     
//     { id: 102, name: "rshd"},
//     { id: 103, name: "mzml"}     
// ];
// function assignID(arr){
//     let outsideID={};
//     for (let i = 0; i < arr.length; i++) {
//        let currentStd=arr[i];
//        outsideID[currentStd.id]=currentStd;
//     }
//     console.log(outsideID);
//     return outsideID;
// }

// assignID(userArray);

//Task 16

// let str="HELLOOO";
// function freakyquencyFinder(abc){
//     let repeatito={};
//     for (let i = 0; i < abc.length; i++) {
//         let char=abc[i];
//         if(repeatito[char]){
//             repeatito[char]=repeatito[char]+1;
//         }
//         else{
//             repeatito[char]=1;

//         }    
//     }
//     console.log(repeatito);
//     return repeatito;
// }
// freakyquencyFinder(str);

//Task 17
//completed in a separate file

//Task 18

// function titleCasePro(sentence) {
//     let finalSentence=sentence.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
//     // let finalSentence = sentence.split("").map(word=>word[0].toUpperCase().word.slice(1)).join("");
//     console.log(finalSentence);
//     return finalSentence;
// }
// titleCasePro("i love javascript");

//Task 19

let users = [
    { id: 103, name: "mzml" },
    { id: 101, name: "zen" },
    { id: 102, name: "rshd" },
    { id: 1, name: "hassaan" },
    { id: 37, name: "shahbaz" }
];
users.sort((r, g) => {
    return r.id - g.id;
});
console.log(users);