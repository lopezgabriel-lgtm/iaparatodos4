// Función que se ejecuta cada vez que se hace scroll
        window.onscroll = function() { toggleStickyHeader() };

        const header = document.getElementById("main-header");
        const triggerPixel = 50; // Pixeles de scroll necesarios para activar el cambio

        function toggleStickyHeader() {
            // Verifica si el scroll vertical ha pasado el triggerPoint
            if (window.pageYOffset > triggerPixel) {
                // Añade la clase que cambia el color y estilo
                header.classList.add("header-sticky");
            } else {
                // Quita la clase si volvemos arriba
                header.classList.remove("header-sticky");
            }
        }