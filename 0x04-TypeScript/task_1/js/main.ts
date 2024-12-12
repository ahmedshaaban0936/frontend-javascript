// task_1/js/main.ts

interface Teacher {
    readonly firstName: string; // Read-only, modifiable only during initialization
    readonly lastName: string; // Read-only, modifiable only during initialization
    fullTimeEmployee: boolean; // Always defined
    yearsOfExperience?: number; // Optional
    location: string; // Always defined
    [key: string]: any; // Allows additional attributes with any name and type
  }
  
  // Example usage:
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // Additional property
  };
  
  console.log(teacher3);
  