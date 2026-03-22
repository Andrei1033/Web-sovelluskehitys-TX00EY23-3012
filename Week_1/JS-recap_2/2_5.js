// Task 4: Sorting an Array of Numbers in Ascending Order
function sortArray() {
   if (soringOrder === "1") {
      numbers.sort((a, b) => a - b);
   }
   else if (soringOrder === "2") {
      numbers.sort((a, b) => b - a);
   }
   else {
      alert("Invalid sorting order. Please enter 1 for ascending or 2 for descending.");
      soringOrder = prompt("Enter sorting order (1 for ascending, 2 for descending):").toLowerCase();
      sortArray(); // Recursively call the function until a valid input is provided
   }
   return numbers;
}

let numbers = [1,2,2,1,4,2,7,1,9,4,6,3,6,8,9,5,9,5,1,0,10, 40, 20, 30, 10, 100, 1032, 752,1,56,20, 15, 25, 5, 35, 45, 55, 65, 75, 85, 95];
let soringOrder = prompt("Enter sorting order (1 for ascending, 2 for descending):").toLowerCase();
sortArray();

const textResult = soringOrder === "1" ? "ascending" : "descending";
console.log("Sorted Numbers in " + textResult + " order: " + numbers);
document.querySelector("#result").textContent = "Sorted Numbers in " + textResult + " order: " + numbers;
