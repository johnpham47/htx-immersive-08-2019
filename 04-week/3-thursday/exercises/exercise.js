// Exercise 1
function positive(array) {
    return array.filter (num => num > 0);
}
console.log(positive([2, -4, 4, -1, 6]))

// Exercise 2
function even(array) {
    return array.filter (num => num % 2 == 0);
}
console.log(even([2, 13, 20, 15, 68]))

// Exercise 3
var arr = [1, 2, 3 , 4, 5];
var newArr = arr.map(function(element) {
    return element * element;
});
console.log(newArr);

// Exercise 4
var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];

function cool (array) {
    return array.filter(x => x.temperature < 70);
}
console.log(cool(cities));

// Exercise 5
function cityNames (array) {
    return array.map(x => x.name);
}
console.log(cityNames(cities));

// Exercise 6
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

function peopleNames (array) {
    return array.forEach(x => console.log(`Good job, ${x}!`))
}
peopleNames(people);

// Exercise 7
function sortNames(array) {
    return array.sort();
}
console.log(sortNames(people));

// Exercise 8
function nameLength(array) {
    return array.sort(((a, b) => a.length - b.length));
}
console.log(nameLength(people));

// Exercise 9
