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
const dialog = document.querySelector("dialog");
const form = dialog.querySelector("form");
const input = form.querySelector("input");

function renderList() {
  ul.innerHTML = "";

  todoList.forEach((item) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <label>
        <input type="checkbox" ${item.completed ? "checked" : ""}>
        ${item.task}
      </label>
      <button type="button">Delete</button>
    `;

    li.querySelector("input").addEventListener("change", (event) => {
      item.completed = event.target.checked;
      console.log(todoList);
    });


    li.querySelector("button").addEventListener("click", () => {
      const index = todoList.findIndex(t => t.id === item.id);
      todoList.splice(index, 1);
      renderList();
      console.log(todoList);
    });

    ul.appendChild(li);
  });
}
renderList();

document.querySelector(".add-btn").addEventListener("click", () => {
  dialog.showModal();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskName = input.value.trim();

  if (taskName) {
    const newTask = {
      id: Date.now(),
      task: taskName,
      completed: false,
    };

    todoList.push(newTask);
    renderList();
    console.log(todoList);

    input.value = "";
    dialog.close();
  }
});
