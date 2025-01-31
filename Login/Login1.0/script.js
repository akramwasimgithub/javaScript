const loginButton = document.querySelector('button');
const agreeCheckbox = document.getElementById('agreeCheckbox');
const waterFill = document.querySelector('.water-fill');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginContainer = document.querySelector('.login-container');
const loginForm = document.getElementById('loginForm');

// Function to update water fill height
function updateWaterFill() {
  const isUsernameFilled = usernameInput.value.trim() !== '';
  const isPasswordFilled = passwordInput.value.trim() !== '';
  const isCheckboxChecked = agreeCheckbox.checked;

  // Count how many fields are filled/checked
  const filledCount = [isUsernameFilled, isPasswordFilled, isCheckboxChecked].filter(Boolean).length;

  // Update water fill height based on the count
  if (filledCount === 3) {
    waterFill.style.height = '90%'; // All three fields are filled/checked
  } else if (filledCount === 2) {
    waterFill.style.height = '60%'; // Any two fields are filled/checked
  } else if (filledCount === 1) {
    waterFill.style.height = '30%'; // Any one field is filled/checked
  } else {
    waterFill.style.height = '0%'; // No fields are filled/checked
  }
}

// Add event listeners to all fields
usernameInput.addEventListener('input', updateWaterFill);
passwordInput.addEventListener('input', updateWaterFill);
agreeCheckbox.addEventListener('change', updateWaterFill);

// Enable/disable login button based on checkbox
agreeCheckbox.addEventListener('change', function () {
  loginButton.disabled = !this.checked;
});

// Form submission with animations
loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent actual form submission

  // Open the bottle cap
  loginContainer.style.setProperty('--cap-rotation', '-45deg');

  // Burst and fall animation for form elements
  const formElements = document.querySelectorAll('.login-container > *');
  formElements.forEach((element) => {
    // Random burst values
    const burstX = `${Math.random() * 200 - 100}px`; // Random horizontal burst
    const burstY = `${Math.random() * 200 - 100}px`; // Random vertical burst
    const burstRotate = `${Math.random() * 360}deg`; // Random rotation

    // Random fall values
    const fallX = `${Math.random() * window.innerWidth - window.innerWidth / 2}px`; // Random horizontal fall
    const fallY = `${Math.random() * window.innerHeight + window.innerHeight / 2}px`; // Random vertical fall
    const fallRotate = `${Math.random() * 360}deg`; // Random rotation

    // Apply burst animation
    element.style.setProperty('--burst-x', burstX);
    element.style.setProperty('--burst-y', burstY);
    element.style.setProperty('--burst-rotate', burstRotate);
    element.style.animation = 'burst 0.5s forwards';

    // Apply fall animation after burst
    setTimeout(() => {
      element.style.position = 'absolute';
      element.style.setProperty('--fall-x', fallX);
      element.style.setProperty('--fall-y', fallY);
      element.style.setProperty('--fall-rotate', fallRotate);
      element.style.animation = 'fall 1s forwards';
    }, 500); // Delay for burst animation to complete
  });
});