document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
/*Cuando se hace clic en un enlace de la barra de navegación, 
la página se desplaza suavemente hasta la sección correspondiente 
en lugar de recargarse*/

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');

    mobileMenuToggle.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });
});
