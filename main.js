let colors = ["червоний", "синій", "зелений", "жовтий", "чорний"];
let indexOfGreen = colors.indexOf("зелений");
console.log(`${indexOfGreen}`);

let indexToRemove = colors.indexOf("чорний");
if(indexToRemove !== -1){
    colors.splice(indexToRemove, 1);
}

console.log(colors);