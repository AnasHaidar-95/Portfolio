
      // Toggle mobile menu
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");

      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
      });

      // Close menu when clicking on a link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navLinks.classList.remove("active");
        });
      });

      // Header scroll effect
      window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });

      // Form submission
      document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          // Get form values
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const subject = document.getElementById("subject").value;
          const message = document.getElementById("message").value;

          // Here you would normally send the data to a server
          console.log("Form submitted:", { name, email, subject, message });

          // Show success message
          alert("Thank you for your message! I will get back to you soon.");

          // Reset form
          this.reset();
        });

      // Create floating particles
      function createParticles() {
        const particlesContainer = document.getElementById("particles");
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
          const particle = document.createElement("div");
          particle.className = "particle";
          particle.style.left = Math.random() * 100 + "%";
          particle.style.animationDelay = Math.random() * 20 + "s";
          particle.style.animationDuration = Math.random() * 20 + 10 + "s";
          particlesContainer.appendChild(particle);
        }
      }

      // Intersection Observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      }, observerOptions);

      // Observe elements
      document
        .querySelectorAll(".project-card, .about-content, .contact-content")
        .forEach((el) => {
          el.style.opacity = "0";
          el.style.transform = "translateY(30px)";
          el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          observer.observe(el);
        });

      // Initialize
      createParticles();
     
      const phrases = [
        "Full-Stack Developer",
        "Frontend Developer",
        "Backend Developer",
      ];

      const typeText = document.getElementById("type-text");
      const cursor = document.getElementById("cursor");

      let phraseIndex = 0;
      let charIndex = 0;
      let deleting = false;
      const typeSpeed = 100;
      const delSpeed = 50;
      const pauseTime = 1500; // wait between phrases

      function typeWriter() {
        const current = phrases[phraseIndex];

        if (deleting) {
          // remove chars
          typeText.textContent = current.substring(0, charIndex--);
          if (charIndex < 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeWriter, 300);
            return;
          }
        } else {
          // add chars
          typeText.textContent = current.substring(0, ++charIndex);
          if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeWriter, pauseTime);
            return;
          }
        }

        setTimeout(typeWriter, deleting ? delSpeed : typeSpeed);
      }

      // start after a small delay
      setTimeout(typeWriter, 500);