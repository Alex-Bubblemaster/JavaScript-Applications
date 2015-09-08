/*
Create a function that:
*   Takes an array of students
    *   Each student has a `firstName` and `lastName` properties
*   **Finds** all students whose `firstName` is before their `lastName` alphabetically
*   Then **sorts** them in descending order by fullname
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   Then **prints** the fullname of founded students to the console
*   **Use underscore.js for all operations**
*/

function solve() {
    return function (students) {
        var selectedStudents = _.filter(students, function (student) {
            return student.firstName < student.lastName;
        });
        var sortedStudents = _.sortBy(selectedStudents, 'firstName').reverse();
        _.each(sortedStudents, function (student) {
            console.log(student.firstName + ' ' + student.lastName);
        });
    }
}

module.exports = solve;