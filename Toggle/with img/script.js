const toggleButton = document.getElementById('toggleButton');
const statusText = document.getElementById('status');
const body = document.body;

toggleButton.addEventListener('change', function() {
    if (toggleButton.checked) {
        console.log('Toggle On - Setting bright background');
        body.style.backgroundImage ="url('/Users/akramwasim/projects & learning/javaScript/Images/OpenEye.png')"; // Bright background
        statusText.textContent = 'Status: On';
    } else {
        console.log('Toggle Off - Setting dark background');
        body.style.backgroundImage = "url('/Users/akramwasim/projects & learning/javaScript/Images/CloseEye.png')"; // Dark background
        statusText.textContent = 'Status: Off';
    }
});