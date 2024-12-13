export interface Teacher {
  firstName: string;
  lastName: string;
  experienceTeachingC?: number; // Experience teaching C
  experienceTeachingJava?: number; // Experience teaching Java
  experienceTeachingReact?: number; // Experience teaching React
  experienceTeachingPython?: number; // Example addition: Python experience
  [key: string]: any; // Allows for future scalability or custom properties
}
