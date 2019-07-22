// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


var init = function(){
    modal.style.display = "block";
    iniciarhora();
}

var iniciarhora = function(){
    
    var dataAtual = new Date();

    var horas = dataAtual.getHours();       // 0..23
    var minutos = dataAtual.getMinutes();   // 0 .. 59
    var segundos = dataAtual.getSeconds();  // 0 .. 59

    var mes = dataAtual.getMonth();         // 0 .. 11
    var dia = dataAtual.getDay();           // 0 .. 6
    var diaMes = dataAtual.getDate();       // 1 .. 31
    var anos = dataAtual.getFullYear();     // 2018

    var amOpm;

    var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                    "Julho", "Agosto", "Setembro", "Outubro", "Novembro",
                    "Dezembro"];

    var esteMes = meses[mes];

    var diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
                        "Quinta-feira", "Sexta-feira", "Sábado"];

    var diaHoje = diaSemana[dia];

    
    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos: minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;

    document.getElementById("data").innerHTML = diaMes + " de " + esteMes + " de " + anos;
    document.getElementById("info").innerHTML = horas + ":" + minutos + ":" + segundos;

    /*
        Se tivessemos uma input então escrever nesta deveria ser:
        document.getElementById("info").value = horas + ":" + minutos + ":" + segundos;
    */
    
    setTimeout(iniciarhora , 1000);
    //setInterval(iniciarhora , 1000);
}



