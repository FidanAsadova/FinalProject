let BASE_URL_users = "http://localhost:8080/users";
let BASE_URL_offers = "http://localhost:8080/offers";
let usersTbody = document.querySelector(".users-tbody");
let offersTbody = document.querySelector(".offers-tbody");
let num = 3;
let offersNum = 3;
let loadUser = document.querySelector(".user-load");
let loadOffer = document.querySelector(".load-offer");

///users

async function getUsersData() {
  let res = await axios.get(BASE_URL_users);
  let data = res.data;
  console.log(data);
  drawUsers(data);
}
getUsersData();

function drawUsers(array) {
  usersTbody.innerHTML = "";
  array.slice(0, num).forEach((user) => {
    usersTbody.innerHTML += `
    <tr>
                        <td>${user.firstName}</td>
                        <td>${user.email}</td>
                        <td>${user.password}</td>
                        
                      </tr>
    `;
  });
}

loadUser.addEventListener("click", function (e) {
  e.preventDefault();
  num = num + 3;
  getUsersData();
});

///offers

async function getOffersData() {
  let res = await axios.get(BASE_URL_offers);
  let data = res.data;
  console.log(data);
  drawOffers(data);
}
getOffersData();

function drawOffers(array) {
  offersTbody.innerHTML = "";
  array.slice(0, offersNum).forEach((offer) => {
    offersTbody.innerHTML += `
        <tr>
                        <td>${offer.name}</td>
                        <td>${offer.email}</td>
                        <td>
                          ${offer.offerSubject}
                        </td>
                        <td>
                          <div class="btns d-flex justify-content-around">
                            <a href="" onclick="deleteOffer(${offer.id},this)"
                              ><i
                                class="fa-regular fa-trash-can"
                                style="color: darkred"
                              ></i
                            ></a>
                          </div>
                        </td>
                      </tr>
        `;
  });
}

loadOffer.addEventListener("click", function (e) {
  e.preventDefault();
  offersNum = offersNum + 3;
  getOffersData();
});

async function deleteOffer(id, btn) {
  await axios.delete(`${BASE_URL_offers}/${id}`);
  btn.closest("tr").remove()
}
