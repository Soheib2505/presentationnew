(function(){
  const total = 9;
  let current = 1;
  const slides = Array.from(document.querySelectorAll('.slide'));
  const elCurrent = document.getElementById('current');
  const elTotal = document.getElementById('total');
  const btnPrev = document.getElementById('prev-btn');
  const btnNext = document.getElementById('next-btn');
  const progressBar = document.getElementById('progress');

  function show(i){
    if(i < 1) i = 1;
    if(i > total) i = total;
    
    const oldCurrent = current;
    current = i;
    
    // Update active slide with enhanced transitions
    slides.forEach((s, idx) => {
      const isActive = idx === i - 1;
      const wasPrev = idx === oldCurrent - 1;
      
      s.classList.remove('active', 'prev');
      
      if (isActive) {
        s.classList.add('active');
        // Trigger content animations
        setTimeout(() => {
          triggerContentAnimations(s);
        }, 100);
      } else if (wasPrev) {
        s.classList.add('prev');
      }
    });
    
    // Update counter with animation
    elCurrent.style.transform = 'scale(0.8)';
    setTimeout(() => {
      elCurrent.textContent = current;
      elCurrent.style.transform = 'scale(1)';
    }, 150);
    
    // Update progress bar with easing
    const progress = (current / total) * 100;
    progressBar.style.width = progress + '%';
    
    // Add ripple effect to nav buttons
    addRippleEffect();
  }

  function triggerContentAnimations(slide) {
    // Reset and retrigger animations for slide content
    const animatedElements = slide.querySelectorAll('.slide-header, .two-column, .slide-text-only, .col-image, .col-text');
    
    animatedElements.forEach((el, index) => {
      el.style.animation = 'none';
      el.offsetHeight; // Trigger reflow
      
      // Reapply animations with staggered delays
      setTimeout(() => {
        el.style.animation = '';
      }, index * 100);
    });
  }

  function addRippleEffect() {
    const buttons = [btnPrev, btnNext];
    buttons.forEach(btn => {
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        btn.style.transform = '';
      }, 150);
    });
  }

  // Enhanced event listeners
  btnPrev.addEventListener('click', (e) => {
    e.preventDefault();
    show(current - 1);
  });
  
  btnNext.addEventListener('click', (e) => {
    e.preventDefault();
    show(current + 1);
  });

  // Enhanced keyboard navigation
  document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      show(current + 1);
    }
    if(e.key === 'ArrowLeft') {
      e.preventDefault();
      show(current - 1);
    }
    if(e.key === 'Home') {
      e.preventDefault();
      show(1);
    }
    if(e.key === 'End') {
      e.preventDefault();
      show(total);
    }
    if(e.key >= '1' && e.key <= '9') {
      e.preventDefault();
      const slideNum = parseInt(e.key);
      if(slideNum <= total) show(slideNum);
    }
  });

  // Add smooth transitions on page load
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

  // Initialize with enhanced effects
  elTotal.textContent = total;
  show(1);
})();

