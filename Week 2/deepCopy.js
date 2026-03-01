//object literal for an order
const order={
  orderId:"ORD1001",
  customer:{
    name:"Anita",
    address:{
      city:"Hyderabad",
      pincode:500085
    }
  },
  items:[
    {product:"Laptop",price:70000}
  ]
};

// 1. Deep copy using structuredClone
let orderDeepCopy=structuredClone(order);

// 2. Modify the copy
orderDeepCopy.customer.address.city="Chennai"; // Only affects the copy
orderDeepCopy.items[0].price=80000;            // Only affects the copy

// 3. Print both objects to verify original is unchanged
console.log("Original Order:");
console.log(order);         // Original object

console.log("Modified Copy:");
console.log(orderDeepCopy); // Modified copy