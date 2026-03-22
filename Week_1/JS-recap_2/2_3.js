let numbers = [];

// Continuously prompt the user for numbers until they type 'done'
while (true) {
   let input = prompt("Enter a number (or 'done' to finish):");
   if (input.toLowerCase() === 'done') {
      break;
   }
   let number = parseFloat(input);
   if (!isNaN(number)) {
      numbers.push(number);
   }
   else {
      alert("Please enter a valid number.");
   }
}

// sort the even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
evenNumbers.sort((a, b) => a - b);

if (evenNumbers.length > 0) {
   console.log("Even Numbers: " + evenNumbers.join(", "));
   document.querySelector("#result").textContent = "Even Numbers: " + evenNumbers.join(", ");
}
else {
   console.log("Even Numbers: None");
   document.querySelector("#result").textContent = "Even Numbers: None";
}
