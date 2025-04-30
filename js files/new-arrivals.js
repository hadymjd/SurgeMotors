

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