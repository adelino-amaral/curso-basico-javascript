var operandoa, operandob, operador;


function init(){
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var soma = document.getElementById("soma");
    var diferenca = document.getElementById("diferenca");
    var multiplicacao = document.getElementById("multiplicacao");
    var divisao = document.getElementById("divisao");
    var igual = document.getElementById("igual");
    var um = document.getElementById("um");
    var dois = document.getElementById("dois");
    var tres = document.getElementById("tres");
    var quatro = document.getElementById("quatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var sete = document.getElementById("sete");
    var oito = document.getElementById("oito");
    var nove = document.getElementById("nove");
    var zero = document.getElementById("zero");
    
    // Events
    um.addEventListener("click", function(e){
        resultado.textContent = resultado.textContent + "1";
    });
    dois.addEventListener("click", function(e){
        resultado.textContent = resultado.textContent + "2";
    });
    tres.addEventListener("click", function(e){
        resultado.textContent = resultado.textContent + "3";
    });
    quatro.addEventListener("click", function(e){
        resultado.textContent = resultado.textContent + "4";
    });
    cinco.addEventListener("click", function(e){
        resultado.textContent = resultado.textContent + "5";
    });
    seis.addEventListener("click", function(e){
        resultado.textContent = resultado.textContent + "6";
    });
    sete.addEventListener("click", function(e){
        resultado.textContent = resultado.textContent + "7";
    });
    oito.addEventListener("click", function(e){
        resultado.textContent = resultado.textContent + "8";
    });
    nove.addEventListener("click", function(e){
        resultado.textContent = resultado.textContent + "9";
    });
    zero.addEventListener("click", function(e){
        resultado.textContent = resultado.textContent + "0";
    });

   reset.addEventListener("click", function(e){
        fazreset();
    });
    adicao.addEventListener("click", function(e){
        operandoa = resultado.textContent;
        operador = "+";
        limpa();
    });
    diferenca.addEventListener("click", function(e){
        operandoa = resultado.textContent;
        operador = "-";
        limpa();
    });
    multiplicacao.addEventListener("click", function(e){
        operandoa = resultado.textContent;
        operador = "*";
        limpa();
    });
    divisao.addEventListener("click", function(e){
        operandoa = resultado.textContent;
        operador = "/";
        limpa();
    });
    igual.addEventListener("click", function(e){
        operandob = resultado.textContent;
        resolver();
    });
}


window.addEventListener("load", init);


function limpa(){
    resultado.textContent="";
}

function fazreset(){
    resultado.textContent="";
    operandoa=0;
    operandob=0;
    operador="";
}

function resolver(){
    var res = 0;
    switch(operador){
        case '+':
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case '-':
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case '/':
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        case '*':
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
    }
    fazreset();
    resultado.textContent= res;
}