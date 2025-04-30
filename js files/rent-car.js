document.addEventListener('DOMContentLoaded', () => {
    // Extract car price from URL

    
    const urlParams = new URLSearchParams(window.location.search);
    const carName = urlParams.get('carName');
    const carYear = urlParams.get('carYear');

    document.getElementById('car-name').textContent = carName;
    document.getElementById('car-year').textContent = carYear;
    const carPrice = parseFloat(urlParams.get('carPrice')) || 0;

    const dailyRatePercent = 0.025; // 2.5%
    const dailyPrice = carPrice * dailyRatePercent;

    // Elements
    const dailyPriceSpan = document.getElementById('daily-price');
    const rentalCostSpan = document.getElementById('rental-cost');
    const rentalDaysInput = document.getElementById('rental-days');

    // Display daily price on load
    dailyPriceSpan.textContent = dailyPrice.toFixed(2);

    // Update total cost when user changes number of days
    rentalDaysInput.addEventListener('input', () => {
        const days = parseInt(rentalDaysInput.value) || 0;
        const totalCost = dailyPrice * days;
        rentalCostSpan.textContent = totalCost.toFixed(2);
    });
});



