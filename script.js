function onLoad() {
    alert("Page is loaded");
}

function onSubmit() {
    alert("The form was submitted");
}

function onFocus(x) {
    x.style.background = "yellow";
}

function onBlur() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

function PAlert() {
    alert("Hello\nHow are you?");
}

function PComfirm() {
    confirm("Press a button!");
}

function PPromt() {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }