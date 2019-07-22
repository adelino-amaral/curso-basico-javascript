/*
    When the user scrolls down 20px from the top of the document, slide down the navbar
*/

// if scroll down or up move
window.onscroll = function() {
    moveScroll()
};

function moveScroll() {
    // ter em atenção o valor de top: -50px; no #navbar
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
    {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

