const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass();

    panel.classList.add('active');
  });
});

// remove function
function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
