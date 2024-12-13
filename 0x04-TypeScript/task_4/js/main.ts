import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";
import { Teacher } from "./subjects/Teacher";

// Creating instances of subjects
const cpp = new Cpp();
const java = new Java();
const react = new React();

// Defining a teacher with relevant experience
const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10, // Experience teaching C
  experienceTeachingJava: 5, // Example for Java experience (optional)
  experienceTeachingReact: 3, // Example for React experience (optional)
};

// Cpp subject
console.log("C++");
cpp.teacher = cTeacher; // Assigning teacher
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java subject
console.log("Java");
java.teacher = cTeacher; // Assigning teacher
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React subject
console.log("React");
react.teacher = cTeacher; // Assigning teacher
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

