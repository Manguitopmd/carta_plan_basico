// Cargar secciones dinámicamente
function loadSection(section) {
    fetch(`${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            // Reaplicar animaciones después de cargar el contenido
            document.querySelectorAll('.animate-slide-up').forEach((el, index) => {
                el.style.animationDelay = `${index * 0.1}s`;
            });
        })
        .catch(error => console.error('Error cargando la sección:', error));
}

// Modal
function openModal(title, description, price) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-price').textContent = price;
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    modal.classList.remove('hidden');
    setTimeout(() => modalContent.classList.replace('scale-0', 'scale-100'), 10);
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    modalContent.classList.replace('scale-100', 'scale-0');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

// Formulario de reservas a WhatsApp
function sendReservation(event) {
    event.preventDefault();
    const form = document.getElementById('reservationForm');
    const name = form.name.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const time = form.time.value;
    const people = form.people.value;
    const message = `Reserva:\nNombre: ${name}\nTeléfono: ${phone}\nFecha: ${date}\nHora: ${time}\nPersonas: ${people}`;
    const whatsappUrl = `https://wa.me/51930288404?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    form.reset();
}

// Control de música
const audio = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
audio.volume = 0.5; // Volumen al 50%
audio.play();

function toggleMusic() {
    if (audio.paused) {
        audio.play();
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        musicToggle.innerHTML = '<i class="fas fa-play"></i>';
    }
}