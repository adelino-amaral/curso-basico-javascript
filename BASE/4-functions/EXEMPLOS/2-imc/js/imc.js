// select two input tags
var txtaltura = document.getElementById('altura');
var txtpeso = document.getElementById('peso');

var btcalcular = document.getElementById('calcular');
var btLimpar = document.getElementById('limpar');
var output = document.getElementById('output');

output.style.visibility = "hidden";

function CalculaIMC(_altura, _peso) 
{
    var altura, peso, imc;
    
    if(isNaN(_altura) || isNaN(_peso))
    {
       return -1;   // sinaliza erro
    }
    
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


function reset()
{
    txtaltura.value="";
    // https://www.w3schools.com/jsref/met_html_focus.asp
    txtaltura.focus();
    txtpeso.value = "";
    output.value="";
    output.style.visibility = "hidden";
    
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
    // https://www.w3schools.com/jsref/prop_style_visibility.asp
    output.style.visibility = "visible";

    if(CalculaIMC(txtaltura.value, txtpeso.value) >= 0)
    {
        output.innerHTML = "O seu IMC é: " + CalculaIMC(txtaltura.value, txtpeso.value);
        output.innerHTML += " - " + ranking(CalculaIMC(txtaltura.value, txtpeso.value));   
    }
    else {
        output.innerHTML = "Os dados introduzidos são inválidos.";
    }
});

txtpeso.addEventListener("keypress", function(event){
   
    // https://www.w3schools.com/jsref/dom_obj_event.asp
    var tecla = event.which || event.keyCode;
    if(tecla == 13)
    {
        output.style.visibility = "visible";

        if(CalculaIMC(txtaltura.value, txtpeso.value) >= 0)
        {
            output.innerHTML = "O seu IMC é: " + CalculaIMC(txtaltura.value, txtpeso.value);
            output.innerHTML += " - " + ranking(CalculaIMC(txtaltura.value, txtpeso.value)); 
        }
        else {
            output.innerHTML = "Os dados introduzidos são inválidos.";
        }
    }
    
});


btLimpar.addEventListener("click", function(){
    reset();

});