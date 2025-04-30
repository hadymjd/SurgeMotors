document.addEventListener("DOMContentLoaded", function () {
    const priceInput = document.getElementById("price");
    const priceValue = document.getElementById("price-value");

    // Function to update the price display
    function updatePriceDisplay() {
        priceValue.textContent = `${parseInt(priceInput.value).toLocaleString()} USD`;
    }

    // Update on input change
    priceInput.addEventListener("input", updatePriceDisplay);

    // Initialize display with default price
    updatePriceDisplay();
});

function searchCars() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const cars = document.querySelectorAll(".car-card");

    cars.forEach(car => {
        const carText = car.innerText.toLowerCase();
        car.style.display = carText.includes(query) ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".car-card").forEach(card => {
        const btn = card.querySelector(".btn");
        const name = card.querySelector("h3").innerText;
        const model = card.querySelector("p:nth-of-type(1)").innerText;
        const price = card.querySelector(".price").innerText.replace("$", "").replace(",", "");
        const image = card.querySelector("img").src;
        const detailsImage = card.getAttribute("data-details-image"); // Get the high-quality image

        // Extract additional attributes
        const mileage = card.getAttribute("data-mileage");
        const engine = card.getAttribute("data-engine");
        const horsepower = card.getAttribute("data-horsepower");
        const speed = card.getAttribute("data-speed");
        const fuelType = card.getAttribute("fuel-type");
        const transmission = card.getAttribute("transmission");
        const drivetrain = card.getAttribute("drivetrain");
        const color = card.getAttribute("color");
        const features = card.getAttribute("features");
        const year = card.getAttribute("data-year");
        const description = card.getAttribute("description");

        // Construct dynamic URL
        btn.href = `carDetails.html?name=${encodeURIComponent(name)}&model=${encodeURIComponent(model)}&year=${encodeURIComponent(year)}&price=${price}&image=${encodeURIComponent(image)}&detailsImage=${encodeURIComponent(detailsImage)}&mileage=${encodeURIComponent(mileage)}&engine=${encodeURIComponent(engine)}&horsepower=${encodeURIComponent(horsepower)}&speed=${encodeURIComponent(speed)}&transmission=${encodeURIComponent(transmission)}&fuelType=${encodeURIComponent(fuelType)}&drivetrain=${encodeURIComponent(drivetrain)}&color=${encodeURIComponent(color)}&features=${encodeURIComponent(features)}&description=${encodeURIComponent(description)}`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Store available models for each car make
    const carModels = {
        mercedes: ["A-Class", "C-Class", "G-Class", "E-Class", "S-Class"],
        bmw: ["2 Series", "3 Series", "5 Series", "8 Series", "X Series"],
        audi: ["A3", "A4", "A6", "Q3", "Q5"],
        tesla: ["Model S", "Model X", "Model Y", "Model 3"],
        ford: ["Fiesta", "Mustang", "F-150", "Explorer", "Edge"],
        porsche: ["911", "Cayenne", "Taycan", "Panamera"]
    };

    // Select elements
    const makeSelect = document.getElementById("make");
    const modelSelect = document.getElementById("model");

    // Disable model dropdown initially
    modelSelect.disabled = true;

    makeSelect.addEventListener("change", function () {
        const selectedMake = this.value;

        // Clear previous models
        modelSelect.innerHTML = '<option value="">All</option>';

        if (selectedMake) {
            // Enable the model dropdown
            modelSelect.disabled = false;

            // Populate models for the selected make
            carModels[selectedMake].forEach(model => {
                const option = document.createElement("option");
                option.value = model.toLowerCase().replace(/\s+/g, "-");
                option.textContent = model;
                modelSelect.appendChild(option);
            });
        } else {
            // Disable the model dropdown again if no make is selected
            modelSelect.disabled = true;
        }
    });
});