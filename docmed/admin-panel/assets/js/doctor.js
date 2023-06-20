let BASE_URL_doctor = "http://localhost:8080/doctors";
let docTbody = document.querySelector(".doctor-tbody");

async function getDoctorData() {
  let res = await axios.get(BASE_URL_doctor);
  let data = res.data;
  console.log(data);
  drawDoctor(data);
}
getDoctorData();

function drawDoctor(array) {
  docTbody.innerHTML = "";
  array.forEach((doctor) => {
    docTbody.innerHTML += `
      <tr>
                        <th scope="row"><div class="img d-flex justify-content-center align-items-center">
                          <img class="rounded w-25" src="${doctor.imgUrl}" alt="..." />
                        </div></th>
                        <td>${doctor.firstName}</td>
                        <td>${doctor.lastName}</td>
                        <td>${doctor.gender}</td>
                        <td>${doctor.speciality}</td>
                        <td>${doctor.number}</td>
                        <td>
                          <div class="btns d-flex justify-content-around">
                            <a href=""
                              ><i
                                class="fa-regular fa-pen-to-square"
                                style="color: navy"
                              ></i
                            ></a>
                            <a onclick="deleteDoc(${doctor.id},this)" href=""
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

async function deleteDoc(id, btn) {
  await axios.delete(`${BASE_URL_doctor}/${id}`);
  btn.closest("tr").remove();
}
