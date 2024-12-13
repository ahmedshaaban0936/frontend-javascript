export class Cpp {
    getRequirements() {
        return "Here is the list of requirements for Cpp";
    }
    getAvailableTeacher() {
        var _a;
        if (!((_a = this.teacher) === null || _a === void 0 ? void 0 : _a.experienceTeachingC)) {
            return "No available teacher";
        }
        return `Available Teacher: ${this.teacher.firstName}`;
    }
}
