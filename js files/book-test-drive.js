document.addEventListener('DOMContentLoaded', function() {
    // Handle URL parameters for car details
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const year = urlParams.get('year');

    if (name) {
        document.getElementById('car-name').textContent = name;
        document.getElementById('car_model').value = year ? `${name} ${year}` : name;
    }
    if (year) {
        document.getElementById('car-year').textContent = year;
    }

    // Form submission handler
    const testDriveForm = document.getElementById('testDriveForm');
    if (testDriveForm) {
        testDriveForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const responseMessage = document.getElementById('responseMessage');
            
            // Show loading state
            const submitBtn = this.querySelector('[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.value = 'Processing...';

            fetch(this.action, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                // Split the response into status and message
                const separatorIndex = data.indexOf(':');
                const status = data.substring(0, separatorIndex);
                const message = data.substring(separatorIndex + 1);
                
                // Show alert with the message
                alert(message);
                
                // Display message in the response div
                responseMessage.textContent = message;
                responseMessage.className = status;
                responseMessage.style.display = 'block';
                
                // Reset form on success
                if (status === 'success') {
                    this.reset();
                    // Optionally redirect after 3 seconds
                    // setTimeout(() => window.location.href = 'thank-you.html', 3000);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
                responseMessage.textContent = 'An error occurred. Please try again.';
                responseMessage.className = 'error';
                responseMessage.style.display = 'block';
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.value = 'Book Test Drive';
            });
        });
    }
});

// Mobile menu toggle function
function toggleMenu() {
    document.querySelector('.mobile-menu').classList.toggle('active');
}