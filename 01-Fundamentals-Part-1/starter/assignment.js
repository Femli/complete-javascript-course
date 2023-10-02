// Lecture: Values and Variables

let country = "US";
let continent = "North America";
let population = 332e06;

console.log(country);
console.log(continent);
console.log(population);

// Lecture: Data Types
let isIsland = false;
let language;

console.log(typeof isIsland, typeof population, typeof country, typeof language);


// Lecture: let, const, and var
language = 'Spanish';
const ethnicity = "Latino";
//ethnicity = "Hispanic";

// Lecture: Basic operators
population /= 2;
console.log(population)

population++;
console.log(population);

console.log(population > 6e06);
console.log(population < 33e06);

let description = country + "is in " + continent + " , and its" + population + " people speak" + language;
console.log(description);
