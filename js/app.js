// After Dom is Loaded do the following
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navbarList = document.getElementById("navbar-list");

  // Create the navigation menu
  function RenderNavbar() {
    for (let i = 0; i < sections.length; i++) {
      // add a new list item for each defined section
      const listItem = document.createElement("li");

      // Create anchor tag with the section's id
      const link = document.createElement("a");
      link.textContent = sections[i].getAttribute("nav-data");
      link.href = `#${sections[i].id}`;
      link.className = "menu-link";

      // Add link to the listItem then add the listItem to navbar-list
      listItem.appendChild(link);
      navbarList.appendChild(listItem);
    }
  }

  // Add 'active-section' class to the section in the current viewport
  function highlightSection() {
    let currentActiveIndex = -1;

    // Loop all over all sections to find the one in the current viewport
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();

      // If the section is in the viewport, set assign the index to the variable currentActiveIndex
      if (rect.top >= -150 && rect.top <= window.innerHeight / 2) {
        currentActiveIndex = index;
      }
    });

    // Reset the active class on all navLinks
    const navLinks = document.querySelectorAll(".menu-link");
    navLinks.forEach((link) => link.classList.remove("active-section"));

    // Add active-section class to the navLink corresponding to the section in the current viewport
    if (currentActiveIndex !== -1) {
      navLinks[currentActiveIndex].classList.add("active-section");
    }
  }

  function scrollToSection(event) {
    if (event.target.nodeName === "A") {
      event.preventDefault();
      const targetSection = document.querySelector(
        event.target.getAttribute("href")
      );

      // Scroll to the targeted section with smooth transition
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  // Call the functions
  RenderNavbar(); // Create the navbar list items
  window.addEventListener("scroll", highlightSection); // Highlight the section in the current viewport
  navbarList.addEventListener("click", scrollToSection); // scroll to the targeted section
});
