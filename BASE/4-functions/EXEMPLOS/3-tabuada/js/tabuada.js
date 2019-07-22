// select elements HTML
var txtnum = document.getElementById('num');
var btmostrar = document.getElementById('mostrar');


// a função tabuada recebe o parâmtero num
tabuada = function(num)
{
    // cria uma tabela com a tabuada
    var mostraTabela='<table>';
    for(var i=1; i <= 10; i++){
        mostraTabela += '<tr><td><button>' + i + '</button> * <button>' + num + '</button> = <button>' + (num*i) + '</button></td></tr>';
    }
    mostraTabela +='</table>';
    return mostraTabela;
}

mostraResultado = function(){
    if(isNaN(txtnum.value))
    {
        document.getElementById("tabuada").innerHTML = "Deve inserir um número inteiro";
    } else {
        numero = parseInt(txtnum.value);
        document.getElementById("tabuada").innerHTML = tabuada(numero);
    }
}
/*
    o evento input dispara por cada caracter que inserir no objeto input
*/
txtnum.addEventListener("input", function(){
    console.log("in");
    mostraResultado();
});


/*
    evento change dispara quando o elemento perde o focus,
    o focus muda para outro elemento. A tag input tem que ficar com valor 
*/
txtnum.addEventListener("change", function(){
    console.log("ch");
    mostraResultado();
});
