
// TEXT ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    const texts = document.querySelectorAll(".headline-text");
    let index = 0;

    function showText(i) {
      texts.forEach((t, j) => {
        t.classList.remove("opacity-100", "translate-y-0");
        t.classList.add("opacity-0", "translate-y-6");
      });
      texts[i].classList.remove("opacity-0", "translate-y-6");
      texts[i].classList.add("opacity-100", "translate-y-0");
    }

    showText(index);
    setInterval(() => {
      index = (index + 1) % texts.length;
      showText(index);
    }, 4000); // change every 4s
  });

  // Mobile nav toggle
  const mobileBtn = document.getElementById('mobileBtn');
  const mobileNav = document.getElementById('mobileNav');
  mobileBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });

  
  // Simple slideshow logic
  const slides = document.querySelectorAll('#slides .slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;
  const switchSlide = (index) => {
    slides.forEach((s, i) => {
      s.style.opacity = (i === index) ? '1' : '0';
    });
    dots.forEach((d, i) => {
      d.classList.toggle('bg-white/60', i === index);
      d.classList.toggle('bg-white/40', i !== index);
    });
    current = index;
  };

  dots.forEach(d => {
    d.addEventListener('click', () => switchSlide(parseInt(d.dataset.index)));
  });



  // auto rotate every 5s
  setInterval(() => {
    const next = (current + 1) % slides.length;
    switchSlide(next);
  }, 4000);



  // Contact form demo handler
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // for a real site, integrate with backend / API / email system
    formMsg.classList.remove('hidden');
    setTimeout(() => formMsg.classList.add('hidden'), 4000);
    form.reset();
  });


  // Initialize AOS
  AOS.init({
    duration: 700,
  });