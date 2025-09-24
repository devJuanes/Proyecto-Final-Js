// Datos de destinos simulados
const destinosData = [
  {
    nombre: "París, Francia",
    descripcion: "La ciudad del amor con monumentos icónicos",
    precio: "$1,200",
    emoji: "🗼",
  },
  {
    nombre: "Bali, Indonesia",
    descripcion: "Paraíso tropical con playas de ensueño",
    precio: "$800",
    emoji: "🏝️",
  },
  {
    nombre: "Machu Picchu, Perú",
    descripcion: "Misteriosa ciudadela incaica en los Andes",
    precio: "$950",
    emoji: "🏔️",
  },
  {
    nombre: "Tokio, Japón",
    descripcion: "Metrópolis moderna con tradición milenaria",
    precio: "$1,400",
    emoji: "🗾",
  },
  {
    nombre: "Santorini, Grecia",
    descripcion: "Isla griega con vistas al mar Egeo",
    precio: "$1,100",
    emoji: "🏺",
  },
  {
    nombre: "Nueva York, EE.UU.",
    descripcion: "La ciudad que nunca duerme",
    precio: "$1,300",
    emoji: "🗽",
  },
];

// Funcionalidad de búsqueda mejorada
document.getElementById("searchBtn").addEventListener("click", buscarDestinos);
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      buscarDestinos();
    }
  });

function buscarDestinos() {
  const input = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  const resultados = document.getElementById("resultados");

  if (input === "") {
    mostrarMensaje("Por favor, ingresa un destino o palabra clave.", "warning");
    return;
  }

  // Simular búsqueda
  const destinosEncontrados = destinosData.filter(
    (destino) =>
      destino.nombre.toLowerCase().includes(input) ||
      destino.descripcion.toLowerCase().includes(input)
  );

  if (destinosEncontrados.length > 0) {
    mostrarResultados(destinosEncontrados);
  } else {
    mostrarMensaje(
      `No se encontraron destinos para "${input}". ¡Pero tenemos muchas opciones increíbles!`,
      "info"
    );
    // Mostrar destinos aleatorios
    const destinosAleatorios = destinosData
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    mostrarResultados(destinosAleatorios);
  }
}

function mostrarResultados(destinos) {
  const resultados = document.getElementById("resultados");
  resultados.innerHTML =
    '<h3 style="margin-bottom: 1rem; color: #0077b6;">Resultados de búsqueda:</h3>';

  destinos.forEach((destino) => {
    const card = document.createElement("div");
    card.className = "destino-card";
    card.innerHTML = `
                    <h3>${destino.emoji} ${destino.nombre}</h3>
                    <p>${destino.descripcion}</p>
                    <div class="precio">${destino.precio}</div>
                    <button class="btn-primary" style="margin-top: 1rem; padding: 0.5rem 1rem; font-size: 0.9rem;" onclick="reservarDestino('${destino.nombre}')">
                        Reservar ahora
                    </button>
                `;
    resultados.appendChild(card);
  });

  resultados.classList.add("show");
}

function mostrarMensaje(mensaje, tipo) {
  const resultados = document.getElementById("resultados");
  const color = tipo === "warning" ? "#ff6b6b" : "#00b4d8";
  resultados.innerHTML = `<p style="color: ${color}; font-size: 1.1rem; padding: 1rem; background: rgba(255,255,255,0.9); border-radius: 10px; display: inline-block;">${mensaje}</p>`;
  resultados.classList.add("show");
}

function reservarDestino(nombre) {
  alert(
    `¡Excelente elección! 🎉\n\nHas seleccionado: ${nombre}\n\nPronto serás redirigido a nuestro sistema de reservas. ¡Prepárate para una aventura increíble! ✈️`
  );
}

// Botón principal de reserva
document.getElementById("reservarBtn").addEventListener("click", () => {
  alert(
    "¡Bienvenido a TravelBloom! 🌍\n\n¿Listo para tu próxima aventura?\n\nUsa el buscador para encontrar tu destino ideal o explora nuestros destinos populares. ¡El mundo te espera! ✈️"
  );
});

// Efecto de scroll en navbar
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Animaciones al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in-up").forEach((el) => {
  observer.observe(el);
});

// Crear partículas flotantes
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 6 + "s";
    particle.style.animationDuration = Math.random() * 3 + 4 + "s";
    particlesContainer.appendChild(particle);
  }
}

// Smooth scrolling para navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Inicializar partículas cuando se carga la página
window.addEventListener("load", createParticles);

// Efecto de typing en el placeholder
const searchInput = document.getElementById("searchInput");
const placeholders = [
  "¿A dónde quieres viajar?",
  "París, Francia",
  "Bali, Indonesia",
  "Machu Picchu, Perú",
  "Tokio, Japón",
];
let currentPlaceholder = 0;

setInterval(() => {
  if (!searchInput.value) {
    currentPlaceholder = (currentPlaceholder + 1) % placeholders.length;
    searchInput.placeholder = placeholders[currentPlaceholder];
  }
}, 3000);
