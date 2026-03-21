// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector("ul");

todoList.forEach((item) => {
   const li = document.createElement("li");
   li.innerHTML = `

   ${item.task} <input type="checkbox" ${item.completed ? "checked" : ""}>
   <button type="button" class="delete-btn">Delete</button>

   `;

   ul.appendChild(li);

   li.querySelector("input").addEventListener("change", (event) => {
      item.completed = event.target.checked;
      console.log(todoList);
   });

   li.querySelector("button").addEventListener("click", () => {
      todoList.splice(todoList.indexOf(item), 1);
      ul.removeChild(li);
      console.log(todoList);
   });
});
