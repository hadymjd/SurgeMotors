document.addEventListener('DOMContentLoaded', function () {
    const carList = document.getElementById('carList');
    const emptyState = document.getElementById('emptyState');
    const savedCars = JSON.parse(localStorage.getItem('bookmarkedCars') || '[]');
  
    if (savedCars.length === 0) {
      emptyState.style.display = 'block';
    } else {
      savedCars.forEach(car => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.style.cursor = 'pointer';
        card.onclick = () => window.location.href = car.detailsLink;
  
        card.innerHTML = `
          <img src="${car.image}" alt="${car.title}">
          <h3>${car.title}</h3>
          <p><strong>${car.price}</strong></p>
        `;
  
        carList.appendChild(card);
      });
    }
  });
  