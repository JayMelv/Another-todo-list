const submit = document.querySelector("#submit-button");
const listInput = document.querySelector("#user-input");
const ul = document.querySelector("ul");
const listItems = document.getElementsByTagName("li");

function appendListItem(value) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  ul.appendChild(li);
  listInput.value = "";

  let btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Delete!"));

  btn.onclick = function (event) {
    ul.removeChild(li);

    event.preventDefault();
    event.stopPropagation();
  };
  li.appendChild(btn);
}

submit.addEventListener("click", function () {
  if (listInput.value.length > 0) {
    appendListItem(listInput.value);
  }
});

listInput.addEventListener("keypress", function (event) {
  if (listInput.value.length > 0 && event.keyCode === 13) {
    appendListItem(listInput.value);
  }
});

ul.onclick = function (event) {
  var target = event.target;
  target.classList.toggle("done");
};
