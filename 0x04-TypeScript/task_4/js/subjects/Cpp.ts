import { Teacher } from "./Teacher"; // Ensure Teacher.ts has a properly defined and exported interface

export class Cpp {
  teacher: Teacher | undefined; // Ensure teacher is of the correct type

  set setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }

  getRequirements(): string {
    return "Here is the list of requirements for Cpp";
  }

  getAvailableTeacher(): string {
    if (!this.teacher?.experienceTeachingC) {
      return "No available teacher";
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
