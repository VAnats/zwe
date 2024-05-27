// login.js

// Load data from loginData.json
fetch('loginData.json')
  .then(response => response.json())
  .then(data => {
    const users = data.users;
    
    // Event listener for form submission
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Check if username and password match any entry in the users array
        const user = users.find(user => user.username === username && user.password === password);
        
        if (user) {
    document.getElementById("loginMessage").innerText = "Login successful!";
    // Redirect to dashboard page
    window.location.href = "main.html";
} else {
    document.getElementById("loginMessage").innerText = "Invalid username or password.";
}

    });
  })
  .catch(error => {
    console.error('Error loading login data:', error);
  });

