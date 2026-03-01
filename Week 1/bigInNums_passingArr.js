//  Write a function that receives an array as arg and return their sum

//Declaring and initializing numbers to the variables
let arr=[20,30,40,50]

//Function to find the sum of the elemets in the array
function sumOfArr(arr)
{
    let sum=0 //Initializing sum to 0
    for(let arrIndex=0;arrIndex<arr.length;arrIndex++){
        sum+=arr[arrIndex]; //Adding each element to the sum
    }
    return sum; //Returning the sum
}
console.log(sumOfArr(arr)); //Calling the function and displaying the sum