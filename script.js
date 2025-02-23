document.addEventListener("DOMContentLoaded", function() {
    console.log("Pagina este încărcată!");
    checkImage('miting_piata_victoriei.jpg');
});

function checkImage(url) {
    const img = new Image();
    img.src = url;
    img.onload = function() {
        console.log('Imaginea s-a încărcat corect:', url);
    };
    img.onerror = function() {
        console.error('Eroare la încărcarea imaginii:', url);
    };
}