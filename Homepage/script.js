// script.js
document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const mainImage = this.closest('.product-image').querySelector('.main-image');
            const newImageSrc = this.getAttribute('data-main');
            mainImage.setAttribute('src', newImageSrc);
        });

        // Optional: Change image on hover instead of click
        thumbnail.addEventListener('mouseover', function () {
            const mainImage = this.closest('.product-image').querySelector('.main-image');
            const newImageSrc = this.getAttribute('data-main');
            mainImage.setAttribute('src', newImageSrc);
        });
    });
});