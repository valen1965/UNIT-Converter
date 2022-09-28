/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pount
*/

const lengthEl = document.getElementById('card_length_conversion');
const volumeEl = document.getElementById('card_volume_conversion');
const mathEl = document.getElementById('card_math_conversion');
const inputEl = document.getElementById('input-hero');
let inputNum = inputEl.value;
const btnEl = document.getElementById('input-btn');


// clear input on focus.

inputEl.addEventListener("focus", function(){
    inputEl.value = '';
});

// Execute a function when the user presses a key on the keyboard
inputEl.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("input-btn").click();
    event.target.blur();
    //inputEl.value = '';
  }
});


btnEl.addEventListener('click', function () {
  inputNum = Number(inputEl.value);
  convertValue();
  //inputEl.value = '';
});


function convertValue() {
  const lengthResult = `
  ${inputNum} meters = ${(inputNum * 3.281).toFixed(2)} feet |
  ${inputNum} feet = ${(inputNum / 3.281).toFixed(2)} meters
 `
  lengthEl.textContent = lengthResult;

  const volumeResult = `
  ${inputNum} liters = ${(inputNum * 0.264).toFixed(2)} gallons |
  ${inputNum} gallons = ${(inputNum / 0.264).toFixed(2)} liters
 `
  volumeEl.textContent = volumeResult;

  const mathResult = `
  ${inputNum} kilos = ${(inputNum * 2.204).toFixed(2)} pounds |
  ${inputNum} pounds = ${(inputNum / 2.204).toFixed(2)} kilos
 `
  mathEl.textContent = mathResult;

}

