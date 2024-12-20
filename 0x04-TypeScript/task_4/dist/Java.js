"use strict";
/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />
var Subjects;
(function (Subjects) {
    class Java {
        getRequirements() {
            return "Here is the list of requirements for Java";
        }
        getAvailableTeacher() {
            if (!this.teacher.experienceTeachingJava) {
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
