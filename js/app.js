// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the main elements
  const sections = document.querySelectorAll("section");
  const navList = document.querySelector("#navbar__list");

  // Function to build the navigation dynamically
  const buildNav = () => {
    sections.forEach((section) => {
      const navItem = document.createElement("li");
      const sectionID = section.id;
      const sectionTitle = section.dataset.nav; // Pulling the data-nav value

      // Create anchor tag for the section
      navItem.innerHTML = `<a href="#${sectionID}" class="menu__link">${sectionTitle}</a>`;
      navList.appendChild(navItem);
    });
  };

  // Function to highlight active section in the viewport
  const highlightActiveSection = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const link = document.querySelector(`a[href="#${section.id}"]`);

      if (sectionTop >= -150 && sectionTop <= 150) {
        // Add active class when the section is in the viewport
        section.classList.add("active-section");
        link.classList.add("active");
      } else {
        // Remove active class if out of viewport
        section.classList.remove("active-section");
        link.classList.remove("active");
      }
    });
  };

  // Function for smooth scrolling
  const smoothScroll = (event) => {
    event.preventDefault();
    if (event.target.nodeName === "A") {
      const targetID = event.target.getAttribute("href");
      const targetSection = document.querySelector(targetID);

      // Scroll smoothly to the section
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Event listener for scrolling to highlight active section
  window.addEventListener("scroll", highlightActiveSection);

  // Event listener for click to smooth scroll to sections
  navList.addEventListener("click", smoothScroll);

  // Initial function calls
  buildNav();
  highlightActiveSection(); // To set the first section as active when the page loads
});
