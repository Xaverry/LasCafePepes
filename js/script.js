const navbar = document.querySelector(".navbar");
const revealElements = document.querySelectorAll(".reveal");
const contactForm = document.getElementById("contactForm");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  revealOnScroll();
});

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

revealOnScroll();

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("Por favor completa los campos obligatorios.");
    return;
  }

  const numeroWhatsApp = "50670763698";

  const texto = `Hola, soy ${nombre}. 
Correo: ${correo}
Teléfono: ${telefono || "No indicado"}

Mensaje:
${mensaje}`;

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

  window.open(urlWhatsApp, "_blank");

  contactForm.reset();
});