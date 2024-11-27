// Get buttons and containers
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const container = document.querySelector(".container");

// Add event listeners for button clicks
signupBtn.addEventListener("click", () => {
  container.classList.add("signup-mode");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("signup-mode");
});
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const validEmail = "santhosh@gmail.com"; // Replace with your email
  const validPassword = "sandy@143"; // Replace with your password

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === validEmail && password === validPassword) {
    alert('Login successful!');
    window.location.href = "login1.html"; // Redirect to dashboard or homepage
  } else {
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = "block";
    errorMessage.textContent = "Invalid email or password";
  }
});
