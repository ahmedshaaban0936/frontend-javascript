// task_1/js/main.ts

// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // Read-only, modifiable only during initialization
  readonly lastName: string; // Read-only, modifiable only during initialization
  fullTimeEmployee: boolean; // Always defined
  yearsOfExperience?: number; // Optional
  location: string; // Always defined
  [key: string]: any; // Allows additional attributes with any name and type
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Additional required attribute
}

// Example usage of Teacher and Directors interfaces
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Additional property
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'New York',
  fullTimeEmployee: true,
  numberOfReports: 10,
};

console.log(director1);

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage of printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe
