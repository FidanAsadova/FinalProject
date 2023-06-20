let BASE_UR_Post = "http://localhost:8080/postIg";
let rowPost = document.querySelector(".big-blog");
let search = document.querySelector(".search-input");

async function getPostIg() {
  let res = await axios.get(BASE_UR_Post);
  let data = res.data;
  console.log(data);
  drawPost(data);
}
getPostIg();

function drawPost(arr) {
  rowPost.innerHTML = "";
  arr.forEach((element) => {
    rowPost.innerHTML += `
    <div class="col col-sm-12 col-lg-8 mb-5">
              <div class="blog-card">
                <div class="card-top">
                  <div class="img">
                    <img class="w-100" src="${element.imgUrl}" />
                    <div class="date-div">
                      <p class="fs-3 fw-bold m-0 pb-0 pt-2 number-p">${element.day}</p>
                      <p class="date-mon fs-5">${element.mon}</p>
                    </div>
                  </div>
                </div>
                <div class="card-body p-5">
                  <a href="#"><p class="card-title">${element.title}</p></a>
                  <p class="card-parag">
                    That dominion stars lights dominion divide years for fourth
                    have don't stars is that he earth it first without heaven in
                    place seed it second morning saying.
                  </p>
                  <div class="sort-comment">
                    <a href="#"><span><i class="fa-solid fa-user" style="color: gray;"></i> ${element.about}</span></a>  |  
                    <a href="#"><span><i class="fa-solid fa-comments" style="color: #53585f;"></i> 03 Comments</span></a>
                  </div>
                </div>
              </div>
            </div>
            `;
  });
}

search.addEventListener("input", async function (e) {
  let res = await axios.get(BASE_UR_Post);
  let data = res.data;
  const searchName = data.filter((item) => {
    return `${item.about} ${item.mon}`
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  drawPost(searchName);
});
