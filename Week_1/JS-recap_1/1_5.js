let input = parseInt(prompt("Enter a positive integer:"));
let sum = 0;

if (input > 0) {
   for (let i = 1; i <= input; i++) {
      sum += i;
   }
   alert(`The sum of integers from 1 to ${input} is: ${sum}`);
   document.getElementById("result").textContent = `The sum of integers from 1 to ${input} is: ${sum}`;
}
else {
   alert("Please enter a positive integer!");
   document.getElementById("result").textContent = "Please enter a positive integer!";
}
