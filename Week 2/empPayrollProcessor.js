//Employee details in an array of objects
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() employees from IT department
    console.log("Employees from IT department: ")
    let empOfIT=employees.filter((emp)=>emp.department==="IT")
    console.log(empOfIT)

// 2. map() to add:
//         netSalary = salary + 10% bonus
    console.log("\nEmployees with net salary: ")
    let empWithNetSalary=employees.map((emp)=>{
        let netSalary=emp.salary+(emp.salary*0.1)
        //returns a new object after adding netSalary property
        return {
            id:emp.id,
            name:emp.name,
            salary:emp.salary,
            department:emp.department,
            netSalary:netSalary
        }
    })
    console.log(empWithNetSalary)

// 3. reduce() to calculate total salary payout
    console.log("\nTotal Salary Payout: ")
    let totalSalaryPayout=empWithNetSalary.reduce((acc,emp)=>acc+emp.netSalary,0)
    console.log(totalSalaryPayout)

// 4. find() employee with salary 30000
    console.log("\nEmployee with salary 30000: ")
    let empWith30000=employees.find((emp)=>emp.salary===30000)
    console.log(empWith30000)

// 5. findIndex() of employee "Neha"
    console.log("\nIndex of employee Neha: ")
    let indexOfNeha=employees.findIndex((emp)=>emp.name==="Neha")
    console.log(indexOfNeha)
