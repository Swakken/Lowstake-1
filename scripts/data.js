document.addEventListener("DOMContentLoaded", function () {

    const data = [
        {
            category: "Broden",
            type: "kleineBroden",
            name: "Klein wit brood",
            price: 2.50,
            image: "../media/kl-lang-wit-brood.jpg",
            alt: "Foto van klein wit brood",
            description: "Ons heerlijk klein versgebakken wit brood. Gemaakt in onze eigen zoete hoek.",
            productDetailLink: "klwitBrood.html"
        },
        {
            category: "Broden",
            type: "groteBroden",
            name: "Groot wit brood",
            price: 3.00,
            image: "../media/gr-lang-wit-brood.jpg",
            alt: "Foto van groot wit brood",
            description: "Ons heerlijk groot versgebakken wit brood. Gemaakt in onze eigen zoete hoek."
        },
        {
            category: "Broden",
            type: "kleineBroden",
            name: "Klein grof brood",
            price: 2.50,
            image: "../media/kl-lang-grof.jpg",
            alt: "Foto van klein grof brood",
            description: "Ons heerlijk klein versgebakken grof brood. Gemaakt in onze eigen zoete hoek."
        },
        {
            category: "Broden",
            type: "groteBroden",
            name: "Groot grof brood",
            price: 3.00,
            image: "../media/gr-lang-grof.jpg",
            alt: "Foto van groot grof brood",
            description: "Ons heerlijk groot versgebakken grof brood. Gemaakt in onze eigen zoete hoek."
        },
        {
            category: "Broden",
            type: "kleineBroden",
            name: "Klein volkoren brood",
            price: 2.70,
            image: "../media/kl-lang-volkoren.jpg",
            alt: "Foto van klein volkoren brood",
            description: "Ons heerlijk klein versgebakken volkoren brood. Gemaakt in onze eigen zoete hoek."
        },
        {
            category: "Broden",
            type: "groteBroden",
            name: "Groot volkoren brood",
            price: 3.20,
            image: "../media/gr-lang-volkoren-brood.jpg",
            alt: "Foto van groot volkoren brood",
            description: "Ons heerlijk groot versgebakken volkoren brood. Gemaakt in onze eigen zoete hoek.",
            productDetailLink: "volkorenbrood.html"
        },
        {
            category: "Broden",
            type: "kleineBroden",
            name: "Klein tijger brood",
            price: 2.50,
            image: "../media/kl-wit-tijger.jpg",
            alt: "Foto van klein tijger brood",
            description: "Ons heerlijk klein versgebakken tijger brood. Gemaakt in onze eigen zoete hoek."
        },
        {
            category: "Broden",
            type: "groteBroden",
            name: "Groot tijger brood",
            price: 3.00,
            image: "../media/gr-wit-tijger-brood.jpg",
            alt: "Foto van groot tijger brood",
            description: "Ons heerlijk groot versgebakken tijger brood. Gemaakt in onze eigen zoete hoek."
        },
        {
            category: "Broden",
            type: "groteBroden",
            name: "Speltbrood",
            price: 3.20,
            image: "../media/speltbrood.jpg",
            alt: "Foto van speltbrood",
            description: "Ons heerlijk versgebakken speltbrood. Gemaakt in onze eigen zoete hoek."
        },
        {
            category: "Broden",
            type: "groteBroden",
            name: "Rogge",
            price: 3.20,
            image: "../media/gr-roggebrood.jpg",
            alt: "Foto van Rogge brood",
            description: "Ons heerlijk versgebakken rogge brood. Gemaakt in onze eigen zoete hoek."
        },
        /* Koffiekoeken */
        {
            category: "Koffiekoeken",
            type: "koffiekoeken",
            name: "Croissant",
            price: 1.60,
            image: "../media/croissant.jpg",
            alt: "Foto van een croissant",
            description: "Onze heerlijk versgebakken croissant. Gemaakt in onze eigen zoete hoek.",
            productDetailLink: "croissant.html"
        },
        {
            category: "Koffiekoeken",
            type: "koffiekoeken",
            name: "Chocoladebroodje",
            price: 1.60,
            image: "../media/chocoladebroodje.jpg",
            alt: "Foto van een chocoladebroodje",
            description: "Ons heerlijk versgebakken chocoladebroodje. Gemaakt in onze eigen zoete hoek."
        },
        {
            category: "Koffiekoeken",
            type: "koffiekoeken",
            name: "Lange rozijnen",
            price: 1.60,
            image: "../media/lange-rozijn.jpg",
            alt: "Foto van een lange rozijnen koffiekoek",
            description: "Onze heerlijk versgebakken lange rozijnen koffiekoek. Gemaakt in onze eigen zoete hoek.",
            discount: "25% Korting"
        },
        {
            category: "Koffiekoeken",
            type: "koffiekoeken",
            name: "Ingebakken pudding",
            price: 1.60,
            image: "../media/ingebakken-pudding.jpg",
            alt: "Foto van een ingebakken pudding koffiekoek",
            description: "Onze heerlijk versgebakken ingebakken pudding koffiekoek. Gemaakt in onze eigen zoete hoek."
        },
        {
            category: "Koffiekoeken",
            type: "koffiekoeken",
            name: "Krieken",
            price: 1.60,
            image: "../media/krieken.jpg",
            alt: "Foto van een krieken koffiekoek",
            description: "Onze heerlijk versgebakken krieken koffiekoek. Gemaakt in onze eigen zoete hoek."
        },
        {
            category: "Koffiekoeken",
            type: "koffiekoeken",
            name: "Pudding Chocolade",
            price: 1.60,
            image: "../media/chocolade.jpg",
            alt: "Foto van een pudding chocolade koffiekoek",
            description: "Onze heerlijk versgebakken pudding chocolade koffiekoek. Gemaakt in onze eigen zoete hoek."
        },
        {
            category: "Koffiekoeken",
            type: "koffiekoeken",
            name: "Frangipan",
            price: 1.60,
            image: "../media/frangipan.jpg",
            alt: "Foto van een frangipan koffiekoek",
            description: "Onze heerlijk versgebakken frangipan koffiekoek. Gemaakt in onze eigen zoete hoek."
        },
        {
            category: "Koffiekoeken",
            type: "koffiekoeken",
            name: "Appelen",
            price: 1.60,
            image: "../media/appelen.jpg",
            alt: "Foto van een appelen koffiekoek",
            description: "Onze heerlijk versgebakken appelen koffiekoek. Gemaakt in onze eigen zoete hoek."
        },
        {
            category: "Koffiekoeken",
            type: "koffiekoeken",
            name: "Confituur",
            price: 1.60,
            image: "../media/confituur.jpg",
            alt: "Foto van een confituur koffiekoek",
            description: "Onze heerlijk versgebakken confituur koffiekoek. Gemaakt in onze eigen zoete hoek."
        },
        {
            category: "Koffiekoeken",
            type: "koffiekoeken",
            name: "Bloemsuiker",
            price: 1.60,
            image: "../media/bloemsuiker.jpg",
            alt: "Foto van een koffiekoek bloemsuiker",
            description: "Onze heerlijk versgebakken bloemsuiker koffiekoek. Gemaakt in onze eigen zoete hoek."
        },
    ];

    document.addEventListener("DOMContentLoaded", function () {
        const urlParams = new URLSearchParams(window.location.search);
        const productName = urlParams.get("product");
        const productDetailsSection = document.getElementById("product-details-section");

        if (productName) {
            // Zoek het product op basis van de naam in data.js
            const foundProduct = data.find(function (product) {
                return product.name === productName;
            });

            if (foundProduct) {
                productDetailsSection.innerHTML = `
                <section class="product-details">
                    <div class="product-image">
                        <img class="img-product" src="${foundProduct.image}" alt="${foundProduct.alt}">
                    </div>
                    <div class="product-info">
                        <h3>${foundProduct.name}</h3>
                        <p>Prijs: ${foundProduct.price}</p>
                        <p>Omschrijving: ${foundProduct.description}</p>
                        <p><a href="${foundProduct.productDetailLink || '#'}">Details</a></p>
                    </div>
                </section>`;
            } else {
                productDetailsSection.innerHTML = "<p>Product niet gevonden.</p>";
            }
        } else {
            productDetailsSection.innerHTML = "<p>Productnaam ontbreekt in de URL.</p>";
        }
    });


});

// Nadat het formulier is ingediend, doorverwijzen naar de bevestigingspagina met de productnaam
const productName = // verkrijg de geselecteerde productnaam
    window.location.href = `bevestiging.html?product=${productName}`;

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get("product");
    const productDetailsSection = document.getElementById("product-details-section");

    // De rest van je bestaande code om productdetails te vinden en weer te geven
});
