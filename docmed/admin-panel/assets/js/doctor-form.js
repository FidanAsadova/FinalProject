let id = new URLSearchParams(window.location.search).get("id");
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
let doctoUserTitle = document.querySelector(".doctor-user-name");

async function getDocById() {
  let res = await axios(`${BASE_URL_Dr}/${id}`);
  let data = res.data;
  console.log(data);

  docName.value = data.firstName;
  docLastname.value = data.lastName;
  docGender.value = data.gender;
  docSpec.value = data.speciality;
  docNum.value = data.number;
  photo = data.imgUrl;
}

getDocById();

async function titleDoc() {
  let res = await axios(`${BASE_URL_Dr}/${id}`);
  let data = res.data;
  if (id) {
    doctoUserTitle.innerText = `Doctor "${data.firstName}" Details`;
    btnDoc.innerText = "Edit";
  } else {
    doctoUserTitle.innerText = "Add Doctor";
  }
}
titleDoc();

function createdDr() {
  formDr.addEventListener("submit", async function (e) {
    e.preventDefault();

    let doc = {
      imgUrl: base64,
      firstName: docName.value,
      lastName: docLastname.value,
      gender: docGender.value,
      speciality: docSpec.value,
      number: docNum.value,
    };

    if (id) {
      await axios.patch(`${BASE_URL_Dr}/${id}`, doc);
    } else {
      await axios.post(BASE_URL_Dr, doc);
    }
    window.location.href = "doctor.html";
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
