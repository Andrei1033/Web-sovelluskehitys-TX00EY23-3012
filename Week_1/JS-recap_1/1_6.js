const input = parseInt(prompt("Enter a positive integer:"));

if (input > 0) {
   let html = "<table>";

   for (let i = 1; i <= input; i++) {
      html += "<tr>";
      for (let j = 1; j <= input; j++) {
         let product = i * j;
         html += `<td>${product}</td>`;
      }
      html += "</tr>";
   }

   html += "</table>";
   document.getElementById("result").innerHTML = html;
}
else {
   alert("Please enter a positive integer!");
   document.getElementById("result").textContent = "Please enter a positive integer!";
}
