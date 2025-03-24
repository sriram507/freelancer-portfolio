
  // Initialize AOS animation
  AOS.init({
    duration: 1000,
    once: true
  });

  // Initialize Typed.js
  if(document.getElementById('typing-text')) {
    var typed = new Typed('#typing-text', {
      strings: ["MERN Fullstack Developer", "Freelancer", "Web Application Specialist", "JavaScript Expert"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  }

  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Back to top button
  const backToTopButton = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  // Form submission
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to your server
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
