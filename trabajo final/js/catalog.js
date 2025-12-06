// Categorías de Productos y Generación de Datos
// Definimos las categorías disponibles en la tienda
const categories = [
    { id: 'frutas', name: 'Frutas Orgánicas' },
    { id: 'verduras', name: 'Verduras y Hortalizas' },
    { id: 'belleza', name: 'Belleza Natural' },
    { id: 'cocina', name: 'Cocina y Despensa' },
    { id: 'suplementos', name: 'Suplementos' },
    { id: 'tecnologia', name: 'Tecnología Eco' },
    { id: 'ropa', name: 'Ropa Sostenible' },
    { id: 'hogar', name: 'Hogar y Jardín' }
];

// Array principal donde se almacenarán todos los productos generados
const products = [];

// Datos específicos de productos por categoría
// Se han seleccionado imágenes específicas de Unsplash para asegurar calidad y relevancia
const productData = {
    'frutas': [
        { name: 'Manzana Royal Gala', img: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=300&q=80' },
        { name: 'Naranja de Jugo', img: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=300&q=80' },
        { name: 'Fresa Fresca', img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=300&q=80' },
        { name: 'Piña Golden', img: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=300&q=80' },
        { name: 'Mango Edward', img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=300&q=80' },
        { name: 'Sandía Personal', img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=300&q=80' },
        { name: 'Arándano Azul', img: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=300&q=80' },
    ],
    'verduras': [
        { name: 'Zanahoria', img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=300&q=80' },
        { name: 'Lechuga Orgánica', img: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=300&q=80' },
        { name: 'Tomate Rojo', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=300&q=80' },
        { name: 'Pepino', img: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=300&q=80' },
        { name: 'Brócoli', img: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=300&q=80' },
        { name: 'Coliflor', img: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=300&q=80' },
        { name: 'Espinaca', img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=300&q=80' },
        { name: 'Cebolla Roja', img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=300&q=80' },
        { name: 'Papa Amarilla', img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=300&q=80' },
        { name: 'Berenjena', img: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=300&q=80' },
        { name: 'Espárrago', img: 'https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&w=300&q=80' }
    ],
    'cocina': [
        { name: 'Cuchillo de Chef', img: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=300&q=80' },
    ],
    'hogar': [
        { name: 'Maceta de Cerámica', img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=80' },
        { name: 'Vela Aromática', img: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=300&q=80' },
        { name: 'Espejo Redondo', img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=300&q=80' },
        { name: 'Herramientas Jardín', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=300&q=80' },
    ],
    'belleza': [
        { name: 'Serum', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&q=80' },
        { name: 'Perfume Natural', img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=300&q=80' }
    ],
    'ropa': [
        { name: 'Camiseta Algodón', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80' },
        { name: 'Vestido Lino', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=300&q=80' },
        { name: 'Calcetines Bambú', img: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=300&q=80' },
        { name: 'Gorro Lana', img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=300&q=80' },
        { name: 'Bolso Tela', img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=300&q=80' },
        { name: 'Gafas Sol Madera', img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=300&q=80' },
        { name: 'Reloj Bambú', img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=300&q=80' }
    ],
    'suplementos': [
        { name: 'Vitamina C', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80' },
        { name: 'Omega 3', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80' },
    ],
    'tecnologia': [
    ]
};

// Función para generar la lista completa de productos
function generateProducts() {
    categories.forEach(cat => {
        const items = productData[cat.id] || [];
        // Generamos productos basados en la lista curada
        // Si hay menos de 10, los repetimos hasta llegar a un número decente, pero sin abusar
        // Para este caso, usaremos solo los items definidos para garantizar calidad
        items.forEach((item, index) => {
            products.push({
                id: `${cat.id}-${index + 1}`, // ID único para cada producto
                name: item.name,
                price: (Math.random() * 50 + 5).toFixed(2), // Precio aleatorio entre 5 y 55
                category: cat.id,
                image: item.img,
                description: `Producto de alta calidad: ${item.name}. Ideal para tu estilo de vida sostenible.`
            });
        });
    });
}

// Ejecutamos la generación de productos al cargar el script
generateProducts();

// Función para renderizar los productos en el DOM
// Recibe filtros opcionales de categoría y término de búsqueda
function renderProducts(categoryFilter = null, searchTerm = null) {
    const container = document.getElementById('products-container');
    if (!container) return; // Si no existe el contenedor, salimos

    container.innerHTML = ''; // Limpiamos el contenedor

    let filteredProducts = products;

    // Filtramos por categoría si se especifica
    if (categoryFilter) {
        filteredProducts = filteredProducts.filter(p => p.category === categoryFilter);
    }

    // Filtramos por término de búsqueda si se especifica
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Si no hay productos que coincidan, mostramos un mensaje
    if (filteredProducts.length === 0) {
        container.innerHTML = '<div class="col-12 text-center"><h3>No se encontraron productos.</h3></div>';
        return;
    }

    // Iteramos sobre los productos filtrados y creamos las tarjetas HTML
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-4 col-lg-3 mb-4'; // Clases de Bootstrap para la grilla

        // Estructura de la tarjeta del producto
        // Incluye manejo de error en la imagen (onerror) para mostrar un placeholder si falla
        card.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(product.name)}'">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-muted">${product.description}</p>
                    <div class="mt-auto">
                        <h4 class="text-primary mb-3">$${product.price}</h4>
                        <button class="btn btn-primary w-100" onclick="addToCart('${product.id}')">
                            <i class="fas fa-cart-plus me-2"></i>Añadir
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Obtenemos los parámetros de la URL para filtrar al cargar la página
const urlParams = new URLSearchParams(window.location.search);
const categoryParam = urlParams.get('cat');
const searchParam = urlParams.get('search');

// Evento que se dispara cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Renderizamos los productos con los filtros iniciales
    renderProducts(categoryParam, searchParam);

    // Actualizamos el título de la categoría si es necesario
    const titleEl = document.getElementById('category-title');
    if (titleEl) {
        if (categoryParam) {
            const cat = categories.find(c => c.id === categoryParam);
            titleEl.textContent = cat ? cat.name : 'Todos los Productos';
        } else {
            titleEl.textContent = 'Todos los Productos';
        }
    }
});
