document.addEventListener('DOMContentLoaded', function() {
    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            let currentCount = parseInt(cartCount.textContent);
            cartCount.textContent = currentCount + 1;
            
            // Add animation feedback
            this.classList.add('added');
            setTimeout(() => {
                this.classList.remove('added');
            }, 1000);
        });
    });

    // Sorting functionality
    const sortSelect = document.getElementById('sortBy');
    sortSelect.addEventListener('change', function() {
        const products = Array.from(document.querySelectorAll('.product-card'));
        const sorted = products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.price').textContent.replace('₹', ''));
            const priceB = parseFloat(b.querySelector('.price').textContent.replace('₹', ''));
            
            return this.value === 'price-asc' ? priceA - priceB : priceB - priceA;
        });

        const grid = document.querySelector('.shop-grid');
        grid.innerHTML = '';
        sorted.forEach(product => grid.appendChild(product));
    });
});