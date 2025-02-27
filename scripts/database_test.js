import { getDatabase } from "firebase/database";

document.addEventListener("DOMContentLoaded", function () {
  const database = getDatabase();
  const form = document.getElementById("volunteerForm");

  if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        addVolunteer(firstname, lastname, email, database);
    });
  }
});

function addVolunteer(firstname, lastname, email, database) {
  const volunteerRef = database.ref("volunteers").push();  // Creates a new entry in "volunteers"
  volunteerRef.set({
      firstname: firstname,
      lastname: lastname,
      email:email,
      timestamp: new Date().toISOString()
  })
  .then(() => {
      console.log("Data successfully written!");
      alert("Succesfully Registered Volunteer!")
  })
  .catch((error) => {
      console.error("Error writing data:", error);
  });
}