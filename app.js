let buttons = document.getElementsByClassName("button");

let term1 = "";
let term2 = "";
let answer = "";
let operator = "";
let first_num = true;
let second_num = false;

// Add event listener to all buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (first_num) {
      if (
        buttons[i].value == "+" ||
        buttons[i].value == "-" ||
        buttons[i].value == "*" ||
        buttons[i].value == "/"
      ) {
        operator = buttons[i].value;
        second_num = true;
        first_num = false;
      } else {
        term1 += buttons[i].value;
        alert(term1);
      }
    } else if (second_num) {
      if (buttons[i].value == "=") {
        answer = operate(operator, term1, term2);
        alert(answer);
        second_num = false;
      } else {
        term2 += buttons[i].value;
        alert(term2);
      }
    }
  });
}

function add(term1, term2) {
  return term1 + term2;
}

function subtract(term1, term2) {
  return term1 - term2;
}

function multiply(term1, term2) {
  return term1 * term2;
}

function divide(term1, term2) {
  return term1 / term2;
}

function operate(operator, term1, term2) {
  if (operator == "+") {
    add(term1, term2);
  } else if (operator == "-") {
    subtract(term1, term2);
  } else if (operator == "*") {
    multiply(term1, term2);
  } else if (operator == "/") {
    divide(term1 / term2);
  } else {
    return null;
  }
}
