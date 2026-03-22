// Task 4: Sorting an Array of Numbers in Ascending Order
function sortArray() {
   numbers.sort((a, b) => a - b);
   return numbers;
}

let numbers = [1,2,2,1,4,2,7,1,9,4,6,3,6,8,9,5,9,5,1,0,10, 40, 20, 30, 10, 100, 1032, 752,1,56,20, 15, 25, 5, 35, 45, 55, 65, 75, 85, 95];
sortArray();

console.log("Sorted Numbers: " + numbers);
document.querySelector("#result").textContent = "Sorted Numbers: " + numbers;
