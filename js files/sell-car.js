document.addEventListener("DOMContentLoaded", function () {

    
    const form = document.getElementById("sell-car-form");
    const imageInput = document.getElementById("images");
    const imagePreview = document.getElementById("image-preview");

    // Preview uploaded images
    imageInput.addEventListener("change", function () {
        imagePreview.innerHTML = ""; // Clear previous images

        for (let file of this.files) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let img = document.createElement("img");
                img.src = e.target.result;
                imagePreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });

});
