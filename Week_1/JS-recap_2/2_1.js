const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
let vegetables = [];

// creating vegetables array by asking user input
for (let i = 0; i < 3; i++) {
   let vegetable = prompt("Enter a vegetable:");
   vegetables.push(vegetable);
}

// printing fruits and vegetables arrays

// fruits
console.log("Fruits:" + fruits);
document.getElementById("fruits_array").textContent = "Fruits: " + fruits;

console.log("Fruits length: " + fruits.length);
document.getElementById("fruits_length").textContent = "Fruits length: " + fruits.length;

console.log("Fruits element at index 2: " + fruits[2]);
document.getElementById("fruits_element_2").textContent = "Fruits element at index 2: " + fruits[2];

console.log("Last fruit: " + fruits[fruits.length - 1]);
document.getElementById("fruits_last_element").textContent = "Last fruit: " + fruits[fruits.length - 1];


// vegetables
console.log("Vegetables:" + vegetables);
document.getElementById("vegetables_array").textContent = "Vegetables: " + vegetables;

console.log("Vegetables length: " + vegetables.length);
document.getElementById("vegetables_length").textContent = "Vegetables length: " + vegetables.length;
