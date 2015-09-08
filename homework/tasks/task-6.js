/* 
Create a function that:
*   **Takes** a collection of books
    *   Each book has propeties `title` and `author`
        **  `author` is an object that has properties `firstName` and `lastName`
*   **finds** the most popular author (the author with biggest number of books)
*   **prints** the author to the console
	*	if there is more than one popular author(i.e two authors have 3 books each) print them all sorted in ascending order by fullname
		*   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve() {
    return function (books) {
        var authors = _.chain(books)
            .pluck('author')
            .map(function (author) {
                return author.firstName + ' ' + author.lastName;
            }).groupBy(function (name) {
                return name;
            }).value();

        var maxNumberOfBooks = _.max(authors, function (author) {
            return author.length;
        }).length;

        var popularAuthors = [];
        _.mapObject(authors, function (val) {
            if (val.length === maxNumberOfBooks) {
                popularAuthors.push(val[0]);
            }
        });

        _.chain(popularAuthors)
            .sort()
            .each(function (author) {
                 console.log(author);
            });
    }
}

module.exports = solve;
