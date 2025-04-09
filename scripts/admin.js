import { initializeApp } from "firebase/app";
import {getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCgkYCq7PFOcarUEtjaYVrf3QcZkLlZEEk",
    authDomain: "volunteervolume-91e20.firebaseapp.com",
    projectId: "volunteervolume-91e20",
    storageBucket: "volunteervolume-91e20.firebasestorage.app",
    messagingSenderId: "1020304409073",
    appId: "1:1020304409073:web:81fe0ae39bc5effc130450",
    measurementId: "G-P3JWNGQ1TE",
    databaseURL: "https://volunteervolume-91e20-default-rtdb.firebaseio.com/"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firebase configuration
const db = getDatabase(app);

document.addEventListener('DOMContentLoaded', () => {
    loadPendingRequests();
})

function loadPendingRequests() {
    const container = document.getElementById('pendingRequests');
    db.ref('Volunteers').orderByChild('approval').equalTo(false).on('value', snapshot => {
        container.innerHTML = '';
        snapshot.forEach(childSnapshot => {
            const data = childSnapshot.val();
            const id = childSnapshot.key;
            const requestCard = createRequestCard(data, id);
            container.appendChild(requestCard);
        });
    });
}

function createRequestCard(id, data) {
    const card = document.createElement('div');
    card.className = 'request-card';
    card.innerHTML = `
        <div class="request-header">
            <h4>${data.firstname} ${data.lastname}</h4>
            <div class="request-actions">
                <button class="approve-btn" data-id="${id}">Approve</button>
                <button class="deny-btn" data-id="${id}">Deny</button>
            </div>
        </div>
        <div class="request-details">
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <!-- TODO: add more details as needed -->
        </div>
    `;
    card.querySelector('.approve-btn').addEventListener('click', approveRequest);
    card.querySelector('.deny-btn').addEventListener('click', denyRequest);
    return card;
}

function approveRequest(e) {
    const id = e.target.dataset.id;
    db.ref('volunteers/${id}').update({ approval: true })
        .then(() => {
            e.target.closest('.request-card').remove();
        })
        .catch(error => {
            console.error('Error approving request:' + error.message);
        });
}

function denyRequest(e) {
    const id = e.target.dataset.id;
    db.ref('volunteers/${id}').remove()
        .then(() => {
            e.target.closest('.request-card').remove();
        })
        .catch(error => {
            console.error('Error denying request:' + error.message);
        });
}