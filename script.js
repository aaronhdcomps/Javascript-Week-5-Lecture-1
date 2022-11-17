let myArray = [5 , 3, 6, 4, 7];
/*console.log(myArray[0])
console.log(myArray[4])
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}*/
myArray.push(11, 14,72);
/*for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
myArray.pop();
myArray.pop();
myArray.pop();
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

let myString = "This is my string.";
console.log(myString.length);
*/
let myString = "#";
for (let i = 1; i <= 3; i++) {
    console.log(myString);
    myString += "#";    
}
for (let i = 4; i > 0; i--) {
    console.log(myString);
    myString = myString.slice(0, -1);    
}
