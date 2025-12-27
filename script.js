const hrefProjects = ()=>{
    location.href = "#projects"
}

const hrefContact = ()=>{
    location.href = "#contact"
}

const offsetHome = document.getElementById("home").offsetTop
const offsetProjects = document.getElementById("projects").offsetTop
const offsetSkills = document.getElementById("skills").offsetTop
const offsetContact = document.getElementById("contact").offsetTop

window.addEventListener("scroll", ()=>{
    if (window.scrollY >= offsetHome-100) {
        const navLinks = document.querySelectorAll(".navlink")
        navLinks.forEach((link)=>{
            link.classList.remove("active")
        })
        const homeLink = document.getElementById("navlink-home")
        homeLink.classList.add("active")
    }
    if (window.scrollY >= offsetSkills-100) {
        const navLinks = document.querySelectorAll(".navlink")
        navLinks.forEach((link)=>{
            link.classList.remove("active")
        })
        const skillsLink = document.getElementById("navlink-skills")
        skillsLink.classList.add("active")
    }
    if (window.scrollY >= offsetProjects-100) {
        const navLinks = document.querySelectorAll(".navlink")
        navLinks.forEach((link)=>{
            link.classList.remove("active")
        })
        const projectsLink = document.getElementById("navlink-projects")
        projectsLink.classList.add("active")
    }
    if (window.scrollY >= offsetContact-100) {
        const navLinks = document.querySelectorAll(".navlink")
        navLinks.forEach((link)=>{
            link.classList.remove("active")
        })
        const contactLink = document.getElementById("navlink-contact")
        contactLink.classList.add("active")
    }
})

const header = document.getElementById("main-header");
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
// Seleccionamos todos los links que están DENTRO del menú
const navLinks = document.querySelectorAll("#mobile-menu a");

// Función reutilizable para abrir/cerrar
function toggleMenu() {
    // 1. Alternar visibilidad del menú
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    
    // 2. Alternar altura completa del header
    header.classList.toggle("h-screen");
    
    // 3. Alternar alineación
    header.classList.toggle("items-center");
    header.classList.toggle("items-start");
}

// Evento para el botón hamburguesa
menuButton.addEventListener("click", toggleMenu);

// Evento para CADA enlace del menú
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Solo cerramos si el menú está abierto (tiene h-screen)
        // Esto evita problemas si haces clic en la versión de escritorio
        if (header.classList.contains("h-screen")) {
            toggleMenu();
        }
    });
});