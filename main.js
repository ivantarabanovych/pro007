let fruits = ["яблуко", "банан", "апельсин", "груша", "ківі"];
fruits.sort();
console.log(fruits)

let filterFruits = fruits.filter(fruit => fruit.length > 5)
console.log(filterFruits)

let newArray = fruits.map(fruit => fruit.toUpperCase());
console.log(newArray)

let combineArray = fruits.reduce((accumulator, currentValue) => accumulator  + "-" + currentValue);
console.log(combineArray)