// Simulate OTP sending
console.log("OTP sent Successfully");

// Set the countdown time
let seconds=10;

// Start countdown
let intervalId=setInterval(()=>{
  seconds--; // Decrement the seconds
  console.log(`You can resend the OTP in ${seconds}`);
  if(seconds===0){
    console.log("Resend OTP"); // Resend the OTP
    clearInterval(intervalId); // Stop the interval
  }
},1000);