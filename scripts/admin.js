import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getDatabase,
  ref,
  update,
  remove,
  onValue,
  query,
  orderByChild,
  equalTo
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCgkYCq7PFOcarUEtjaYVrf3QcZkLlZEEk",
  authDomain: "volunteervolume-91e20.firebaseapp.com",
  projectId: "volunteervolume-91e20",
  storageBucket: "volunteervolume-91e20.appspot.com",
  messagingSenderId: "1020304409073",
  appId: "1:1020304409073:web:81fe0ae39bc5effc130450",
  measurementId: "G-P3JWNGQ1TE",
  databaseURL: "https://volunteervolume-91e20-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.addEventListener("DOMContentLoaded", () => {
  loadPendingRequests();
  setupModal();
});

function loadPendingRequests() {
    const container = document.getElementById("pendingRequests");
    const volunteersRef = ref(db, "Volunteers");
  
    onValue(volunteersRef, (snapshot) => {
      container.innerHTML = "";
  
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        const id = childSnapshot.key;
  
        if (data.approval === false) {
          const card = createRequestCard(data, id);
          container.appendChild(card);
        }
      });
    });
  }
  

function createRequestCard(data, id) {
  const card = document.createElement("div");

  const birthdateStr = `${data.birthdate?.month || "?"}/${data.birthdate?.day || "?"}/${data.birthdate?.year || "?"}`;

  card.innerHTML = `
    <h4>${data.firstname} ${data.lastname}</h4>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    <p>Birthday: ${birthdateStr}</p>
    <button data-id="${id}" class="view-more">View More</button>
    <hr>
  `;

  card.querySelector(".view-more").addEventListener("click", () => showModal(data, id));
  return card;
}

function setupModal() {
  const modal = document.createElement("div");
  modal.id = "volunteerModal";
  modal.style.display = "none";
  modal.innerHTML = `
    <div id="modalContent">
      <button id="closeModal">Close</button>
      <div id="modalDetails"></div>
      <br>
      <button id="approveBtn">Approve</button>
      <button id="denyBtn">Deny</button>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById("closeModal").addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target.id === "volunteerModal") closeModal();
  });
}

function showModal(data, id) {
  const modal = document.getElementById("volunteerModal");
  const modalDetails = document.getElementById("modalDetails");

  modalDetails.innerHTML = `
    <h2>${data.firstname} ${data.lastname}</h2>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Birthdate:</strong> ${data.birthdate?.month}/${data.birthdate?.day}/${data.birthdate?.year}</p>
    <p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.state} ${data.zipcode}</p>
    <p><strong>Status:</strong> ${data.status}</p>
    <p><strong>Vaccinated:</strong> ${data.vaccinated}</p>
    <p><strong>Criminal Record:</strong> ${data.criminalRecord}</p>
    <p><strong>Explain Record:</strong> ${data.explainRecord}</p>
    <p><strong>Source:</strong> ${data.source}</p>
    <p><strong>Other Source:</strong> ${data.otherSource}</p>
    <p><strong>Volunteer Experience:</strong> ${data.volExperience}</p>
    <p><strong>Employment Experience:</strong> ${data.empExperience}</p>
    <p><strong>Reference:</strong> ${data.reference}</p>
    <p><strong>Hobbies:</strong> ${data.hobbies}</p>
    <p><strong>Why Volunteer:</strong> ${data.whyVolunteer}</p>
  `;

  document.getElementById("approveBtn").onclick = () => approveVolunteer(id);
  document.getElementById("denyBtn").onclick = () => denyVolunteer(id);
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("volunteerModal");
  modal.style.display = "none";
}

function approveVolunteer(id) {
    update(ref(db, `Volunteers/${id}`), { approval: true })
      .then(() => {
        closeModal();
        loadPendingRequests();
      })
      .catch((err) => console.error("Error approving:", err));
  }
  
  function denyVolunteer(id) {
    remove(ref(db, `Volunteers/${id}`))
      .then(() => {
        closeModal();
        loadPendingRequests();
      })
      .catch((err) => console.error("Error denying:", err));
  }