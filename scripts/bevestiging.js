document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);


    const voornaam = urlParams.get("voornaam");
    const achternaam = urlParams.get("achternaam");
    const email = urlParams.get("email");
    const phonenumber = urlParams.get("telefoonnummer");
    const adres = urlParams.get("adres");
    const leverdatum = urlParams.get("leverdatum");
    const product = urlParams.get("product");
    const personalisering = urlParams.get("personalization");
    const betaalwijze = urlParams.get("betaalmethode");


    document.getElementById("voornaam").textContent = voornaam;
    document.getElementById("achternaam").textContent = achternaam;
    document.getElementById("email").textContent = email;
    document.getElementById("phonenumber").textContent = phonenumber;
    document.getElementById("adres").textContent = adres;
    document.getElementById("leverdatum").textContent = leverdatum;
    document.getElementById("product").textContent = product;
    document.getElementById("personalisering").textContent = personalisering;
    document.getElementById("betaalwijze").textContent = betaalwijze;

});





