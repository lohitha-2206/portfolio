var typed = new Typed(".text", {
    strings: [" Front-end Developer", " Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

const certBoxes = document.querySelectorAll(".certifications-list div");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  { threshold: 0.1 }
);

certBoxes.forEach((box) => {
  box.style.animationPlayState = "paused"; // pause by default
  observer.observe(box);
});

const aboutSection = document.querySelector(".about-text");

const observer1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.3, // Trigger when 30% of the section is visible
  }
);

observer1.observe(aboutSection);

const bars = document.querySelectorAll(".radial-bars");

  const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const path = entry.target.querySelector(".path");
        const percent = path.style.getPropertyValue('--percent');
        const dashOffset = 502 - (502 * percent) / 100;
        path.style.strokeDashoffset = dashOffset;

        entry.target.classList.add("active");
        observer3.unobserve(entry.target); // Remove once animated
      }
    });
  }, { threshold: 0.6 });

  bars.forEach(bar => observer3.observe(bar));



 const projectBoxes = document.querySelectorAll(".project");

 const projectObserver = new IntersectionObserver(
   (entries) => {
     entries.forEach((entry, index) => {
       if (entry.isIntersecting) {
         setTimeout(() => {
           const project = entry.target;
           project.style.animationPlayState = "running";
           project.querySelector(".project-text").style.animationPlayState =
             "running";
           project.querySelector(".project-image").style.animationPlayState =
             "running";
         }, index * 300); // stagger each project box
       }
     });
   },
   { threshold: 0.3 }
 );

 projectBoxes.forEach((box) => {
   box.style.animationPlayState = "paused";
   box.querySelector(".project-text").style.animationPlayState = "paused";
   box.querySelector(".project-image").style.animationPlayState = "paused";
   projectObserver.observe(box);
 });

const contactForm = document.querySelector(".contact-form");

const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  { threshold: 0.2 }
);

contactForm.style.animationPlayState = "paused";
contactObserver.observe(contactForm);

const footer = document.querySelector(".footer");

const footerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  { threshold: 0.2 }
);

footer.style.animationPlayState = "paused";
footerObserver.observe(footer);





