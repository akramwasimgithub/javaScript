const toggleButton = document.getElementById('toggleButton');
const statusText = document.getElementById('status');
const body = document.body;

toggleButton.addEventListener('change', function() {
    if (toggleButton.checked) {
        body.style.backgroundImage ="url('/Users/akramwasim/projects & learning/javaScript/Images/OpenEye.jpg')"; // Bright background
        statusText.textContent = '🐵';
    } else {
        console.log('Toggle Off - Setting dark background');
        body.style.backgroundImage = "url('/Users/akramwasim/projects & learning/javaScript/Images/CloseEye.png')"; // Dark background
        statusText.textContent = '🙈';
    }
});