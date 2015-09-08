/* 
Create a function that:
*   Takes an array of students
    *   Each student has:
        *   `firstName`, `lastName`, `age` and `marks` properties
        *   `marks` is an array of decimal numbers representing the marks         
*   **finds** the student with highest average mark (there will be only one)
*   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function average(arr) {
    return _.reduce(arr, function (memo, num) {
            return memo + num;
        }, 0) / arr.length;
}

function solve() {
    return function (students) {
        var bestStudent = _.chain(students)
            .max(function (student) {
                return average(student.marks);
            }).value();
        var averageMark = average(bestStudent.marks);
        console.log(bestStudent.firstName + ' ' + bestStudent.lastName + ' has an average score of ' + averageMark);
    };
}

module.exports = solve;
