//Student details in an array of objects
const students = [
    { id: 1, name: "Ravi", marks: 78 },
    { id: 2, name: "Anjali", marks: 92 },
    { id: 3, name: "Kiran", marks: 35 },
    { id: 4, name: "Sneha", marks: 88 },
    { id: 5, name: "Arjun", marks: 40 }
];

//1. filter() students who passed (marks ≥ 40)
console.log("Passed Students: ")
let passedStudents=students.filter((student)=>student.marks>=40)
console.log(passedStudents)
//2. map() to add a grade field
              //≥90 → A
              //≥75 → B
              //≥60 → C
              //else → D
let studentsWithGrades=students.map((student)=>{
    let grade
    if (student.marks >= 90){
        grade = "A"
    }
    else if(student.marks >= 75){
        grade = "B"
    }
    else if (student.marks >= 60){
        grade = "C"
    }
    else{
        grade = "D"
    }
    //returns a new object after adding a grade property
    return {
        id: student.id,
        name: student.name,
        marks: student.marks,
        grade: grade
    }
})
console.log("\nStudents with Grades: ")
console.log(studentsWithGrades)

//3. reduce() to calculate total marks
console.log("\nTotal Marks: ")
let totalMarks=students.reduce((acc,elem)=>acc+elem.marks,0)
console.log(totalMarks)

//4. find() the student who scored 92
console.log("\nStudent who scored 92: ")
let studOfMarks92=students.find((student)=>student.marks===92)
console.log(studOfMarks92)

//5. findIndex() of student "Kiran"
console.log("\nIndex of student Kiran: ")
let indexOfKiran=students.findIndex((student)=>student.name==="Kiran")
console.log(indexOfKiran)