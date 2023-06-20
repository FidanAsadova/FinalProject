let BASE_URL_blog = "http://localhost:8080/blog";
let blogTbody = document.querySelector(".blog-tbody");

async function getBlogData() {
  let res = await axios.get(BASE_URL_blog);
  let data = res.data;
  console.log(data);
  drawBLogData(data);
}
getBlogData();

async function drawBLogData(array) {
  blogTbody.innerHTML = "";
  array.forEach((blog) => {
    blogTbody.innerHTML += `
    <tr>
                        <th scope="row">
                          <img
                            class="rounded ms-1 mt-1 mb-0"
                            src="${blog.imgUrl}"
                            alt="..."
                          />
                        </th>
                        <td>${blog.blogTitle}</td>
                        <td>${blog.blogContent}</td>
                        <td>
                          <div class="btns d-flex justify-content-around">
                            <a href="blog-form.html?id=${blog.id}"
                              ><i
                                class="fa-regular fa-pen-to-square"
                                style="color: navy"
                              ></i
                            ></a>
                            <a onclick="deleteBlog(${blog.id},this)" href=""
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

async function deleteBlog(id, btn) {
  await axios.delete(`${BASE_URL_blog}/${id}`);
  btn.closest("tr").remove();
}
