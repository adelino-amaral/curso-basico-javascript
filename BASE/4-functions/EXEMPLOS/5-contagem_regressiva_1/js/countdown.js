// referência aos elementos do ficheiro HTML
var modal   = document.getElementById('countModal');
var btn     = document.getElementById("btAbrir");
var span    = document.getElementsByClassName("close")[0];

// quando clicar no botão abre o modal
btn.addEventListener("click", function(){
    modal.style.display = "block";  // torna o modal visível
});


// quando clicar no <span> (x), fecha o modal
span.addEventListener("click", function(){
    modal.style.display = "none";   // esconde o modal
});

// quando clicar em qualquer parte fora do modal, fecha-o
window.addEventListener("click", function(){
    if (event.target == modal) {
        modal.style.display = "none";   // esconde o modal
    }    
});


// CONTADOR
function countDown(secs, elem){
    var element = document.getElementById(elem);
    if(secs < secs) element.innerHTML = "0" + secs;
    else element.innerHTML = secs;
    secs--;
    
    var timer = setTimeout('countDown(' + secs + ',"' + elem + '")', 1000);
    if(secs == -1) clearTimeout(timer);
}


window.addEventListener("load", function(){
    var randomNumber = Math.floor(Math.random() * 20) + 1;
    countDown(randomNumber, 'status');
});
