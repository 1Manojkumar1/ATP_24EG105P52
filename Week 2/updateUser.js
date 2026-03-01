// Original object
let user={name:"Ravi",city:"Hyderabad"};

// Copy user to create a new object
let updateUser={...user};

// Add age property
updateUser={...user,age:25};

// Print both objects
console.log("Original User:");
console.log(user);      // {name:"Ravi",city:"Hyderabad"}

console.log("\nModified Copy:");
console.log(updateUser); // {name:"Ravi",city:"Hyderabad",age:25}