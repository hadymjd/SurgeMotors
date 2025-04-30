document.addEventListener('DOMContentLoaded', () =>{
    

console.log("Query:", window.location.search);
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        name: params.get("name"),
        model: params.get("model"),
        year: params.get("year"),
        price: params.get("price"),
        image: params.get("image"),
        image1: decodeURIComponent(params.get("image1")),
        image2: decodeURIComponent(params.get("image2")),
        image3: decodeURIComponent(params.get("image3")),
        image4: decodeURIComponent(params.get("image4")),
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

// Get all car data from URL parameters
const carData = getQueryParams();

// ======================
// 1. POPULATE CAR DETAILS
// ======================
document.getElementById("image1").src = carData.image1;
document.getElementById("image2").src = carData.image2;
document.getElementById("image3").src = carData.image3;
document.getElementById("image4").src = carData.image4;
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

// console.log("Image:", image);
// console.log("Final href:", btn.href);

function saveCar() {
    // Example: fetch car data from page (you can adapt it based on your setup)
    const car = {
        id: Date.now(), // unique identifier
        title: document.querySelector('#carName').textContent,
        price: document.querySelector('#carPrice').textContent,
        image: document.querySelector('#image1').src,
        detailsLink: window.location.href // link to current car page
    };

    // Retrieve existing saved cars
    const savedCars = JSON.parse(localStorage.getItem('bookmarkedCars') || '[]');

    // Avoid duplicate saves (optional)
    if (!savedCars.some(c => c.detailsLink === car.detailsLink)) {
        savedCars.push(car);
        localStorage.setItem('bookmarkedCars', JSON.stringify(savedCars));
    }

    // Redirect to bookmark page
    window.location.href = '../html files/Bookmark.html';
}


document.getElementById('buyCarBtn').addEventListener('click', () => {
    const name = document.getElementById('carName').textContent;
    const price = document.getElementById('carPrice').textContent;
    const year = document.getElementById('carYear').textContent;
    const mileage = document.getElementById('carMileage').textContent;

    const url = new URL('../html files/checkout.html', window.location.origin);
    url.searchParams.set('name', name);
    url.searchParams.set('price', price);
    url.searchParams.set('year', year);
    url.searchParams.set('mileage', mileage);

    window.location.href = url.toString();
});

document.getElementById('rentCarBtn').addEventListener('click', () => {
    const name = document.getElementById('carName').textContent;

    // Remove $ and commas before converting price
    const rawPrice = document.getElementById('carPrice').textContent;
    const cleanedPrice = rawPrice.replace(/[$,]/g, '');

    const year = document.getElementById('carYear').textContent;

    const url = new URL('../html files/rent-car.html', window.location.origin);
    url.searchParams.set('carName', name);
    url.searchParams.set('carPrice', cleanedPrice); // Match expected param name
    url.searchParams.set('carYear', year);

    window.location.href = url.toString();
});




document.getElementById('bookTestDriveBtn').addEventListener('click', () => {
    const name = document.getElementById('carName').textContent;
    const year = document.getElementById('carYear').textContent;

    const url = new URL('../html files/book-test-drive.html', window.location.origin);
    url.searchParams.set('name', name);
    url.searchParams.set('year', year);

    window.location.href = url.toString();
});

document.getElementById('saveCarBtn').addEventListener('click', () => {
    const title = document.querySelector('#carName').textContent;
    const price = document.querySelector('#carPrice').textContent;
    const image = document.querySelector('#image1').src;
    const detailsLink = window.location.href;

    // Get existing bookmarks
    const savedCars = JSON.parse(localStorage.getItem('bookmarkedCars') || '[]');

    // Check if already bookmarked (optional, to prevent duplicates)
    const alreadySaved = savedCars.some(car => car.detailsLink === detailsLink);
    if (!alreadySaved) {
        savedCars.push({ title, price, image, detailsLink });
        localStorage.setItem('bookmarkedCars', JSON.stringify(savedCars));
    }

    // Now navigate to Bookmark.html
    window.location.href = '../html files/Bookmark.html';
});




})

