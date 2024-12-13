import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
// Create and export a constant cpp for Cpp subject
export const cpp = new Cpp();
// Create and export a constant java for Java subject
export const java = new Java();
// Create and export a constant react for React subject
export const react = new React();
// Create and export one Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
};
// For Cpp subject
console.log("C++");
cpp.setTeacher = cTeacher; // Set cTeacher as the teacher for Cpp
console.log(cpp.getRequirements()); // Get requirements for Cpp
console.log(cpp.getAvailableTeacher()); // Get available teacher for Cpp
// For Java subject
console.log("Java");
java.setTeacher = cTeacher; // Set cTeacher as the teacher for Java
console.log(java.getRequirements()); // Get requirements for Java
console.log(java.getAvailableTeacher()); // Get available teacher for Java
// For React subject
console.log("React");
react.setTeacher = cTeacher; // Set cTeacher as the teacher for React
console.log(react.getRequirements()); // Get requirements for React
console.log(react.getAvailableTeacher()); // Get available teacher for React
