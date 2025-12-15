// Responsive nav

const navigation = document.querySelector(".menu");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navLinks = document.querySelectorAll(".menu a");

navToggle.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible");

  if (visibility === "false") {
    navigation.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    navigation.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Smooth scroll + active class

const sections = document.querySelectorAll("section[id], div[id]");

function scrollTracker() {
  const currentYScroll = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 80;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(
      `nav .menu a[href*="#${id}"]`
    );

    if (!currentNavLink) return;

    if (
      currentYScroll > sectionTop &&
      currentYScroll <= sectionTop + sectionHeight
    ) {
      currentNavLink.classList.add("active");
    } else {
      currentNavLink.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollTracker);

/// scroll in view

// Function to check if an element is in view
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to add 'fade-in-visible' class when the element is in view
function handleScroll() {
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("fade-in-visible");
    }
  });
}

// Listen for scroll events
window.addEventListener("scroll", handleScroll);

// Trigger initial check on page load
document.addEventListener("DOMContentLoaded", handleScroll);
