document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            if (targetId.toLowerCase() === 'inicio') {
                window.location.href = 'index.html';
            } else if (targetId.toLowerCase() === 'cursos') {
                window.location.href = 'cursos_precio.html';
            } else {
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("show");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 767) {
            navbar.classList.remove("show");
        }
    });
});


