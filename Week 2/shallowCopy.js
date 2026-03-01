//Object literal for a user
const user={
  id:101,
  name:"Ravi",
  preferences:{
    theme:"dark",
    language:"en"
  }
};

// 1. Shallow copy of user
const userCopy={...user};

// 2. Modify the copy
userCopy.name="Kiran";             // Works: primitive property
userCopy.preferences.theme="light"; // Affects original too: shallow copy only copies top level

// 3. Print both objects
console.log("Original User:");
console.log(user);      // Original object

console.log("Modified Copy:");
console.log(userCopy);  // Copied object