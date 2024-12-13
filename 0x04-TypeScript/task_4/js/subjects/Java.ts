import { Subject } from "./Subject";
import { Teacher } from "./Teacher"; // Ensure Teacher interface is defined and exported properly

export class Java extends Subject {
  [x: string]: any;
  getRequirements(): string {
    return "Here is the list of requirements for Java";
  }

  getAvailableTeacher(): string {
    if (!this.teacher?.experienceTeachingJava) {
      return "No available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}

