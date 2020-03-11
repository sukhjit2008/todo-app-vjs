const form = document.querySelector(".form");
const list = document.querySelector(".list");
const input = document.querySelector(".input");
const todos = [];
// CREATE TODO AND RENDER IT TO DOM
const addtodos = todo => {
  const newID = Math.floor(Math.random() * 100);
  const newTodo = {
    todo,
    checked: false,
    id: newID
  };

  todos.push(newTodo);

  //INSERT THE HTML
  list.insertAdjacentHTML(
    "beforeend",
    `<li class="item " data-key="${newTodo.id}">
    <svg class="checked-icon hide ">
      <use href='img/sprite.svg#icon-check'></use>
    </svg>
    
    <a href="#" class="times">${newTodo.todo}</a>
    <span class="icon">&times;</span>
    </li>`
  );
};
//TO MARK THE TODO AS DONE
const doneTodo = key => {
  //console.log(key);
  const selectedItem = document.querySelector(`[data-key="${key}"]`);
  selectedItem.firstElementChild.classList.toggle("hide");
};
//DELETE TODO
const deleteTodo = key => {
  const selectedItem = document.querySelector(`[data-key="${key}"]`);
  selectedItem.remove();
};

//ADD EVENT LISTENER TO THE LIST TO SELECT THE LIST
list.addEventListener("click", e => {
  const item = document.querySelector(".item");

  const itemTarget = e.target.closest(".item");
  const key = +itemTarget.dataset.key;

  doneTodo(key);
  if (e.target.classList.contains("icon")) {
    deleteTodo(key);
  }
});

//ADD EVENTLISTENER TO FORM
form.addEventListener("submit", e => {
  e.preventDefault();
  const todo = input.value.trim();
  //CHECK IF TODO EXIST
  if (todo.length) {
    addtodos(todo);
    input.value = "";
    //input.focus();
  }
});
