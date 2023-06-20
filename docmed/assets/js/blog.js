let id = new URLSearchParams(window.location.search).get("id");
let blogs = document.querySelector(".card-blog");
let BASE_URL_blog = "http://localhost:8080/blog";


async function getAllBlogs() {
    let res = await axios.get(`${BASE_URL_blog}/${id}`);
    let data = res.data;
    console.log(data);
    drawBlogs(data);
  }
  getAllBlogs();

  function drawBlogs(element) {
      blogs.innerHTML = `
      <div  class="col col-sm-12 col-md-6 col-lg-8 p-3 mb-3">
                <div class="department-card">
                  <div class="img">
                    <img class="w-100" src="${element.imgUrl}" alt="" />
                  </div>
                  <div class="card-item">
                    <p class="item-title">${element.blogTitle}</p>
                    <p class="item-body">${element.blogContent}</p>
                  </div>
                </div>
              </div>
      `;
    };
  