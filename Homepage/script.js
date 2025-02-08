// script.js
document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const mainImage = this.closest('.product-image').querySelector('.main-image');
            const newImageSrc = this.getAttribute('data-main');
            mainImage.setAttribute('/Users/akramwasim/projects & learning/javaScript/Homepage/images/black.png', newImageSrc);
        });

        // Optional: Change image on hover instead of click
        thumbnail.addEventListener('mouseover', function () {
            const mainImage = this.closest('.product-image').querySelector('.main-image');
            const newImageSrc = this.getAttribute('data-main');
            mainImage.setAttribute('src', newImageSrc);
        });
    });
});
window.addEventListener('scroll', function () {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;
    let autoSlideInterval;
    
    // Update Carousel Position
    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Next Slide
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    });

    // Previous Slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    // Auto Slide (Optional)
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }
    // Stop auto-slide on interaction
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners
    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            currentIndex = index;
            updateCarousel();
            startAutoSlide();
        });
    });

    // Initialize auto-slide
    startAutoSlide();
});