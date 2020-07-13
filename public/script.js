const modalOverlay = document.querySelector('.modal-overlay');
const cursos = document.querySelectorAll('.course');

for (const curso of cursos) {
  curso.addEventListener('click', () => {
    const cursoId = curso.getAttribute('id');
    window.location.href = `/courses/${cursoId}`
  });
};