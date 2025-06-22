document.addEventListener('DOMContentLoaded', function() {
    // Get the div element by its id
    const myDiv = document.getElementById('myDiv');

    // Check if myDiv is null (not found)
    if (myDiv) {
        // Add a click event listener to the div
        myDiv.addEventListener('click', function() {
            // Redirect to another HTML file in the same directory
            window.location.href = './banana.html'; // Relative path to the other HTML file
        });
    } else {
        console.error('Element with id "myDiv" not found.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const myDiv = document.getElementById('gohomeDiv');

    if (myDiv) {
        myDiv.addEventListener('click', function() {
            window.location.href = './testing.html';
        });
    } else {
        console.error('Element with id "gohomeDiv" not found.');
    }
});

// load-navbar.js
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;
    
    // Update 'active' class based on current page
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.topnav a').forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  });


