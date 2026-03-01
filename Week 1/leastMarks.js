//  Find the smallest element in marks array

//Declaring and initializing numbers to the variables
let arr=[70,78,65,98]
//initializing min to the first element
let min=arr[0];

for(let arrIndex=0;arrIndex<arr.length;arrIndex++){
    //Checking whether the element is smaller than min
    if(arr[arrIndex]<min){
        min=arr[arrIndex]; //updating the min if the element is smaller
    }
}
console.log('smallest element in the array is',min) //Displaying the smallest element