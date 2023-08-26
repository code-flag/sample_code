/**
 * Group the students below to their respective school, 
 * department and level,
 * Then display their data on web page based on the school department and level
 */

let students = [
    {
        school: "UNN",
        department: "chemical",
        level: "100Level",
        firstName: "Joy",
        lastName: "Mark",
        age: 24,
        gender: "female"
    },

    {
        school: "OAU",
        department: "chemical",
        level: "200Level",
        firstName: "Francis",
        lastName: "Mark",
        age: 20,
        gender: "Male"
    },

    {
        school: "UNN",
        department: "chemical",
        level: "100Level",
        firstName: "Uju",
        lastName: "Ndukwu",
        age: 30,
        gender: "female"
    },
    {
        school: "UNILAG",
        department: "Electrical",
        level: "100Level",
        firstName: "James",
        lastName: "Joe",
        age: 29,
        gender: "male"
    },

    {
        school: "OAU",
        department: "chemical",
        level: "100Level",
        firstName: "Joy",
        lastName: "Lara",
        age: 24,
        gender: "female"
    },
    {
        school: "UNN",
        department: "electrical",
        level: "200Level",
        firstName: "Kunle",
        lastName: "Ajasin",
        age: 28,
        gender: "male"
    },

    {
        school: "UNN",
        department: "electrical",
        level: "200Level",
        firstName: "Joy",
        lastName: "Mark",
        age: 24,
        gender: "female"
    },
    {
        school: "UNILAG",
        department: "chemical",
        level: "100Level",
        firstName: "Bukky",
        lastName: "John",
        age: 24,
        gender: "female"
    },
    {
        school: "OAU",
        department: "chemical",
        level: "100Level",
        firstName: "Ade",
        lastName: "Yemi",
        age: 24,
        gender: "female"
    },
    {
        school: "UNN",
        department: "electrical",
        level: "200Level",
        firstName: "Wale",
        lastName: "Adesina",
        age: 24,
        gender: "male"
    },
]

// tip: 
let myObj = {};
let dKey = "school";

myObj = {[dKey]: "UNN"}

newStudents = {
    UNN: {
        electrical: {
            "100Level": [],
            "200Level": []
        },
        chemical: {

        }
    },
    OAU: {
        electrical: {
            "100Level": [],
            "200Level": []
        },
        chemical: {

        }
    },
    UNILAG: {
        electrical: {
            "100Level": [],
            "200Level": []
        },
        chemical: {

        }
    },
}

let newStudentObj = {
    "UNN": [],
    "OAU": [],
    "UNILAG": []
};
students.forEach((student) => {
    if (student.school == "UNN" ) {
        newStudentObj["UNN"].push(student);
    }
    else if (student.school == "OAU" ) {
        newStudentObj["OAU"].push(student);
    }
    else {
        newStudentObj["UNILAG"].push(student);
    }
})

console.log(" new student", newStudentObj);