function FunctionFreeTime() {
  document.getElementById("response").innerHTML = "Go and Study Coding! 👨🏼‍💻 :)";
}
function FunctionBusy() {
  document.getElementById("response").innerHTML = "Go Get the money! 💵";
}

document.getElementById("freetime").addEventListener("click", FunctionFreeTime);
document.getElementById("busy").addEventListener("click", FunctionBusy);
