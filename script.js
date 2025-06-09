// Loader
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});

// Scroll Reveal
const reveals = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
});
