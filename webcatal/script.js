const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const images = document.querySelectorAll('.gallery img');
const darkToggle = document.getElementById('darkModeToggle');

// Modal preview
images.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Toggle Dark Mode
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Simpan preferensi di localStorage (opsional)
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Cek preferensi sebelumnya
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}
