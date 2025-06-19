// Step 1: Create person1 object
let person1 = { name: "Alice", age: 25 };

// Step 2: Deep copy and add favoriteColor
let personCopy = JSON.parse(JSON.stringify(person1));
personCopy.favoriteColor = "Blue";

// Step 3: Console both objects
console.log("Original:", person1);
console.log("Copy:", personCopy);

/*
Step 6: What are the primitive types in JS?
- String: let name = "John";
- Number: let age = 30;
- Boolean: let isHappy = true;
- Null: let empty = null;
- Undefined: let notDefined;
- Symbol: let id = Symbol("id");
- BigInt: let bigNumber = 9007199254740991n;
*/

/*
Step 7: When should you use an object?
- When you need to group data using named properties (key-value pairs).
  Example: user profile, car details, configuration settings.

Step 8: When should you use an array?
- When you need to store an ordered list of values.
  Example: list of tasks, names, numbers, etc.
*/

// Step 9: Function that logs name and favorite hobby
function introduce(name, favoriteHobby) {
  console.log(`My name is ${name} and my favorite hobby is ${favoriteHobby}`);
}

// Example call
introduce("Micheal", "Coding");
