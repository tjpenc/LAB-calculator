  console.log("Yeah mom I vape")

  /*SOFT CODING
  give click listeners to all buttons - need to do the forEach method on the nodeList from querySelectorAll
  keep track if equals has been pressed or not with booleans to help with errors and when to clear

    */

  //Initialize all HTML variables used - buttons and output field
  const buttons = document.querySelectorAll("button");
  const output = document.querySelector("#output");
  const body = document.querySelector("body");

  let isEqualsPressed = false;
  let stringToEval = "";


console.log(buttons);

// Create function to push button text into output area when clicked
// buttonText is the button.innerText in the even listener function below this one
const pushToOutput = function(buttonText) {
  if (output.innerText === "0" || isEqualsPressed === true) {
    output.innerText = "";
    output.innerText += buttonText;
    isEqualsPressed = false;
  } else {
    output.innerText += buttonText;
  }
  stringToEval += buttonText;
}

  // Add event listener to all buttons
  buttons.forEach(button => 
    button.addEventListener("click", function() {
      if (button.classList.contains("number")) {
        pushToOutput(button.innerText);
        } else if (button.classList.contains("division")) {
          handleDivision(button.innerText);
        } else if (button.classList.contains("multiplication")) {
          handleMuliplication(button.innerText);
        } else if (button.classList.contains("min")) {
          handleSubtraction(button.innerText);
        } else if (button.classList.contains("sum")) {
          handleAddition(button.innerText);
        } else if (button.classList.contains("backspace")) {
          handleBackspace(button.innerText);
        } else if (button.classList.contains("clear")) {
          handleClear(button.innerText);
        } else {
          handleEquals(button.innerText);
        }
      }
    )
  );
  // Handle when equals is pressed
  // When equals is pressed, evaluate the string and display it, set equal is pressed to true, reset evaluation string
  const handleEquals = function(buttonText) {
    if (output.innerText === "0" || isEqualsPressed === true || stringToEval.length < 3) {
      return;
    } else {
    output.innerText = eval(stringToEval);
    isEqualsPressed = true;
    stringToEval = "";
    }
  }
  // Handle when clear is pressed
  // When clear is pressed, reset display to 0 and reset evalution string
  const handleClear = function(buttonText) {
    output.innerText = "0";
    stringToEval = "";
  }
  // Handle when Backspace is pressed
  // When backspace is pressed, slice off the last integer from the string and display
  const handleBackspace = function(buttonText) {
    if (isEqualsPressed === true) {
      output.innerText = "0";
    } else {
   output.innerText = output.innerText.slice(0, -1);
   stringToEval = stringToEval.slice(0,-1);
   fixOutput();
    }
  }
  const fixOutput = function() {
    if (stringToEval.length === 0) {
      output.innerText = "0";
    }
  }

  // Handle Division Symbols 
  // For all operators: if output field has 0 (so no output yet) or equals has just been pressed (first input) or the last character of the string is one of the four operators, the function will return and it will not allow the operator to be added to the evaluation string
  const handleDivision = function(buttonText) {
    if (output.innerText === "0" || isEqualsPressed === true || stringToEval[stringToEval.length-1] === "/" || stringToEval[stringToEval.length-1] === "*" || stringToEval[stringToEval.length-1] === "+" || stringToEval[stringToEval.length-1] === "-" ) {
        return;
    } else {
      output.innerText += buttonText;
      stringToEval += "/";
    }
  };
  // Handle Multiplication
  const handleMuliplication = function(buttonText) {
    if (output.innerText === "0" || isEqualsPressed === true || stringToEval[stringToEval.length-1] === "/" || stringToEval[stringToEval.length-1] === "*" || stringToEval[stringToEval.length-1] === "+" || stringToEval[stringToEval.length-1] === "-" ) {
        return;
    } else {
      output.innerText += buttonText;
      stringToEval += "*";
    }
  };
  // Handle Adding/Subtracting
  const handleAddition = function(buttonText) {
    if (output.innerText === "0" || isEqualsPressed === true || stringToEval[stringToEval.length-1] === "/" || stringToEval[stringToEval.length-1] === "*" || stringToEval[stringToEval.length-1] === "+" || stringToEval[stringToEval.length-1] === "-" ) {
        return;
    } else {
      output.innerText += buttonText;
      stringToEval += buttonText;
    }
  };
  // Handle Subtraction
  const handleSubtraction = function(buttonText) {
    if (output.innerText === "0" || isEqualsPressed === true || stringToEval[stringToEval.length-1] === "/" || stringToEval[stringToEval.length-1] === "*" || stringToEval[stringToEval.length-1] === "+" || stringToEval[stringToEval.length-1] === "-" ) {
        return;
    } else {
      output.innerText += buttonText;
      stringToEval += "-";
    }
  };
