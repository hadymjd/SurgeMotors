window.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const price = urlParams.get('price');
    const year = urlParams.get('year');
    const mileage = urlParams.get('mileage');

    document.getElementById('car-name').textContent = name || 'N/A';
    document.getElementById('car-price').textContent = price || 'N/A';
    document.getElementById('car-year').textContent = year || 'N/A';
    document.getElementById('car-mileage').textContent = mileage || 'N/A';

    // Also update the total cost display
    document.getElementById('total-cost').textContent = price || 'N/A';
});



