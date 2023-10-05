// Menu Show
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
};
showMenu("nav-toggle", "nav-menu");

// Active Link
const navLinks = document.querySelectorAll(".nav-link");
function LinkAction() {
  navLinks.forEach((link) => link.classList.remove("active"));
  this.classList.add("active");
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLinks.forEach((link) => link.addEventListener("click", LinkAction));

// Noty js notification
const successNoty = new Noty({
  text: "Message sent successfully!",
  type: "success",
  theme: "sunset",
  timeout: 3000,
});
const errorNoty = new Noty({
  text: "Server Error!!",
  type: "error",
  theme: "sunset",
  timeout: 3000,
});

// Update Career text in header
const type = new Typed(".career-title", {
  strings: [
    "&lt; Web Developer /&gt;",
    "&lt; Web Designer &gt;",
    "{ Freelancer }",
    "Let's Collaborate!",
  ],
  typeSpeed: 100,
  startDelay: 2000,
  loop: true,
});

// Send Email for contact form
emailjs.init("is4Nwi870H66LD50L");
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(contactForm);

  // Send the email using EmailJS
  emailjs
    .send("service_x75md1t", "template_pwgmoel", {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      message: formData.get("message"),
    })
    .then((response) => {
      // Show success notification
      successNoty.show();

      // Reset the form after successful submission
      contactForm.reset();
    })
    .catch((error) => {
      errorNoty.show();
    });
});

// Function to check if a section is in the viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  const threshold = window.innerHeight * 0.5;

  return rect.top <= threshold && rect.bottom >= threshold;
};

// Function to add the "active" class to the current section's navigation link
const setActiveNavLink = () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    if (isInViewport(section)) {
      // Remove "active" class from all navigation links
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });

      // Find the corresponding navigation link for the current section
      const targetNavLink = document.querySelector(
        `.nav-link[href="#${section.id}"]`
      );

      if (targetNavLink) {
        // Add "active" class to the corresponding navigation link
        targetNavLink.classList.add("active");
      }
    }
  });
};

// Event listener for scroll event
window.addEventListener("scroll", setActiveNavLink);

// Scroll Reveal-Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
sr.reveal(".home-data");
sr.reveal(".home-img", { delay: 800 });
sr.reveal(".home-social", { delay: 1000 });
