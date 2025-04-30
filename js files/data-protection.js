


const confirmCheckbox = document.getElementById("confirm-checkbox");
const confirmButton = document.getElementById("confirm-btn");

// Enable button when checkbox is checked
confirmCheckbox.addEventListener("change", function () {
    confirmButton.disabled = !this.checked;
});
