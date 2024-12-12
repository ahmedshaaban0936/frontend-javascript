// Importing required interfaces and classes
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create an Employee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type Predicate to check if employee is a Director
function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

// Function to execute work based on employee type
function executeWork(employee: Teacher | Director): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Example Usage
const teacher = createEmployee(200);
const director = createEmployee(1000);

executeWork(teacher); // Output: Getting to work
executeWork(director); // Output: Getting to director tasks

// Define a string literal type for Subjects
type Subjects = "Math" | "History";

// Function to teach a class based on the subject
function teachClass(todayClass: Subjects): string {
  switch (todayClass) {
    case "Math":
      return "Teaching Math";
    case "History":
      return "Teaching History";
  }
}

// Example usage
console.log(teachClass("Math")); // Output: Teaching Math
console.log(teachClass("History")); // Output: Teaching History

