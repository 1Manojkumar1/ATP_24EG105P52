// 1. Exam portal simulator

// Immediately show submission confirmation
console.log("Exam submitted successfully");

// After 2 seconds → show evaluation message
setTimeout(()=>{
  console.log("Evaluating answers...");
},2000);

// After 4 seconds → show result
setTimeout(()=>{
  console.log("Result: Pass");
},4000);