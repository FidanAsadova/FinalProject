let BASE_URL_Dr = "http://localhost:8080/doctors";
let photo = document.querySelector("#photo-doc");
let formDr = document.querySelector(".doc-form");
let docName = document.querySelector("#doc-name");
let docLastname = document.querySelector("#doc-lastname");
let docGender = document.querySelector("#doc-gender");
let docSpec = document.querySelector("#doc-sp");
let docNum = document.querySelector("#doc-num");
let btnDoc = document.querySelector("#doc-btn");
let base64;

function createdDr() {
    console.log("hhh");
  formDr.addEventListener("submit", async function (e) {
    console.log("kkkk");

    e.preventDefault();
    let doc = {
      imgUrl: base64,
      firstName: docName.value,
      lastName: docLastname.value,
      gender: docGender.value,
      speciality: docSpec.value,
      number: docNum.value,
    };
    await axios.post(BASE_URL_Dr, doc);
  });
}
createdDr();

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
