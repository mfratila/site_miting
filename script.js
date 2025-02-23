document.addEventListener("DOMContentLoaded", function() {
    console.log("Pagina este încărcată!");
    checkImage('miting_piata_victoriei.jpg');
    fetch('/.netlify/functions/getMapKey')
    .then(response => response.json())
    .then(data => {
        document.getElementById('mapFrame').src =
            `https://www.google.com/maps/embed/v1/place?key=${data.apiKey}&q=Piața+Victoriei,Bucharest`;
    })
    .catch(error => console.error('Eroare la încărcarea API Key-ului:', error));
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