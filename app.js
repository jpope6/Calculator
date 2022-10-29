let buttons = document.getElementsByClassName("button");
let clear = document.getElementById("clear");
let del = document.getElementById("delete");
let display = document.getElementById("large_display");
let small_display = document.getElementById("small_display");

let term1 = "";
let term2 = "";
let answer = "";
let operator = "";
let first_num = true;
let second_num = false;

clear.onclick = () => clearValues();
del.onclick = () => deleteValue();

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
        display.innerHTML = "";
        small_display.innerHTML = term1 + operator;
        second_num = true;
        first_num = false;
      } else {
        if (term1.length <= 8) {
          term1 += buttons[i].value;
          display.innerHTML = term1;
        }
      }
    } else if (second_num) {
      if (buttons[i].value == "=") {
        answer = operate(operator, term1, term2);

        if (answer.toString().length > 8) {
          answer = Number.parseFloat(answer).toExponential(2);
        }

        small_display.innerHTML += term2 + "=";
        display.innerHTML = answer;
        second_num = false;
      } else {
        if (term2.length <= 8) {
          term2 += buttons[i].value;
          display.innerHTML = term2;
        }
      }
    }
  });
}

// Delete or Clear buttons
function deleteValue() {
  display.innerHTML = "";

  if (first_num) {
    term1 = "";
  }

  if (second_num) {
    term2 = "";
  }
}

function clearValues() {
  display.innerHTML = "";
  small_display.innerHTML = "";
  term1 = "";
  term2 = "";
  answer = "";
  operator = "";
  first_num = true;
  second_num = false;
}

function add(term1, term2) {
  return parseInt(term1) + parseInt(term2);
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
    return add(term1, term2);
  } else if (operator == "-") {
    return subtract(term1, term2);
  } else if (operator == "*") {
    return multiply(term1, term2);
  } else if (operator == "/") {
    return divide(term1, term2);
  } else {
    return null;
  }
}
