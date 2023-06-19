let BASE_URL_blog = "http://localhost:8080/blog";
let BASE_URL_doctor = "http://localhost:8080/doctors";
let blogs = document.querySelector(".card-blog");
let doctors = document.querySelector(".card-doctor");
let drSearch = document.querySelector("#search");
let drLoad = document.querySelector("#load");
let num = 4;

///BLOG
async function getAllBlogs() {
  let res = await axios.get(BASE_URL_blog);
  let data = res.data;
  console.log(data);
  drawBlogs(data);
}
getAllBlogs();

function drawBlogs(array) {
  blogs.innerHTML = "";
  array.forEach((element) => {
    blogs.innerHTML += `
    <div class="col col-sm-12 col-md-6 col-lg-4 p-3 mb-3 mt-3">
              <div class="department-card">
                <div class="img">
                  <img class="w-100" src="${element.photo}" alt="" />
                </div>
                <div class="card-item">
                  <p class="item-title">${element.blogTitle}</p>
                  <p class="item-body">${element.blogContent.slice(
                    0,
                    45
                  )}... <a href="blog-details.html?id=${
      element.id
    }" class= "text-primary">Read More</a></p>
                </div>
              </div>
            </div>
    `;
  });
}

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
                <button class="btn shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-circle-info" style="color: #f5fbff;"></i></button>
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
  drawDoctors(searchTitle)
});
