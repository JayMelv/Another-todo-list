const submit = document.querySelector("#submit-button");
const listInput = document.querySelector("#user-input");
const ul = document.querySelector("ul");
const listItems = document.getElementsByTagName("li");

//add listitem by clicking button
submit.addEventListener("click", function () {
  //Input needs to have a value - therefore as long as some input then append
  if (listInput.value.length > 0) {
    //create a li element
    let li = document.createElement("li");
    //add text to li element
    li.appendChild(document.createTextNode(listInput.value));
    //add it to bottom of list
    ul.appendChild(li);
    //After adding reset the input
    listInput.value = "";
    //adds a delete button
    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    ul.appendChild(btn);
  }
});

//add listitem by pressing enter - event is the key pressed event
listInput.addEventListener("keypress", function (event) {
  //When there is input and enter is pressed
  if (listInput.value.length > 0 && event.keyCode === 13) {
    //create a li element
    let li = document.createElement("li");
    //add text to li element
    li.appendChild(document.createTextNode(listInput.value));
    //add it to bottom of list - ul is the parent and adding list
    ul.appendChild(li);
    //After adding reset the input
    listInput.value = "";
    //adds a delete button
    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    ul.appendChild(btn);
  }
});

//uses onclick method to toggle strikethrough
ul.onclick = function (event) {
  var target = event.target;
  target.classList.toggle("done");
};
