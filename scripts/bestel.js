let firstNameInput = document.getElementById("voornaam");
let lastNameInput = document.getElementById("achternaam");
let emailInput = document.getElementById("email");
let phoneNumberInput = document.getElementById("phonenumber");
let addressInput = document.getElementById("adres");
let deliveryDateInput = document.getElementById("leverdatum");
let productInput = document.getElementById("product");
let personalizationInput = document.getElementById("personalisering");
let paymentMethodInput = document.getElementById("betaalwijze");

/* E-mailadres validatie */
let emailError = document.getElementById("emailError");
emailInput.addEventListener("input", function () {
    let email = emailInput.value;
    let teken = email.indexOf("@");
    let isGmail = email.toLowerCase().endsWith("@gmail.com");

    if (teken < 1 || !isGmail) {
        emailError.textContent = "Gebruik een geldig Gmail-adres in";
        emailInput.classList.remove("valid-input");
    } else {
        emailError.textContent = " ";
        emailInput.classList.add("valid-input");
    }
});

function setupInputValidation(inputElement, errorElement, validationFunction) {
    inputElement.addEventListener("input", function () {
        validationFunction();
    });
}

/* Spatie validatie */
let firstNameError = document.getElementById("nameError");
let lastNameError = document.getElementById("lastNameError");

function spatieValidateInput(input, error) {
    let value = input.value.trim();

    if (value.includes(" ")) {
        error.textContent = "Dit veld mag geen spatie bevatten.";
        input.classList.remove("valid-input");
    } else {
        error.textContent = "";
        input.classList.add("valid-input");
    }
}

setupInputValidation(firstNameInput, firstNameError, function () {
    spatieValidateInput(firstNameInput, firstNameError);
});
setupInputValidation(lastNameInput, lastNameError, function () {
    spatieValidateInput(lastNameInput, lastNameError);
});


/* Telefoonnummer validatie */
let phoneNumberError = document.getElementById("phoneNumberError");

function validatePhoneNumber() {
    let value = phoneNumberInput.value;

    if (value.includes(" ")) {
        phoneNumberError.textContent = "Telefoonnummer mag geen spaties bevatten.";
        phoneNumberInput.classList.remove("valid-input");
    } else if (!/^\d+$/.test(value)) {
        phoneNumberError.textContent = "Voer een geldig telefoonnummer in.";
        phoneNumberInput.classList.remove("valid-input");
    } else {
        phoneNumberError.textContent = "";
        phoneNumberInput.classList.add("valid-input");
    }
}

/* Adres validatie */
let addressError = document.getElementById("addressError");

function validateAddress() {
    let value = addressInput.value;

    if (value === "") {
        addressError.textContent = "Vul uw adres in.";
        addressInput.classList.remove("valid-input");
    } else {
        addressError.textContent = "";
        addressInput.classList.add("valid-input");
    }
}

/* Leverdatum validatie */
let deliveryDateError = document.getElementById("deliveryDateError");

function validateDeliveryDate() {
    let value = deliveryDateInput.value;

    if (value === "") {
        deliveryDateError.textContent = "Kies een leverdatum.";
        deliveryDateInput.classList.remove("valid-input");
    } else {
        deliveryDateError.textContent = "";
        deliveryDateInput.classList.add("valid-input");
    }
}

/* Product validatie */
let productError = document.getElementById("productError");

function validateProduct() {
    let value = productInput.value;

    if (value === "") {
        productError.textContent = "Kies een product.";
        productInput.classList.remove("valid-input");
    } else {
        productError.textContent = "";
        productInput.classList.add("valid-input");
    }
}

/* Personalisering validatie */
let personalizationError = document.getElementById("personalizationError");

function validatePersonalization() {
    let value = personalizationInput.value;

    if (value === "") {
        personalizationError.textContent = "Voeg een personalisering toe.";
        personalizationInput.classList.remove("valid-input");
    } else {
        personalizationError.textContent = "";
        personalizationInput.classList.add("valid-input");
    }
}

/* Betaalwijze validatie */
let paymentMethodError = document.getElementById("paymentMethodError");

function validatePaymentMethod() {
    let value = paymentMethodInput.value;

    if (value === "") {
        paymentMethodError.textContent = "Kies een betaalwijze.";
        paymentMethodInput.classList.remove("valid-input");
    } else {
        paymentMethodError.textContent = "";
        paymentMethodInput.classList.add("valid-input");
    }
}

setupInputValidation(phoneNumberInput, phoneNumberError, validatePhoneNumber);
setupInputValidation(addressInput, addressError, validateAddress);
setupInputValidation(deliveryDateInput, deliveryDateError, validateDeliveryDate);
setupInputValidation(productInput, productError, validateProduct);
setupInputValidation(personalizationInput, personalizationError, validatePersonalization);
setupInputValidation(paymentMethodInput, paymentMethodError, validatePaymentMethod);

/* Geeft de velden een standaard waarden */
document.addEventListener("DOMContentLoaded", function () {
    firstNameInput.classList.add("default-value");
    lastNameInput.classList.add("default-value");
    emailInput.classList.add("default-value");
    phoneNumberInput.classList.add("default-value");
    addressInput.classList.add("default-value");
    deliveryDateInput.classList.add("default-value");
    productInput.classList.add("default-value");
    personalizationInput.classList.add("default-value");
    paymentMethodInput.classList.add("default-value");
});

/* Plaats Bestelling Event Listener */
let formErrors = document.getElementById("formErrors");
let orderButton = document.querySelector("button");
orderButton.addEventListener("click", function () {
    checkForm();
});

function checkForm() {
    let inputs = [
        firstNameInput,
        lastNameInput,
        emailInput,
        phoneNumberInput,
        addressInput,
        deliveryDateInput,
        productInput,
        personalizationInput,
        paymentMethodInput
    ];

    let allFieldsFilled = inputs.every(input => input.value !== "");

    if (allFieldsFilled) {
        alert("Uw bestelling is voltooid! Je wordt doorgestuurd naar de bevestigingspagina.")
        formErrors.textContent = "";
        formErrors.classList.remove("error-message");
        formErrors.classList.add("success-message");

        // Voeg gegevens toe aan de URL
        const urlParams = new URLSearchParams();
        urlParams.set("voornaam", firstNameInput.value);
        urlParams.set("achternaam", lastNameInput.value);
        urlParams.set("email", emailInput.value);
        urlParams.set("telefoonnummer", phoneNumberInput.value);
        urlParams.set("adres", addressInput.value);
        urlParams.set("leverdatum", deliveryDateInput.value);
        urlParams.set("product", productInput.value);
        urlParams.set("personalization", personalizationInput.value);
        urlParams.set("betaalmethode", paymentMethodInput.value);


        // Stuur de gebruiker door naar de bevestigingspagina
        window.location.href = `bevestiging.html?${urlParams.toString()}`;


    } else {
        formErrors.textContent = "Niet alle velden zijn ingevuld. Vul alle velden in.";
        formErrors.classList.remove("success-message");
        formErrors.classList.add("error-message");
    }
}