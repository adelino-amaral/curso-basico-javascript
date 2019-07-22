// select two input tags
var txtaltura = document.getElementById('altura');
var txtpeso = document.getElementById('peso');
var btcalcular = document.getElementById('calcular');
var output = document.getElementById('output');


function CalculaIMC(_altura, _peso) 
{
    var altura, peso, imc;
    // Convert strings to float
    altura = parseFloat(_altura);
    peso = parseFloat(_peso);

    imc = peso / (altura * altura);

    return imc;
  }


  function ranking(value)
  {
    if(value < 16) return "Magreza grave";
    else if(value >= 16 && value < 17) return "Magreza moderada";
         else if(value >= 17 && value < 18.5) return "Magreza leve";
              else if(value >= 18.5 && value < 25) return "Saudável";
                   else if(value >= 25 && value < 30) return "Sobrepeso";
                        else if(value >= 30 && value < 35) return "Obesidade Grau I";
                             else if(value >= 35 && value < 40) return "Obesidade Grau II (severa)";
                                  else return "Obesidade Grau III (mórbida)";
  }

/*
    https://www.w3schools.com/js/js_htmldom_eventlistener.asp
    
    Events List
    https://www.w3schools.com/jsref/dom_obj_event.asp
    
    The addEventListener() method attaches an event handler to the specified element.
*/

// When passing parameter values, use an "anonymous function" 
// that calls the specified function with the parameters:
btcalcular.addEventListener("click", function(){
    output.innerHTML = "O seu IMC é: " + CalculaIMC(txtaltura.value, txtpeso.value);
    output.innerHTML += " - " + ranking(CalculaIMC(txtaltura.value, txtpeso.value));
});
