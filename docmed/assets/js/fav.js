let BASE_URL_fav = "http://localhost:8080/fav";
let row = document.querySelector(".fav-doc");

async function getFavData() {
  let res = await axios.get(BASE_URL_fav);
  let data = res.data;
  console.log(data);
  drawFav(data);
}

getFavData();

function drawFav(arr) {
  row.innerHTML = "";
  arr.forEach((element) => {
    row.innerHTML += `
        <span class="col col-sm-12 col-md-6 col-lg-3 mt-1 mb-1 pt-2 pb-2">
                <div class="doctor">
                  <div class="img">
                    <img class="w-100" src="${element.imgUrl}" />
                  </div>
                  <div class="doctor-about">
                  <p class="doctor-name p-0 m-0">${element.firstName}</p>             
                  <p class="doctor-status p-0 m-0">${element.speciality}</p>
                  <a onclick="deleteFav(${element.id},this)"><i class="fa-solid fa-star" style="color: #ecdb18;"></i></a>
                  </div>
                  
                </div>
              </span>`;
  });
}

async function deleteFav(id, btn) {
  await axios.delete(`${BASE_URL_fav}/${id}`);
  btn.closest("span").remove();
}
