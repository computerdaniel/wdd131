//let courses = ["WDD131", "ITM220", "WDD231", "CSE212"]


//let coursesAndGPA = ["WDD131", 3.7, "ITM220", 4];

let coursesAndGPA = [
  {
    courseName: "WDD130",
    courseGPA: 3.7,
    professor: "Brother Warner",
    assignment: [
        {
            assignmentName: "W01 Prove",
            assignmentGrade: 4
        }
    ]
  },
  {
    courseName: "WDD231",
    courseGPA: 4,
    professor: "Brother Warner"
  }
]
//console.log(coursesAndGPA);

console.log(coursesAndGPA[0].assignment[0].assignmentGrade)


for(let i = 0; i < coursesAndGPA.length; i++){
    console.log(coursesAndGPA[i].courseName)
    console.log(coursesAndGPA[i].courseGPA)
}

coursesAndGPA.forEach(item =>{
    console.log(item.courseName)
    console.log(item.courseGPA)
})

let body = document.querySelector('body');


coursesAndGPA.forEach(course => {
    let dynamicHTML = `
        <div>
             <h1>${course.courseName}</h1>
             <h2>${course.courseGPA}</h2>
        </div>
    `   
    body.innerHTML += dynamicHTML
})
