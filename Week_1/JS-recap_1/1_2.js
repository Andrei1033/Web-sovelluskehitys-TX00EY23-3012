let p1x = prompt("Enter the x-coordinate of the first point:");
let p1y = prompt("Enter the y-coordinate of the first point:");

let p2x = prompt("Enter the x-coordinate of the second point:");
let p2y = prompt("Enter the y-coordinate of the second point:");

const point1 = { x: p1x, y: p1y };
const point2 = { x: p2x, y: p2y };

const distance = Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));

alert(`The distance between the points (${point1.x}, ${point1.y}) and (${point2.x}, ${point2.y}) is ${distance.toFixed(2)}.`);
document.getElementById("result").textContent = `The distance between the points (${point1.x}, ${point1.y}) and (${point2.x}, ${point2.y}) is ${distance.toFixed(2)}.`;
