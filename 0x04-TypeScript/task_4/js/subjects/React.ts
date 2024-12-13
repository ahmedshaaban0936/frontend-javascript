import { Subject } from "./Subject"; // Ensures we import the parent class
import { Teacher } from "./Teacher"; // Proper import for the Teacher interface

export class React extends Subject {
  [x: string]: Teacher;
  getRequirements(): string {
    return "Here is the list of requirements for React";
  }

  getAvailableTeacher(): string {
    if (!this.teacher?.experienceTeachingReact) {
      return "No available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}

