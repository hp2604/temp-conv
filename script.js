const tempInput = document.getElementById("temp-input");
const unitSelect = document.getElementById("unit-select");
const convertButton = document.getElementById("convert-button");
const result = document.getElementById("result");

convertButton.addEventListener("click", function(event) {
  event.preventDefault();
  let temp = parseFloat(tempInput.value);
  let unit = unitSelect.value;
  if (unit === "celsius") {
    result.textContent =(temp * 9/5 + 32) + "°F";
    

  } else {
    result.textContent = (temp - 32) * 5/9 + "°C";
  }
});