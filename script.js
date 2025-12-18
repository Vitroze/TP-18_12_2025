oCalculator = document.querySelector(".calculator-grid");
oDisplay = document.querySelector(".calculator-output");
oHistory = document.querySelector(".calculator-history");
oDisplay.textContent = "";
oHistory.textContent = "Historique :\n";
oButtons = oCalculator.querySelectorAll("button");

function safeEval(expression) {
  if (/^[0-9+\-*/().\s]+$/.test(expression)) {
    return eval(expression);
  }
  throw new Error("Invalid characters in expression");
}

function action(sID) {
  if (sID === "c") {
    oDisplay.textContent = "";
  } else if (sID === "ce") {
    oDisplay.textContent = oDisplay.textContent.slice(0, -1);
  } else if (sID === "equal") {
    try {
      const sValue = safeEval(oDisplay.textContent);
      oHistory.textContent += oDisplay.textContent + " = " + sValue + "; ";
      oDisplay.textContent = sValue;
    } catch {
      oDisplay.textContent = "Error";
    }

    bResult = true;
  } else {
    if (bResult) {
      oDisplay.textContent = "";
      bResult = false;
    }

    oDisplay.textContent += sID;
  }
}

let bResult = false;
oButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnValue = e.target.className;

    action(btnValue);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if ((key >= "0" && key <= "9") || "+-*/.".includes(key)) {
    e.preventDefault();
    action(key);
  } else if (key === "Enter") {
    action("equal");
  } else if (key === "Backspace") {
    action("ce");
  } else if (key === "c") {
    action("c");
  } else if (key === "F9") {
    oHistory.textContent = "Historique :\n";
    alert("Historique effacé.");
  }
});
