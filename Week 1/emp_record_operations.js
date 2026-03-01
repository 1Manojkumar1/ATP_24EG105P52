//Array of employees with their employee number, name and marks[as an array]

const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

//print the employee records before editing
console.log("Before Editing")
console.log(employees)
// Insert new employee at 2nd position
employees.splice(1,0,{eno:200,name:"Manoj",marks:[89,67,45]}) //splice(index,no of elements to remove,new elements to add)
console.log("\n1)Inserted a new employee at 2nd position\n",employees)//print the employee records after adding the new employee

// Remove employee named "Kiran"
for(let empIndex=0;empIndex<employees.length;empIndex++) {
  if(employees[empIndex].name==="Kiran"){
    employees.splice(empIndex,1);   //splice(index,no of elements to remove)
    break;
  }
}
console.log("\n2)Removed an employee named Kiran\n",employees);//print the employee records after removing the employee

// Change Sneha's last mark from 95 to 75
for(let empIndex=0;empIndex<employees.length;empIndex++){
  if(employees[empIndex].name==="Sneha"){
    employees[empIndex].marks[employees[empIndex].marks.length-1]=75; //change the last mark to 75 of employee "Sneha"
    break;
  }
}
console.log("\n3)Changed the last mark of employee Sneha\n",employees);//print the employee records after changing the last mark of employee "Sneha"
