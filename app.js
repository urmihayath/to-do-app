const btn = document.querySelector("button");
const input = document.querySelector("input");
const taskArea = document.querySelector(".tasks");
const cross = document.querySelector(".right");

const allTasks = [];

const addTasks = () => {
  const task = allTasks.push(input.value);
  showTasks();
  return allTasks;
};

const showTasks = () => {
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");
  div1.classList.add("task");
  div2.classList.add("left");
  div3.classList.add("tick");
  div3.classList.add("circle");
  div4.classList.add("right");
  div4.classList.add("circle");

  const data = taskArea.appendChild(div1);
  div1.appendChild(div2);
  div2.appendChild(div3);
  div1.appendChild(div4);

  div2.innerHTML = input.value;
  div4.innerHTML = `<img src="./images/close.png" />`;
  return data;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  addTasks();
  input.value = "";
});

cross.addEventListener("click", () => {});
