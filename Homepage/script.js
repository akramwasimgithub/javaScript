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
    thumbnail.addEventListener('mouseover', function () {
        const mainImage = this.closest('.product-image').querySelector('.main-image');
        const newImageSrc = this.getAttribute('data-main');
        mainImage.setAttribute('src', newImageSrc);
    });

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
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    });

    // Dot Navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Auto Slide (Optional)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }, 5000); // Change slide every 5 seconds
});