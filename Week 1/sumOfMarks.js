//  Find the sum of marks in [90,78,65,98]

//Declaring and initializing numbers to the variables
let arr=[70,78,65,98]

//Initializing sum to 0
let sum=0
for(let arrIndex=0;arrIndex<arr.length;arrIndex++){
    sum+=arr[arrIndex]; //Adding each element to the sum
}
console.log(`Sum of the marks is ${sum}`); //Displaying the sum