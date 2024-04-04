function signIn() {
    // Get the values of username and password
    const username = document.getElementById("signInUsername").value;
    const password = document.getElementById("signInPassword").value;

    // Check if username and password fields are not empty
    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return; 
    }
    
    // Proceed with sign-in process
    const storedUser = localStorage.getItem(username);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            alert("Sign in successful!");
            window.location.href = "./resume.html"; // Redirect to welcome page
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("User does not exist. Please register.");
    }
}


function register() {
    const usernameInput = document.getElementById("registerUsername");
    const passwordInput = document.getElementById("registerPassword");

    const username = usernameInput.value.trim(); // Trim removes leading and trailing whitespace
    const password = passwordInput.value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
    } else {
        const storedUser = localStorage.getItem(username);
        if (storedUser) {
            alert("Username already exists. Please choose a different username.");
        } else {
            const newUser = { username: username, password: password };
            localStorage.setItem(username, JSON.stringify(newUser));
            alert("Registration successful! You can now sign in.");
        }
    }
}

 // Function to show modal
 function showModal(id) {
    document.getElementById(id).style.display = "block";
}

// Function to close modal
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

