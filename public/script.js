const modalOverlay = document.querySelector('.modal-overlay');
const cursos = document.querySelectorAll('.course');

for (const curso of cursos) {
  curso.addEventListener('click', () => {
    const cursoId = curso.getAttribute('id');
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe').src = `http://www.rocketseat.com.br/${cursoId}`
  });
};

modalOverlay.querySelector('#close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('iframe').src = '';
});

modalOverlay.querySelector('#maximize-modal').addEventListener('click', () => {
  if (modalOverlay.classList.contains('maximized')){
    modalOverlay.classList.remove('maximized');
  } else {
    modalOverlay.classList.add('maximized');
  }
})
