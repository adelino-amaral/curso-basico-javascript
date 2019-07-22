function Celsius_Fahrenheit_Converter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
}

function Celsius_Kelvin_Converter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputKelvin").innerHTML=valNum+273.15;
}