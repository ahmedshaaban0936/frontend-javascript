import { Subject } from "./Subject";
export class Java extends Subject {
    getRequirements() {
        return "Here is the list of requirements for Java";
    }
    getAvailableTeacher() {
        if (!this.teacher) {
            return "No available teacher";
        }
        return `Available Teacher: ${this.teacher.firstName}`;
    }
}
