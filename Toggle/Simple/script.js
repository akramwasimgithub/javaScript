// Get references to the button and status paragraph
const toggleButton = document.getElementById('toggleButton');
const statusText = document.getElementById('status');

// Initialize the state
let isOn = false;

// Add an event listener to the button
toggleButton.addEventListener('click', function() {
    // Toggle the state
    isOn = !isOn;

    // Update the button text and status text
    if (isOn) {
        toggleButton.textContent = 'Turn Off';
        statusText.textContent = 'Status: On';
    } else {
        toggleButton.textContent = 'Turn On';
        statusText.textContent = 'Status: Off';
    }
});