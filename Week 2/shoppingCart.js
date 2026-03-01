//Product details in an array of objects
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//1. Use filter() to get only inStock products
let inStocks=cart.filter((element)=>element.inStock===true)
console.log("Items inStock: \n",inStocks)

//2. Use map() to create a new array with:  { name, totalPrice }
let newArray=cart.map((element)=>({name:element.name, totalPrice:element.price*element.quantity}))
console.log("New Array after adding totalPrice: ",newArray)

//3. Use reduce() to calculate grand total cart value
let totalPrice=cart.reduce((acc,elem)=>acc+elem.price,0)
console.log("Total Price: ",totalPrice)

//4. Use find() to get details of "Mouse"
let mouseDetails=cart.find((element)=>element.name==="Mouse")
console.log("mouse details: ",mouseDetails)

//5. Use findIndex() to find the position of "Keyboard"
let posOfKeyboard=cart.findIndex((element)=>element.name==="Keyboard")
console.log("Position of Keyboard:",posOfKeyboard)
