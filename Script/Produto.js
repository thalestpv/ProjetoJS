let total = 0;
let itemCount = 0;

function addToCart(productName, productPrice) {
    const cartItems = document.getElementById('cartItems');
    const item = document.createElement('li');
    item.textContent = `${productName} - R$${productPrice}`;
    cartItems.appendChild(item);
    const productPriceRegex = productPrice.replace(',', '')
    total += parseFloat(productPriceRegex).toFixed(3);
    document.getElementById('totalPrice').textContent = `Total: R$${total.toString().replace(/(\d)(\d{2})$/, "$1,$2")}`;

    // Incrementa a contagem de itens e exibe no ícone do carrinho
    itemCount++;
    document.getElementById('cartCount').textContent = itemCount;
}

function openCart() {
    document.getElementById('cart').style.display = 'block';
}

function closeCart() {
    document.getElementById('cart').style.display = 'none';
}