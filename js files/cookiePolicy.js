


const acceptCheckbox = document.getElementById("accept-checkbox");
const acceptButton = document.getElementById("accept-btn");

// Enable button when checkbox is checked
acceptCheckbox.addEventListener("change", function () {
    acceptButton.disabled = !this.checked;
});

