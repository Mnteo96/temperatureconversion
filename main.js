let userInput;
let submitBtn = document.getElementById("submitBtn");
let celsius = document.getElementById("celsius");
let fahren = document.getElementById("fahren");
let resultText = document.getElementById("resultText");
let result;

submitBtn.onclick = function () {
  userInput = document.getElementById("userAnswer").value;
  userInput = Number(userInput);
  if (userInput == "") {
    resultText.textContent = `Please enter a number!`;
  } else if (fahren.checked) {
    //Celsius = (Fahrenheit - 32) / 1.8
    result = ((userInput - 32) / 1.8).toFixed(1);
    resultText.textContent = `${result} °C`;
  } else if (celsius.checked) {
    //Fahrenheit = (Celsius * 1.8) + 32
    result = (userInput * 1.8 + 32).toFixed(1);
    resultText.textContent = `${result} °F`;
  } else {
    resultText.textContent = `Please check one of the buttons.`;
  }
};