//  Find the big number in given three numbers

//Declaring and initializing numbers to the variables
let firstNum=10,secondNum=20,thirdNum=30;

if(firstNum>secondNum && firstNum>thirdNum){
    console.log(`${firstNum} is greater`); // Executes if firstNum is greater
}
else if(secondNum>firstNum && secondNum>thirdNum){
    console.log(`${secondNum} is greater`) // Executes if secondNum is greater
}
else{
    console.log(`${thirdNum} is greater`) // Executes if thirdNum is greater[if both the above conditions are false]
}
