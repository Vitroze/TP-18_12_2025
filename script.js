oCalculator = document.querySelector(".calculator-grid");
oDisplay = document.querySelector(".calculator-output");
oHistory = document.querySelector(".calculator-history");
oDisplay.textContent = "";
oHistory.textContent = "Historique :\n";
oButtons = oCalculator.querySelectorAll("button");

let bResult = false;
oButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnValue = e.target.className;

    console.log(`Button ${btnValue} clicked`);

    if (btnValue === "c") {
      oDisplay.textContent = "";
    } else if (btnValue === "equal") {
      try {
        const sValue = eval(oDisplay.textContent);
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

      oDisplay.textContent += btnValue;
    }

    console.log(`Display updated to: ${oDisplay.textContent}`);
  });
});
