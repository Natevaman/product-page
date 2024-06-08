document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.querySelector('.cart-items');
    const totalAmount = document.querySelector('.total-amount');
    const clearCartButton = document.querySelector('.clear-cart');

    let cartTotal = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h3').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.slice(1));
            cartTotal += productPrice;

            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
            cartItemsList.appendChild(cartItem);

            totalAmount.textContent = `$${cartTotal.toFixed(2)}`;
        });
    });

    clearCartButton.addEventListener('click', () => {
        cartItemsList.innerHTML = '';
        cartTotal = 0;
        totalAmount.textContent = '$0.00';
    });
});