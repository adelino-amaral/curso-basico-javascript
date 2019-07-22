// Get the modal
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// When the user click on button then trigger the modal view
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Obtém o elemento <span> que fecha o modal
// DUAS ALTERNATIVAS PARA OBTER O MESMO ELEMENTO
// var span = document.getElementsByClassName("close")[0];
var span = document.querySelector('.close')

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
