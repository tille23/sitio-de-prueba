// Lógica Común y General del Sitio

// Funcionalidad de Búsqueda en la Barra de Navegación
// Escuchamos el evento 'submit' del formulario de búsqueda
document.querySelector('form.d-flex').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitamos que el formulario recargue la página
    const searchTerm = this.querySelector('input').value;
    // Redirigimos a la página de productos con el término de búsqueda en la URL
    window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`;
});

// Validación del Formulario de Contacto
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevenimos el envío estándar
        // Verificamos la validez del formulario usando la API nativa del navegador
        if (!this.checkValidity()) {
            e.stopPropagation();
            this.classList.add('was-validated'); // Añadimos clases de Bootstrap para mostrar errores
            return;
        }

        // Simulamos el envío exitoso
        alert('Gracias por contactarnos. Te responderemos pronto.');
        this.reset(); // Limpiamos el formulario
        this.classList.remove('was-validated');
    });
}
