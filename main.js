//variables
const output = document.getElementById("output");

// Event Listeners for operators
document.getElementById("clear").addEventListener("click", function () {
  output.innerText = "0";
});
document.getElementById("equals").addEventListener("click", function () {
  output.innerText = eval(output.innerText);
});
document.getElementById("decimal").addEventListener("click", function () {
  output.innerText += ".";
});
document.getElementById("add").addEventListener("click", function () {
  output.innerText += "+";
});
document.getElementById("subtract").addEventListener("click", function () {
  output.innerText += "-";
});
document.getElementById("divide").addEventListener("click", function () {
  output.innerText += "/";
});
document.getElementById("multiply").addEventListener("click", function () {
  output.innerText += "*";
});
document.getElementById("percent").addEventListener("click", function () {
  output.innerText += "%";
});

// Event Listeners for numbers
document.getElementById("one").addEventListener("click", function () {
  output.innerText === "0"
    ? (output.innerText = "1")
    : (output.innerText += "1");
});
document.getElementById("two").addEventListener("click", function () {
  output.innerText === "0"
    ? (output.innerText = "2")
    : (output.innerText += "2");
});
document.getElementById("three").addEventListener("click", function () {
  output.innerText === "0"
    ? (output.innerText = "3")
    : (output.innerText += "3");
});
document.getElementById("four").addEventListener("click", function () {
  output.innerText === "0"
    ? (output.innerText = "4")
    : (output.innerText += "4");
});
document.getElementById("five").addEventListener("click", function () {
  output.innerText === "0"
    ? (output.innerText = "5")
    : (output.innerText += "5");
});
document.getElementById("six").addEventListener("click", function () {
  output.innerText === "0"
    ? (output.innerText = "6")
    : (output.innerText += "6");
});
document.getElementById("seven").addEventListener("click", function () {
  output.innerText === "0"
    ? (output.innerText = "7")
    : (output.innerText += "7");
});
document.getElementById("eight").addEventListener("click", function () {
  output.innerText === "0"
    ? (output.innerText = "8")
    : (output.innerText += "8");
});
document.getElementById("nine").addEventListener("click", function () {
  output.innerText === "0"
    ? (output.innerText = "9")
    : (output.innerText += "9");
});
document.getElementById("zero").addEventListener("click", function () {
  output.innerText === "0"
    ? (output.innerText = "0")
    : (output.innerText += "0");
});
