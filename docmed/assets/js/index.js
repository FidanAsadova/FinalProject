let BASE_URL_blog = "http://localhost:8080/blog";
let BASE_URL_doctor = "http://localhost:8080/doctors";
let blogs = document.querySelector(".card-blog");
let doctors = document.querySelector(".card-doctor");

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
                  <p class="item-body">${element.blogContent}</p>
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
  array.forEach((element) => {
    doctors.innerHTML += `
    <div class="col col-sm-12 col-md-6 col-lg-3 mt-1 mb-1 pt-2 pb-2">
              <div class="doctor">
                <div class="img">
                  <img class="w-100" src="${element.photo}" alt="doctor" />
                </div>
                <div class="doctor-about">
                  <p class="doctor-name p-0 m-0">${element.firstName} ${element.lastName}</p>
                  <p class="doctor-status p-0 m-0">${element.speciality}</p>
                </div>
              </div>
            </div>
    `;
  });
}