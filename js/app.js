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
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();

      // if the section is in the current viewport
      if (rect.top >= 0 && rect.top <= 300) {
        sections[i].classList.add("active-section");
      } else {
        sections[i].classList.remove("active-section");
      }
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
