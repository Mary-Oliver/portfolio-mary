document.addEventListener('DOMContentLoaded', () => {

  //barra lateral
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Animação das seções ao rolar
  const sections = document.querySelectorAll('section, header');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(section => observer.observe(section));

  // Animação skills
  document.querySelectorAll('.skill-bar div').forEach(bar => {
    const width = bar.style.getPropertyValue('--width');
    setTimeout(() => { bar.style.width = width; }, 500);
  });

  // Carrossel dos projetos 
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    const images = carousel.querySelector('.carousel-images');
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');
    if (!images || !prev || !next) return; 
    let index = 0;

    next.addEventListener('click', () => {
      if (index < images.children.length - 1) index++;
      else index = 0;
      images.style.transform = `translateX(-${index * 100}%)`;
    });

    prev.addEventListener('click', () => {
      if (index > 0) index--;
      else index = images.children.length - 1;
      images.style.transform = `translateX(-${index * 100}%)`;
    });
  });

});
