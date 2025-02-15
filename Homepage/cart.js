// Cart Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sample cart data (replace with actual data from your system)
    const cartItems = [
        {
            id: 1,
            name: "Elegant Evening Handbag",
            price: 150.00,
            image: "images/black.png",
            quantity: 1
        },
        {
            id: 2,
            name: "Casual Chic Handbag",
            price: 120.00,
            image: "images/Green.png",
            quantity: 1
        }
    ];

    const cartContainer = document.querySelector('.cart-items');
    
    // Render cart items
    function renderCartItems() {
        cartContainer.innerHTML = '';
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p class="price">₹${item.price.toFixed(2)}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn minus">-</button>
                        <input type="number" value="${item.quantity}" min="1" class="quantity-input">
                        <button class="quantity-btn plus">+</button>
                    </div>
                </div>
                <button class="remove-btn">×</button>
            `;
            cartContainer.appendChild(cartItem);
        });
        
        addEventListeners();
        updateCartTotals();
        updateCartCount();
    }

    // Add event listeners to dynamic elements
    function addEventListeners() {
        // Quantity controls
        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', function() {
                const input = this.parentNode.querySelector('.quantity-input');
                let value = parseInt(input.value);
                const index = Array.from(this.closest('.cart-item').parentNode.children).indexOf(this.closest('.cart-item'));
                
                if (this.classList.contains('minus') && value > 1) {
                    value--;
                    cartItems[index].quantity = value;
                } else if (this.classList.contains('plus')) {
                    value++;
                    cartItems[index].quantity = value;
                }
                
                input.value = value;
                updateCartTotals();
            });
        });

        // Remove items
        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = Array.from(this.closest('.cart-item').parentNode.children).indexOf(this.closest('.cart-item'));
                cartItems.splice(index, 1);
                renderCartItems();
            });
        });
    }

    // Update totals
    function updateCartTotals() {
        let subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = 50;
        const total = subtotal + shipping;
        
        document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
        document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
    }

    // Update cart count in header
    function updateCartCount() {
        const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cart-count').textContent = count;
    }

    // Initial render
    renderCartItems();
});
// Updated sample cart data
const cartItems = [
    {
        id: 1,
        name: "Elegant Evening Handbag",
        price: 150.00,
        image: "images/black.png",
        color: "#000000",
        size: "Medium",
        material: "Genuine Leather",
        sku: "LP-2024-BLK",
        quantity: 1
    },
    {
        id: 2,
        name: "Casual Chic Handbag",
        price: 120.00,
        image: "images/Green.png",
        color: "#228B22",
        size: "Large",
        material: "Vegan Leather",
        sku: "LP-2024-GRN",
        quantity: 1
    }
];

// Updated render function
function renderCartItems() {
    cartContainer.innerHTML = '';
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <div class="product-meta">
                    <span>
                        <i>Color:</i> 
                        <span class="color-indicator" style="background: ${item.color}"></span>
                    </span>
                    <span>
                        <i>Size:</i> 
                        <span class="size-indicator">${item.size[0]}</span>
                        ${item.size}
                    </span>
                    <span><i>Material:</i> ${item.material}</span>
                    <span><i>SKU:</i> ${item.sku}</span>
                </div>
                <p class="price">₹${item.price.toFixed(2)}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn minus">-</button>
                    <input type="number" value="${item.quantity}" min="1" class="quantity-input">
                    <button class="quantity-btn plus">+</button>
                </div>
            </div>
            <button class="remove-btn">×</button>
        `;
        cartContainer.appendChild(cartItem);
    });
    
    addEventListeners();
    updateCartTotals();
    updateCartCount();
}