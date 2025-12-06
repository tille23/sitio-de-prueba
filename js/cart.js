// Lógica del Carrito de Compras

// Función para añadir un producto al carrito
function addToCart(productId) {
    // Primero verificamos si el usuario está autenticado
    if (!auth.isLoggedIn()) {
        auth.checkAuth();
        return;
    }

    // Obtenemos el carrito actual del localStorage o iniciamos uno vacío
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Verificamos si la lista de productos está disponible
    if (typeof products === 'undefined' || products.length === 0) {
        generateProducts(); // Generamos los datos si no existen
    }

    // Buscamos el producto específico por su ID
    const product = products.find(p => p.id === productId);

    if (product) {
        // Verificamos si el producto ya está en el carrito
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            // Si ya existe, solo aumentamos la cantidad
            existingItem.quantity += 1;
        } else {
            // Si no existe, lo añadimos con cantidad inicial de 1
            cart.push({ ...product, quantity: 1 });
        }

        // Guardamos el carrito actualizado en localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount(); // Actualizamos el contador visual
        alert('Producto añadido al carrito');
    }
}

// Función para actualizar el contador de items en el icono del carrito
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Sumamos la cantidad de todos los items
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = count;
    }
}

// Función auxiliar para obtener el carrito
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Función para eliminar un producto completamente del carrito
function removeFromCart(productId) {
    let cart = getCart();
    // Filtramos para mantener todos los items MENOS el que queremos borrar
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(); // Refrescamos la vista del carrito
    updateCartCount();
}

// Función para actualizar la cantidad de un producto (+1 o -1)
function updateQuantity(productId, change) {
    let cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        // Si la cantidad llega a 0 o menos, eliminamos el producto
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
    }
}

// Función para vaciar todo el carrito (ej. después de comprar)
function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
    renderCart();
}

// Inicializamos el contador al cargar la página
document.addEventListener('DOMContentLoaded', updateCartCount);
