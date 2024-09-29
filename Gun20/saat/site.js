function saatiGoster() {
    let zaman = new Date();
    let divSaat = document.getElementById("saat");
    divSaat.textContent = zaman.toLocaleDateString("tr");
}

saatiGoster();

setInterval(saatiGoster,1000);