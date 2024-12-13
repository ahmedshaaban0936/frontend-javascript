namespace Subjects {
    export class Subject {
      teacher!: Teacher; // Non-null assertion operator
  
      set setTeacher(teacher: Teacher) {
        this.teacher = teacher;
      }
    }
  }
  