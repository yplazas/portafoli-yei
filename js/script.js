let lastScrollTop = 0;
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');
const navbar = document.querySelector('.nav');
const verCertificados = document.querySelector('#ver-mas');
const ocultarCertificados = document.querySelector('.cerrarCertificados');
const ocultarCertificadosX = document.querySelector('#cerrarCertificados');
const seccionCertificados = document.querySelector('.contenido__certificados');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active'); // Agrega la clase activa para la animación
});

window.addEventListener("scroll", () => {
    let currentScroll = document.documentElement.scrollTop;
    navbar.style.top = currentScroll > lastScrollTop ? "-300px" : "0";
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

verCertificados.addEventListener("click", () => {
    seccionCertificados.style.display = "block";
});

ocultarCertificados.addEventListener("click", () => {
    seccionCertificados.style.display = "none";
});

ocultarCertificadosX.addEventListener("click", () => {
    seccionCertificados.style.display = "none";
});