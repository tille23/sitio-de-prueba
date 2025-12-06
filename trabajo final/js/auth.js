// Lógica de Autenticación
// Objeto principal para manejar el estado de la sesión del usuario
const auth = {
    // Verifica si el usuario ha iniciado sesión revisando localStorage
    isLoggedIn: () => {
        return localStorage.getItem('user') !== null;
    },

    // Obtiene los datos del usuario almacenados
    getUser: () => {
        return JSON.parse(localStorage.getItem('user'));
    },

    // Simula el inicio de sesión guardando datos en localStorage
    login: (email, name) => {
        const user = { email, name };
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = 'index.html'; // Redirige al inicio
    },

    // Simula el registro de un nuevo usuario
    register: (name, email, password) => {
        const user = { email, name };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registro exitoso. Bienvenido!');
        window.location.href = 'index.html';
    },

    // Cierra la sesión eliminando los datos y recargando la página
    logout: () => {
        localStorage.removeItem('user');
        window.location.reload();
    },

    // Verifica si el usuario está logueado antes de realizar una acción protegida
    // Si no lo está, redirige al login
    checkAuth: () => {
        if (!auth.isLoggedIn()) {
            alert('Debes iniciar sesión para realizar esta acción.');
            window.location.href = 'login.html';
            return false;
        }
        return true;
    }
};

// Actualización de la Interfaz de Usuario (UI) basada en el estado de autenticación
// Se ejecuta cuando el documento HTML ha terminado de cargarse
document.addEventListener('DOMContentLoaded', () => {
    const authButtons = document.getElementById('auth-buttons');
    if (authButtons) {
        if (auth.isLoggedIn()) {
            // Si está logueado, mostramos el nombre y opción de salir
            const user = auth.getUser();
            authButtons.innerHTML = `
                <div class="dropdown">
                    <button class="btn btn-outline-primary dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown">
                        <i class="fas fa-user me-2"></i>${user.name}
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#" onclick="auth.logout()">Cerrar Sesión</a></li>
                    </ul>
                </div>
            `;
        } else {
            // Si no está logueado, mostramos botón de Login/Registro
            authButtons.innerHTML = `<a href="login.html" class="btn btn-primary">Login / Registro</a>`;
        }
    }
});
