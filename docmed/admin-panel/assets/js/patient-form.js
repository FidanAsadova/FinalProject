let id = new URLSearchParams(window.location.search).get("id");
let BASE_URL_app = "http://localhost:8080/patients";
let formApp = document.querySelector("#form-appoiment");
let photo = document.querySelector("#app-photo");
let emailApp = document.querySelector("#email-app");
let nameApp = document.querySelector("#name-app");
let date = new Date();
let numberApp = document.querySelector("#num-app");
let docApp = document.querySelector("#doc-app");
let injuryApp = document.querySelector("#injury-app");
let btnApp = document.querySelector("#btn-app");
let base64;

async function getPatientById() {
  let res = await axios(`${BASE_URL_app}/${id}`);
  let data = res.data;
  console.log(data);

  nameApp.value = data.name;
  emailApp.value = data.email;
  numberApp.value = data.number;
  docApp.value = data.doctor;
  injuryApp.value = data.condition;
  photo = data.imgUrl;
}
getPatientById()

function createdApp() {
  formApp.addEventListener("submit", async function (e) {
    e.preventDefault();

    let app = {
      imgUrl: base64,
      name: nameApp.value,
      email: emailApp.value,
      date: date.toDateString(),
      number: numberApp.value,
      doctor: docApp.value,
      condition: injuryApp.value,
    };

    getPatientById()

    if (id) {
      await axios.patch(`${BASE_URL_app}/${id}`, app);
    } else {
      await axios.post(BASE_URL_app, app);
    }
    window.location.href="patient.html"
  });
}
createdApp()

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
