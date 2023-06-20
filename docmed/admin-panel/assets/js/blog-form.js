let id = new URLSearchParams(window.location.search).get("id");
let BASE_URL_Blog = "http://localhost:8080/blog";
let formBlog = document.querySelector(".form-blog");
let photo = document.querySelector("#blog-photo");
let titleBlog = document.querySelector("#title-blog");
let contentBlog = document.querySelector("#content-blog");
let base64;

async function getBlogById() {
  let res = await axios(`${BASE_URL_Blog}/${id}`);
  let data = res.data;
  console.log(data);
  
  titleBlog.value = data.blogTitle;
  contentBlog.value = data.blogContent;
  photo = data.imgUrl;
}
getBlogById();

function createdBlog() {
  formBlog.addEventListener("submit", async function (e) {
    e.preventDefault();

    let newBlog = {
      imgUrl: base64,
      blogTitle: titleBlog.value,
      blogContent: contentBlog.value,
    };
    if (id) {
      await axios.patch(`${BASE_URL_Blog}/${id}`, newBlog);
    } else {
      await axios.post(BASE_URL_Blog, newBlog);
    }
    window.location.href="blog.html"
  });
}

createdBlog();

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const uploadImage = async (event) => {
  const file = event.target.files[0];
  base64 = await convertBase64(file);
  // console.log(file);
};

photo.addEventListener("change", (e) => {
  //   console.log(e.target.files);
  uploadImage(e);
});
