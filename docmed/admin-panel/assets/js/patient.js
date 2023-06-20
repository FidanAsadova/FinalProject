let BASE_URL_patient = "http://localhost:8080/patients";
let patientTbody = document.querySelector(".patient-tbody");

async function getPatientData() {
  let res = await axios.get(BASE_URL_patient);
  let data = res.data;
  console.log(data);
  drawPatient(data);
}
getPatientData();

async function drawPatient(array) {
  patientTbody.innerHTML = "";
  array.forEach((patient) => {
    patientTbody.innerHTML += `
        <tr>
                        <th scope="row"><img class="w-25" src="${patient.imgUrl}" alt="..." /></th>
                        <td>${patient.name}</td>
                        <td>${patient.email}</td>
                        <td>${patient.date}</td>
                        <td>${patient.number}</td>
                        <td>${patient.doctor}</td>
                        <td>${patient.condition}</td>
                        <td>
                          <div class="btns d-flex justify-content-around">
                            <a href="patient-form.html?id=${patient.id}"
                              ><i
                                class="fa-regular fa-pen-to-square"
                                style="color: navy"
                              ></i
                            ></a>
                            <a onclick="deletePatient(${patient.id},this)" href=""
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

async function deletePatient(id, btn) {
    await axios.delete(`${BASE_URL_patient}/${id}`);
    btn.closest("tr").remove();
  }
  