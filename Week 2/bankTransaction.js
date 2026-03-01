//Transaction details in an array of objects
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. filter() all credit transactions
    console.log("Credit Transactions: ")
    let creditTransactions=transactions.filter((transaction)=>transaction.type==="credit")
    console.log(creditTransactions)

// 2. map() to extract only transaction amounts
    console.log("\nTransaction Amounts: ")
    let transactionAmounts=transactions.map((transaction)=>transaction.amount)
    console.log(transactionAmounts)

// 3. reduce() to calculate final account balance
    console.log("\nFinal Account Balance: ")
    let finalBalance=transactions.reduce((acc,transaction)=>acc+transaction.amount,0)
    console.log(finalBalance)

// 4. find() the first debit transaction
    console.log("\nFirst Debit Transaction: ")
    let firstDebit=transactions.find((transaction)=>transaction.type==="debit")
    console.log(firstDebit)

// 5. findIndex() of transaction with amount 10000
    console.log("\nIndex of transaction with amount 10000: ")
    let indexOf10000=transactions.findIndex((transaction)=>transaction.amount===10000)
    console.log(indexOf10000)

