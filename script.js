// Variables globales
let slideIndex = 0;
let slideTimer;

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    startAutoSlide();
});

// Funciones del menú de navegación
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    if (navbar.className.indexOf("w3-show") == -1) {
        navbar.className += " w3-show";
    } else {
        navbar.className = navbar.className.replace(" w3-show", "");
    }
}

function closeMenu() {
    const navbar = document.getElementById("navbar");
    navbar.className = navbar.className.replace(" w3-show", "");
}

// Funciones del carrusel
function initializeCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    // Ocultar todas las diapositivas
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Mostrar la primera diapositiva
    if (slides.length > 0) {
        slides[0].classList.add('active');
        if (indicators.length > 0) {
            indicators[0].classList.add('active');
        }
    }
}

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    // Verificar límites
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    
    // Ocultar todas las diapositivas
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Mostrar la diapositiva actual
    if (slides.length > 0) {
        slides[slideIndex].classList.add('active');
        if (indicators.length > slideIndex) {
            indicators[slideIndex].classList.add('active');
        }
    }
}

function changeSlide(direction) {
    stopAutoSlide();
    slideIndex += direction;
    showSlide(slideIndex);
    startAutoSlide();
}

function currentSlide(index) {
    stopAutoSlide();
    slideIndex = index - 1;
    showSlide(slideIndex);
    startAutoSlide();
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function startAutoSlide() {
    slideTimer = setInterval(nextSlide, 5000); // Cambio cada 5 segundos
}

function stopAutoSlide() {
    if (slideTimer) {
        clearInterval(slideTimer);
    }
}

// Pausar el carrusel cuando el usuario interactúa
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        stopAutoSlide();
    } else {
        startAutoSlide();
    }
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cerrar menú móvil al hacer clic fuera
document.addEventListener('click', function(event) {
    const navbar = document.getElementById("navbar");
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
    }
});

// Manejo de errores para imágenes faltantes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Crear un placeholder cuando la imagen no se encuentra
            const placeholder = document.createElement('div');
            placeholder.style.width = this.offsetWidth + 'px';
            placeholder.style.height = this.offsetHeight + 'px';
            placeholder.style.backgroundColor = '#666';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.color = 'white';
            placeholder.style.fontSize = '14px';
            placeholder.textContent = 'Imagen no encontrada';
            
            this.parentNode.replaceChild(placeholder, this);
        });
    });
});
