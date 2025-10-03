
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



  // document.getElementById("contactForm").addEventListener("submit", async function(e) {
  //   e.preventDefault(); // stop default redirect
  //   const form = e.target;
  //   const data = new FormData(form);
  
  //   // Reset messages
  //   document.getElementById("formSuccess").classList.add("hidden");
  //   document.getElementById("formError").classList.add("hidden");
  
  //   try {
  //     const response = await fetch(form.action, {
  //       method: form.method,
  //       body: data,
  //       headers: { 'Accept': 'application/json' }
  //     });
  
  //     if (response.ok) {
  //       form.reset();
  //       document.getElementById("formSuccess").classList.remove("hidden");
  //     } else {
  //       document.getElementById("formError").classList.remove("hidden");
  //     }
  //   } catch (error) {
  //     document.getElementById("formError").classList.remove("hidden");
  //   }
  // });



  document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
  
    const btn = form.querySelector("button[type=submit]");
    const originalText = btn.innerHTML;
  
    // Reset messages
    document.getElementById("formSuccess").classList.add("hidden");
    document.getElementById("formError").classList.add("hidden");
  
    // Disable button & show loading
    btn.disabled = true;
    btn.innerHTML = `
      <svg class="animate-spin h-5 w-5 mr-2 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"></path>
      </svg>
      Sending...
    `;
  
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });
  
      if (response.ok) {
        form.reset();
        document.getElementById("formSuccess").classList.remove("hidden");
      } else {
        document.getElementById("formError").classList.remove("hidden");
      }
    } catch (error) {
      document.getElementById("formError").classList.remove("hidden");
    }
  
    // Restore button
    btn.disabled = false;
    btn.innerHTML = originalText;
  });