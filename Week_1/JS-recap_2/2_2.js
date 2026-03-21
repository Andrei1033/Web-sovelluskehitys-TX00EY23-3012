let numbers = [];

// creating numbers array by asking user input
for (let i = 0; i < 5; i++) {
   let number = parseFloat(prompt("Enter a number:"));

   if (!Number.isNaN(number)) {
      numbers.push(number);
   }
   else {
      alert("Invalid input. Please enter a valid number.");
      i--; // Decrement i to repeat the iteration for valid input
   }
}

// printing numbers array
console.log("Numbers: " + numbers);
document.getElementById("numbers").textContent = "Numbers: " + numbers;

const findNumber = parseFloat(prompt("Enter a number to find:"));
if (!Number.isNaN(findNumber)) {
   if (numbers.includes(findNumber)) {
      console.log(`Number ${findNumber} is found in the array.`);
      document.getElementById("number_in_numbers").textContent = `Number ${findNumber} is found in the array.`;
   }
   else {
      console.log(`Number ${findNumber} is not found in the array.`);
      document.getElementById("number_in_numbers").textContent = `Number ${findNumber} is not found in the array.`;
   }
}
else {
   alert("Invalid input. Please enter a valid number.");
}

// remooving the last number from the array
numbers.pop();

console.log("Updated Numbers: " + numbers);
document.getElementById("updated_numbers").textContent = "Updated Numbers: " + numbers;

// sorting the numbers array in ascending order
numbers.sort((a, b) => a - b);

console.log("Sorted Numbers: " + numbers);
document.getElementById("sorted_numbers").textContent = "Sorted Numbers: " + numbers;
