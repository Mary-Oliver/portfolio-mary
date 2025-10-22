document.addEventListener('DOMContentLoaded', () => {

  //  BARRA LATERAL 
  document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ANIMAÇÃO DAS SEÇÕES 
  const sections = document.querySelectorAll('section, header');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(section => observer.observe(section));

  //  ANIMAÇÃO DAS SKILLS 
  document.querySelectorAll('.skill-bar div').forEach(bar => {
    const width = bar.style.getPropertyValue('--width');
    setTimeout(() => { bar.style.width = width; }, 500);
  });

  //  CARROSSEL DE PROJETOS 
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    const images = carousel.querySelector('.carousel-images');
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');
    if (!images || !prev || !next) return;
    let index = 0;

    next.addEventListener('click', () => {
      index = (index + 1) % images.children.length;
      images.style.transform = `translateX(-${index * 100}%)`;
    });

    prev.addEventListener('click', () => {
      index = (index - 1 + images.children.length) % images.children.length;
      images.style.transform = `translateX(-${index * 100}%)`;
    });
  });

  // MENU RECOLHÍVEL 
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebarNav = document.querySelector('.sidebar-nav');

  if (menuToggle && sidebarNav) {
    menuToggle.addEventListener('click', () => {
      sidebarNav.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    sidebarNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        sidebarNav.classList.remove('active');
      });
    });
  }

});
