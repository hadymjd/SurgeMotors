document.addEventListener('DOMContentLoaded', function () {

});


// JavaScript for Review Functionality
const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');
const stars = document.querySelectorAll('.star-rating .star');

let selectedRating = 0;

// Star Rating Functionality
stars.forEach((star) => {
  star.addEventListener('click', () => {
    selectedRating = star.getAttribute('data-value');
    stars.forEach((s) => s.classList.remove('active'));
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add('active');
    }
  });
});

// Submit Review Form
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('reviewName').value;
  const text = document.getElementById('reviewText').value;

  if (!name || !text || selectedRating === 0) {
    alert('Please fill out all fields and select a rating.');
    return;
  }

  // Create new review card
  const reviewCard = document.createElement('div');
  reviewCard.classList.add('review-card');

  reviewCard.innerHTML = `
    <div class="review-header">
      <div class="review-avatar"></div>
      <div class="review-info">
        <h3>${name}</h3>
        <div class="stars">${'★'.repeat(selectedRating)}${'☆'.repeat(5 - selectedRating)}</div>
      </div>
    </div>
    <p class="review-text">${text}</p>
  `;

  // Add new review to the container
  reviewsContainer.prepend(reviewCard);

  // Reset form
  reviewForm.reset();
  stars.forEach((s) => s.classList.remove('active'));
  selectedRating = 0;
});


function toggleMenu() {
  document.querySelector('.mobile-menu').classList.toggle('active');
}


const ratingInput = document.getElementById('reviewRating');

stars.forEach(star => {
  star.addEventListener('click', () => {
    ratingInput.value = star.dataset.value;
  });
});

