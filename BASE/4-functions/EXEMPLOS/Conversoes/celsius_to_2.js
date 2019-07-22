var cf = document.getElementById('celF');
var ck = document.getElementById('celK');

/*
    https://www.w3schools.com/js/js_htmldom_eventlistener.asp
    
    Events List
    https://www.w3schools.com/jsref/dom_obj_event.asp
    
    The addEventListener() method attaches an event handler to the specified element.
*/


// When passing parameter values, use an "anonymous function" 
// that calls the specified function with the parameters:
cf.addEventListener("change", function(){
    Celsius_Fahrenheit_Converter(cf.value);
});
cf.addEventListener("input", function(){
    Celsius_Fahrenheit_Converter(cf.value);
});

ck.addEventListener("change", function(){
    Celsius_Kelvin_Converter(ck.value);
});
ck.addEventListener("input", function(){
    Celsius_Kelvin_Converter(ck.value);
});

    
function Celsius_Fahrenheit_Converter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
}

function Celsius_Kelvin_Converter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputKelvin").innerHTML=valNum+273.15;
}