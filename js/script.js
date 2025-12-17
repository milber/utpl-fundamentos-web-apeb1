document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const localStorageKey = 'theme-mode';

    // Función para aplicar el tema
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            toggleButton.textContent = 'Modo Claro';
        } else {
            body.classList.remove('dark-mode');
            toggleButton.textContent = 'Modo Oscuro';
        }
    }

    // 1. Cargar el tema guardado en Local Storage (o usar por defecto 'light')
    const savedTheme = localStorage.getItem(localStorageKey) || 'light';
    applyTheme(savedTheme);

    // 2. Escuchar el evento click en el botón
    toggleButton.addEventListener('click', () => {
        // Determinar el nuevo tema
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        
        // Aplicar y guardar
        applyTheme(newTheme);
        localStorage.setItem(localStorageKey, newTheme);
    });
});