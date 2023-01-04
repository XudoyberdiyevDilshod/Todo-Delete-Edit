const elForm = document.querySelector("#todoForm");
const elInput = document.querySelector(".form-control");
const elList = document.querySelector(".list");

let arr = [];

elList.addEventListener("click", function (event) {
  if (event.target.matches(".edit-btn")) {
    let elNewName = prompt("Enter your new todo");

    let btnId = Number(event.target.dataset.todoId);

    const result = arr.find((item) => item.id === btnId);
    result.name = elNewName;
    createTodo(arr, elList);
  } else if (event.target.matches(".del-btn")) {
    let btnId = Number(event.target.dataset.todoId);

    const result = arr.findIndex((item) => item.id === btnId);
    arr.splice(result, 1);
    createTodo(arr, elList);
    result.name = elNewName;
    createTodo(arr, elList);
  }
});

function createTodo(arrey, element) {
  element.innerHTML = "";
  for (let i of arrey) {
    let elItem = document.createElement("li");
    let elBtn = document.createElement("button");
    let elStrong = document.createElement("strong");
    let btnDel = document.createElement("button");
    elBtn.classList.add("edit-btn");

    elStrong.textContent = i.name;
    elBtn.textContent = "Edit";

    elItem.append(elStrong, elBtn, btnDel);
    elBtn.dataset.todoId = i.id;
    elItem.classList.add("item");
    element.appendChild(elItem);

    btnDel.textContent = "Delete";
    btnDel.classList.add("del-btn");
    btnDel.dataset.todoId = i.id;
  }
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let elInputVal = elInput.value;
  let newTodo = {
    id: arr.length + 1,
    name: elInputVal,
    isComplated: false,
  };
  arr.push(newTodo);
  createTodo(arr, elList);
  elInput.value = "";
  console.log(arr);
});
