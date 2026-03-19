let side1 = prompt("Enter the length of the first side of the triangle:");
let side2 = prompt("Enter the length of the second side of the triangle:");
let side3 = prompt("Enter the length of the third side of the triangle:");

side1 = parseFloat(side1);
side2 = parseFloat(side2);
side3 = parseFloat(side3);

console.log(`Sides entered: ${side1}, ${side2}, ${side3}`);

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
   if (side1 == side2 && side2 == side3) {
      alert('The triangle is equilateral "равносторонний".');
      document.getElementById("result").textContent = 'The triangle is equilateral "равносторонний".';
   }
   else if (side1 == side2 || side2 == side3 || side1 == side3) {
         alert('The triangle is isosceles "равнобедренный".');
         document.getElementById("result").textContent = 'The triangle is isosceles "равнобедренный".';
   }
   else {
      alert('The triangle is scalene "разносторонний".');
      document.getElementById("result").textContent = 'The triangle is scalene "разносторонний".';
   }

   // extra. draw the triangle using HTML canvas
   const canvas = document.getElementById("triangleCanvas");
   const ctx = canvas.getContext("2d");
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   const scale = 20;
   const x1 = 50, y1 = 300;
   const x2 = x1 + (side1 * scale);
   const y2 = y1;

   const cosAngle = (side1 * side1 + side2 * side2 - side3 * side3) / (2 * side1 * side2);
   const angle = Math.acos(cosAngle);

   const x3 = x1 + (side2 * Math.cos(angle) * scale);
   const y3 = y1 - (side2 * Math.sin(angle) * scale);

   ctx.beginPath();
   ctx.moveTo(x1, y1);
   ctx.lineTo(x2, y2);
   ctx.lineTo(x3, y3);
   ctx.closePath();
   ctx.strokeStyle = "black";
   ctx.lineWidth = 2;
   ctx.stroke();
}
else {
   alert("Triangle with these sides is impossible!");
   document.getElementById("result").textContent = "Triangle with these sides is impossible!";
}

