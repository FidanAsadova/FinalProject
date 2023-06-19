let BASE_URL_doctor = "http://localhost:8080/doctors";
let BASE_URL_users = "http://localhost:8080/users";
let doctors = document.querySelector(".card-doctor");
let drSearch = document.querySelector("#search");
let drLoad = document.querySelector("#load");
let form = document.querySelector(".login-form");
let loginEmail = document.querySelector(".login-email");
let loginPassword = document.querySelector(".login-password");
let num = 4;
let btnSignUp = document.querySelector(".signup-login-btn");

////DOCTORS

async function getAllDoctors() {
  let res = await axios.get(BASE_URL_doctor);
  let data = res.data;
  console.log(data);
  drawDoctors(data);
}
getAllDoctors();

function drawDoctors(array) {
  doctors.innerHTML = "";
  array.slice(0, num).forEach((element) => {
    doctors.innerHTML += `
    <div class="col col-sm-12 col-md-6 col-lg-3 mt-1 mb-1 pt-2 pb-2">
              <div class="doctor">
                <div class="img">
                  <img class="w-100" src="${element.photo}" alt="doctor" />
                </div>
                <div class="doctor-about">
                <p class="doctor-name p-0 m-0">${element.firstName} ${element.lastName}</p>             
                <p class="doctor-status p-0 m-0">${element.speciality}</p>
                <div class="d-flex gap-2 align-items-center">
                <a href="" ><i class="fa-regular fa-star" style="color: #f5fbff;"></i></a>
                <a href=""><i class="fa-solid fa-circle-info" style="color: #f5fbff;"></i></a>
                </div>
                </div>
                
              </div>
            </div>
    `;
  });
}

drLoad.addEventListener("click", async function (e) {
  e.preventDefault();
  num = num + 4;
  getAllDoctors();
});

drSearch.addEventListener("input", async function (e) {
  let res = await axios.get(BASE_URL_doctor);
  let data = await res.data;
  let searchTitle = data.filter((item) => {
    return `${item.firstName} ${item.lastName} ${item.speciality}`
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawDoctors(searchTitle);
});

///login

form.addEventListener("submit", async function () {
  let res = await axios.get(BASE_URL_users);
  let data = res.data;
  data.find((user) => {
    if (
      user.isAdmin &&
      loginEmail.value == "fidan@gmail.com" &&
      loginPassword.value == "678901"
    ) {
      window.location = `/docmed/admin-panel/admin.html`;
    } else if (
      data.find(
        (user) =>
          user.email == loginEmail.value && user.password == loginPassword.value
      )
    ) {
      window.location = `/docmed/user-acc.html`;
    } else {
      alert(
        "Your account does not exist on the site. Please create new account!"
      );
    }
  });
});
