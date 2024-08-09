/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputField = document.getElementById("value-input");
const convertBtn = document.getElementById("convert-btn");
const lengthOutput = document.getElementById("length-op");
const volumeOutput = document.getElementById("volume-op");
const massOutput = document.getElementById("mass-op");

function convertUnits() {
  let rawValue = Number(inputField.value);
  lengthOutput.innerHTML = `${rawValue} meters = ${(rawValue*3.281).toFixed(3)} feet | ${rawValue} feet = ${(rawValue/3.281).toFixed(3)} meters`;
    volumeOutput.innerHTML = `${rawValue} liters = ${(rawValue*0.264).toFixed(3)} gallons | ${rawValue} gallons = ${(rawValue/0.264).toFixed(3)} liters`;
    massOutput.innerHTML = `${rawValue} kilos = ${(rawValue*2.204).toFixed(3)} pounds | ${rawValue} pounds = ${(rawValue/2.204).toFixed(3)} kilos`;
}

convertBtn.addEventListener("click", convertUnits);