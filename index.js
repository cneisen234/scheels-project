const list = document.getElementById("scheelsList");
const mainElement = document.getElementById("mainElement");
const endingElement = document.getElementById("endingValue");

const runProgram = () => {
let div3 = "SCHEELS";
let div5 = ".COM";
let start = 1;
let end = 100;
const divideBy3 = document.getElementById("divideBy3").value;
const divideBy5 = document.getElementById("divideBy5").value;
const startingValue = document.getElementById("startingValue").value;
const endingValue = document.getElementById("endingValue").value;
const runButton = document.getElementById("runButton");
runButton.remove();
if(divideBy3 && divideBy3.length > 0) {
div3 = divideBy3
}
if (divideBy5 && divideBy5.length > 0) {
  div5 = divideBy5;
}
if (startingValue) {
  start = Number(startingValue);
}
if (endingValue) {
  end = Number(endingValue);
}
  endingElement.insertAdjacentHTML(
    "afterend",
    `<button id="clearButton" onclick="clearList()">Reset</button>`
  );
if(end <= start) {
    alert("starting value can not be greater then or equal to ending value");
    return;
}
  let div15 = div3 + div5;
  for (let index = start; index <= end; index++) {
    if (index % 15 === 0) {
      list.insertAdjacentHTML("beforeend", `<li>${div15}</li>`);
    } else if (index % 3 === 0) {
      list.insertAdjacentHTML("beforeend", `<li>${div3}</li>`);
    } else if (index % 5 === 0) {
      list.insertAdjacentHTML("beforeend", `<li>${div5}</li>`);
    } else {
      list.insertAdjacentHTML("beforeend", `<li>${index}</li>`);
    }
  }
};

const clearList = () => {
    list.innerHTML = '';
    document.getElementById("divideBy3").value = null;
    document.getElementById("divideBy5").value = null;
    document.getElementById("startingValue").value = null;
    document.getElementById("endingValue").value = null;
    const clearButton = document.getElementById("clearButton");
    clearButton.remove();
      endingElement.insertAdjacentHTML(
        "afterend",
        `<button id="runButton" onclick="runProgram()">Run</button>`
      );
};
