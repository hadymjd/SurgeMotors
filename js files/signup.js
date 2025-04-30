$.ajax({
    type: 'POST',
    url: '../php files/signup.php', // or signup.php
    data: $('#signUpForm').serialize(), // or $('#signUpForm').serialize()
    success: function (response) {
        $('#responseMessage').html('<p>' + response + '</p>');

        if (response.includes("success")) { // Or however your PHP success looks
            // Optionally store username in localStorage
            const username = $('#username').val(); // Adjust if your input has a different name/id
            localStorage.setItem('username', username);

            // Redirect after short delay (optional)
            setTimeout(() => {
                window.location.href = '../html files/home.html';
            }, 1000);
        }
    },
    error: function () {
        $('#responseMessage').html('<p style="color:red;">Something went wrong. Try again.</p>');
    }
});
