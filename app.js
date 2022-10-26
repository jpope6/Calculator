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
