document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('userName').innerText = `Welcome, ${username}`;
    }
    const slider = document.querySelector(".car-slider");
    const prevBtns = document.querySelectorAll(".prev-btn, .extra-prev-btn");
    const nextBtns = document.querySelectorAll(".next-btn, .extra-next-btn");

    let scrollAmount = 0;
    const scrollStep = 320; // Adjust based on car card width
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    function scrollRight() {
        if (scrollAmount < maxScroll) {
            scrollAmount += scrollStep;
            slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
    }

    function scrollLeft() {
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
    }

    nextBtns.forEach(btn => btn.addEventListener("click", scrollRight));
    prevBtns.forEach(btn => btn.addEventListener("click", scrollLeft));
});
const videos = ["../videos/video1.mp4", "../videos/video2.mp4", "../videos/video3.mp4"];
let index = 0;
const videoPlayer = document.getElementById("videoPlayer");
const muteButton = document.getElementById("muteButton");

// Function to change video
function changeVideo() {
    videoPlayer.classList.remove("active");
    setTimeout(() => {
        videoPlayer.src = videos[index]; // Change video
        videoPlayer.classList.add("active");
    }, 1500); // Sync with fade transition
}

// Auto change every 17 seconds
setInterval(() => {
    index = (index + 1) % videos.length;
    changeVideo();
}, 9500);

// Manual Navigation
function nextVideo() {
    index = (index + 1) % videos.length;
    changeVideo();
}

function prevVideo() {
    index = (index - 1 + videos.length) % videos.length;
    changeVideo();
}

// Toggle Mute/Unmute
function toggleMute() {
    videoPlayer.muted = !videoPlayer.muted;
    muteButton.textContent = videoPlayer.muted ? "🔇" : "🔊";
}

// Initialize first video
videoPlayer.src = videos[index];
videoPlayer.classList.add("active");


// JavaScript for Modal Functionality
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

// Function to open the modal
function openModal(car) {
    let image, title, description;

    switch (car) {
        case 'tesla':
            image = 'https://images6.alphacoders.com/115/1154171.jpg';
            title = '2023 Tesla Model S';
            description = 'The Tesla Model S is a luxury electric sedan with cutting-edge technology, offering unparalleled performance and efficiency.';
            break;
        case 'porsche':
            image = 'https://www.stuttcars.com/wp-content/uploads/2022/05/img_37-scaled.jpeg';
            title = '2023 Porsche 911';
            description = 'The Porsche 911 is an iconic sports car known for its unmatched performance, precision engineering, and timeless design.';
            break;
        case 'mustang':
            image = 'https://hips.hearstapps.com/hmg-prod/images/4e9a7794-1663012415.jpg';
            title = '2023 Ford Mustang';
            description = 'The Ford Mustang is a classic American muscle car with modern upgrades, delivering power and style in one package.';
            break;
        case 'bmw':
            image = 'https://tse3.mm.bing.net/th?id=OIP.wrOVFzMen08UPZ_YgiKAwQHaEK&pid=Api&P=0&h=220';
            title = '2023 BMW X5';
            description = 'The BMW X5 is a luxury SUV that combines premium features, comfort, and performance for an exceptional driving experience.';
            break;
        default:
            image = '';
            title = '';
            description = '';
    }

    modalImage.src = image;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
};

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get("name"),
        model: params.get("model"),
        year: params.get("year"),
        price: params.get("price"),
        image: params.get("image"),
        detailsImage: params.get("detailsImage"), // New parameter for high-quality image
        mileage: params.get("mileage"),
        engine: params.get("engine"),
        horsepower: params.get("horsepower"),
        speed: params.get("speed"),
        transmission: params.get("transmission"),
        fuelType: params.get("fuelType"),
        drivetrain: params.get("drivetrain"),
        color: params.get("color"),
        features: params.get("features"),
        description: params.get("description"),
    };
}

// Populate car details
const carData = getQueryParams();
document.getElementById("carImage").src = carData.detailsImage || carData.image; // Use high-quality image if available
document.getElementById("carName").innerText = `${carData.name} ${carData.model}`;
document.getElementById("carPrice").innerText = `$${parseInt(carData.price).toLocaleString()}`;
document.getElementById("carYear").innerText = carData.year;
document.getElementById("carMileage").innerText = carData.mileage;
document.getElementById("carEngine").innerText = carData.engine;
document.getElementById("carHorsepower").innerText = carData.horsepower;
document.getElementById("carSpeed").innerText = carData.speed;
document.getElementById("carTransmission").innerText = carData.transmission;
document.getElementById("carFuelType").innerText = carData.fuelType;
document.getElementById("carDrivetrain").innerText = carData.drivetrain;
document.getElementById("carColor").innerText = carData.color;

// Populate features as a list
const featuresList = document.getElementById("carFeaturesList");
if (carData.features) {
    const features = carData.features.split(",");
    features.forEach(feature => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fas fa-check icon"></i> ${feature.trim()}`;
        featuresList.appendChild(li);
    });
}

// Populate description
const description = document.getElementById("carDescription");
if (carData.description) {
    description.innerText = carData.description;
}







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


function toggleMenu() {
    document.querySelector('.mobile-menu').classList.toggle('active');
}