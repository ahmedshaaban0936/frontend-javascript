import { Teacher } from "./Teacher";

namespace Subjects {
  // Subject class representing a base for specific subjects
  export class Subject {
    teacher?: Teacher; // Make teacher optional, assuming it can be undefined

    // Setter to assign teacher to the subject
    set setTeacher(teacher: Teacher) {
      this.teacher = teacher; // Assign the passed teacher to the subject's teacher property
    }
  }
}
