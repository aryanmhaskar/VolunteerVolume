window.approveUser = async function (userId) {
    const userRef = ref(db, `Volunteers/${userId}`);
    await update(userRef, { approval: true });
    alert("User approved!");
};

window.rejectUser = async function (userId) {
    const userRef = ref(db, `Volunteers/${userId}`);
    const confirmDelete = confirm("Are you sure you want to reject and remove this user?");
    if (confirmDelete) {
        await remove(userRef);
        alert("User rejected and removed.");
    }
};