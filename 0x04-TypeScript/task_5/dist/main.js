// task_5/js/main.ts
// Function to sum Major Credits
export function sumMajorCredits(subject1, subject2) {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: "MajorCredits" }; // Returning MajorCredits type
}
// Function to sum Minor Credits
export function sumMinorCredits(subject1, subject2) {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: "MinorCredits" }; // Returning MinorCredits type
}
// Test Code
const major1 = { credits: 3, brand: "MajorCredits" };
const major2 = { credits: 4, brand: "MajorCredits" };
const minor1 = { credits: 2, brand: "MinorCredits" };
const minor2 = { credits: 3, brand: "MinorCredits" };
const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);
console.log("Total Major Credits:", totalMajor.credits); // Should print 7
console.log("Total Minor Credits:", totalMinor.credits); // Should print 5
