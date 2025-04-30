// Show dynamic price value next to slider
document.addEventListener("DOMContentLoaded", function () {


    const priceInput = document.getElementById("price");
    const priceValue = document.getElementById("price-value");

    function updatePriceDisplay() {
        priceValue.textContent = `${parseInt(priceInput.value).toLocaleString()} USD`;
    }

    priceInput.addEventListener("input", updatePriceDisplay);
    updatePriceDisplay();
});

// Search bar functionality
function searchCars() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const cars = document.querySelectorAll(".car-card");

    cars.forEach(car => {
        const carText = car.innerText.toLowerCase();
        car.style.display = carText.includes(query) ? "block" : "none";
    });
}

// Add car detail URLs to "View Details" buttons
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".car-card").forEach(card => {
        const btn = card.querySelector(".btn");
        const name = card.querySelector("h3").innerText;
        const model = card.querySelector("p:nth-of-type(1)").innerText;
        const price = card.querySelector(".price").innerText.replace("$", "").replace(",", "");
        const image = card.querySelector("img").src;

        const image1 = card.getAttribute("data-details-image1");
        const image2 = card.getAttribute("data-details-image2");
        const image3 = card.getAttribute("data-details-image3");
        const image4 = card.getAttribute("data-details-image4");

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

        btn.href = `carDetails.html?name=${encodeURIComponent(name)}&model=${encodeURIComponent(model)}&year=${encodeURIComponent(year)}&price=${price}&image=${encodeURIComponent(image)}&image1=${encodeURIComponent(image1)}&image2=${encodeURIComponent(image2)}&image3=${encodeURIComponent(image3)}&image4=${encodeURIComponent(image4)}&mileage=${encodeURIComponent(mileage)}&engine=${encodeURIComponent(engine)}&horsepower=${encodeURIComponent(horsepower)}&speed=${encodeURIComponent(speed)}&transmission=${encodeURIComponent(transmission)}&fuelType=${encodeURIComponent(fuelType)}&drivetrain=${encodeURIComponent(drivetrain)}&color=${encodeURIComponent(color)}&features=${encodeURIComponent(features)}&description=${encodeURIComponent(description)}`;
    });
});

// Populate model dropdown dynamically based on selected make
document.addEventListener("DOMContentLoaded", function () {
    const carModels = {
        mercedes: ["A-Class", "C-Class", "G-Class", "E-Class", "S-Class"],
        bmw: ["2 Series", "3 Series", "5 Series", "8 Series", "X Series"],
        audi: ["A3", "A4", "A6", "Q3", "Q5"],
        tesla: ["Model S", "Model X", "Model Y", "Model 3"],
        ford: ["Fiesta", "Mustang", "F-150", "Explorer", "Edge"],
        porsche: ["911", "Cayenne", "Taycan", "Panamera"]
    };

    const makeSelect = document.getElementById("make");
    const modelSelect = document.getElementById("model");

    modelSelect.disabled = true;

    makeSelect.addEventListener("change", function () {
        const selectedMake = this.value;
        modelSelect.innerHTML = '<option value="">All</option>';

        if (selectedMake && carModels[selectedMake]) {
            modelSelect.disabled = false;
            carModels[selectedMake].forEach(model => {
                const option = document.createElement("option");
                option.value = model.toLowerCase().replace(/\s+/g, "-");
                option.textContent = model;
                modelSelect.appendChild(option);
            });
        } else {
            modelSelect.disabled = true;
        }

        applyFilters(); // Re-apply filters when make changes
    });
});

// Utility function to get query string parameters
function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Filter cars based on search bar
function filterCars(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    const cars = document.querySelectorAll(".car-card");

    cars.forEach(car => {
        const carName = car.querySelector("h3").innerText.toLowerCase();
        car.style.display = carName.includes(searchTerm) ? "block" : "none";
    });
}

// Initialize search bar with URL parameter if exists
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchBar");
    const searchQuery = getQueryParam("search");

    if (searchQuery) {
        searchInput.value = searchQuery;
        filterCars(searchQuery);
    }

    searchInput.addEventListener("input", () => {
        filterCars(searchInput.value);
    });
});

// Core filtering function
function applyFilters() {
    const selectedBrand = document.getElementById("make").value.toLowerCase();
    const selectedModel = document.getElementById("model").value.toLowerCase();
    const selectedYear = document.getElementById("year").value;
    const selectedFuel = document.getElementById("fuel").value.toLowerCase();
    const maxMileage = parseInt(document.getElementById("mileage").value || "999999");
    const maxPrice = parseInt(document.getElementById("price").value || "999999");

    const carCards = document.querySelectorAll(".car-card");

    carCards.forEach(car => {
        const brand = car.dataset.brand?.toLowerCase() || "";
        const model = car.dataset.model?.toLowerCase() || "";
        const year = car.dataset.year || "";
        const fuel = car.dataset.fuel?.toLowerCase() || "";
        const mileage = parseInt(car.dataset.mileage || "0");
        const priceText = car.querySelector(".price")?.textContent?.replace(/[^\d]/g, "") || "0";
        const price = parseInt(priceText);

        let show = true;

        if (selectedBrand && brand !== selectedBrand) show = false;
        if (selectedModel && model !== selectedModel) show = false;
        if (selectedYear && year !== selectedYear) show = false;
        if (selectedFuel && fuel !== selectedFuel) show = false;
        if (mileage > maxMileage) show = false;
        if (price > maxPrice) show = false;

        car.style.display = show ? "block" : "none";
    });
}

// 🔥 Dynamic filtering: listen to all filters automatically
document.addEventListener("DOMContentLoaded", () => {
    const filterElements = [
        document.getElementById("make"),
        document.getElementById("model"),
        document.getElementById("year"),
        document.getElementById("price"),
        document.getElementById("fuel"),
        document.getElementById("mileage")
    ];

    filterElements.forEach(el => {
        if (el) {
            const eventType = el.tagName === "INPUT" ? "input" : "change";
            el.addEventListener(eventType, applyFilters);
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const makeParam = urlParams.get('make');

    if (makeParam) {
        const makeSelect = document.getElementById('make');
        const modelSelect = document.getElementById('model');

        // Set make dropdown
        makeSelect.value = makeParam.toLowerCase();

        // Trigger model population
        const changeEvent = new Event('change');
        makeSelect.dispatchEvent(changeEvent);

        // Wait briefly then apply filters
        setTimeout(() => {
            applyFilters();
        }, 100);
    }
});