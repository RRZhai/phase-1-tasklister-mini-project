document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    handleTodo(document.querySelector("#new-task-description").value)
    form.reset()
  })
});

function handleTodo(todo){
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.textContent = " x ";
  li.textContent = `${todo}`;
  const input = document.querySelector("div#list");
  input.appendChild(li);
  li.appendChild(btn);

  btn.addEventListener('click', (e) => {
    alert("Are you sure you want to remove this task?")
    li.remove();
    let sadCatImg = document.createElement("img")
    sadCatImg.src = "https://people.com/thmb/WXzptbnV1KluL6sXuQ-JgAVPI-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(899x0:901x2)/21042210_264995290674140_8840525631411191808_n-530848c0d1134a31bc03861ea9ddd700.jpg"
    document.querySelector("body").appendChild(sadCatImg);
    setTimeout(() => {sadCatImg.remove()}, "3000")
  })
}
