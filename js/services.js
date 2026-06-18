const cards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = parseInt(entry.target.dataset.index) || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index % 3 * 80);
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => observer.observe(card));

// Subtle parallax tilt on hover
cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'opacity .5s ease, transform .5s ease, border-color .3s ease';
  });

  card.addEventListener('mouseenter', () => {
    card.style.transition = 'opacity .5s ease, transform .15s ease, border-color .3s ease';
  });
});