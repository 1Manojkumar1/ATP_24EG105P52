//  Write a function that receives 3 number args and return the big number

// A function to find the big number in given three numbers received as arguments
function getTheLargest(firstNum,secondNum,thirdNum){
    if(firstNum>secondNum && firstNum>thirdNum){
        return firstNum // returns firstNum if it is greater
    }
    else if(secondNum>firstNum && secondNum>thirdNum){
        return secondNum // returns secondNum if it is greater
    }
    else{
        return thirdNum // returns thirdNum if it is greater [if both the above conditions are false]
    }
}
//calling the function with 3 arguments and displaying the result
console.log(getTheLargest(10,70,30));