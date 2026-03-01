// Function to sum any number of arguments
function sum(...numbers){
  let total=0;
  for(let num of numbers){
    total+=num;
  }
  return total;
}

// Test the function
console.log("Sum :",sum(10,20,30,40)); // 100