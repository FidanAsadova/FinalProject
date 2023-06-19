let BASE_URL_blog = "http://localhost:8080/blog";
let blogs = document.querySelector(".card-blog");
let numBlog = 3;
let blogLoad = document.querySelector("#load-blog");

async function getAllBlogs() {
    let res = await axios.get(BASE_URL_blog);
    let data = res.data;
    console.log(data);
    drawBlogs(data);
  }
  getAllBlogs();
  
  function drawBlogs(array) {
    blogs.innerHTML = "";
    array.slice(0, numBlog).forEach((element) => {
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
  blogLoad.addEventListener("click", function (e) {
    e.preventDefault();
    numBlog = numBlog + 3;
    getAllBlogs();
  });
  