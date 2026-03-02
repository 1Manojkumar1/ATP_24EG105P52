//  Write a function that receives an array & search element as args and returns the index of that search element in the array. It should return "not found" when search element not found.

//Declaring and initializing numbers to the variables
let arr=[10,30,60,55,69,90]

//Function to find the index of the element in the array
function getIndex(arr,element){
    for(let arrIndex=0;arrIndex<arr.length;arrIndex++){
        //Checking whether the element is present in the array
        if(arr[arrIndex]==element){ 
            return `Index of ${element} is ${arrIndex}`;  //Returning the index if the element is present
        }
    }
    return "not found"; //Returning "not found" if the element is not present
}

console.log(getIndex(arr,55));//Calling the function and displaying the index