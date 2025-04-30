window.onload = function () {
    const username = localStorage.getItem('username');
    
    if (username) {
      // User is signed in → go to home.html
      window.location.href = '../html files/home.html';
    } else {
      // User not signed in → go to signup.html
      window.location.href = '../html files/signup.html';
    }
  };