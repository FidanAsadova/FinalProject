let BASE_URL = "http://localhost:8080/users";
let formSignUp = document.querySelector("#form-sign-up");
let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let submitBtn = document.querySelector(".signup-btn");

function createdUser() {
    formSignUp.addEventListener("submit", async function (e) {
    e.preventDefault();

    let user = {
      firstName: inputName.value,
      email: inputEmail.value,
      password: inputPassword.value,
    };
    await axios.post(BASE_URL, user);
  });
}
createdUser();
