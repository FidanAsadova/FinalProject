let BASE_URL_Offers = "http://localhost:8080/offers";
let formContact = document.querySelector("#form-contact");
let textareaInput = document.querySelector("#form-name");
let nameInput = document.querySelector("#nameOffer");
let emailInput = document.querySelector("#emailOffer");

function createdOffer() {
  formContact.addEventListener("submit", async function (e) {
    e.preventDefault();

    let offer = {
      offerSubject: textareaInput.value,
      name: nameInput.value,
      email: emailInput.value,
    };
    await axios.post(BASE_URL_Offers, offer);
  });
}

createdOffer()
